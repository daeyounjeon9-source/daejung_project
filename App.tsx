import { useMemo, useState } from "react";

type CaseStatus = "NEW" | "REVIEW" | "APPROVED" | "REJECTED" | "ESCALATED";
type CaseType = "REFUND" | "EXCHANGE" | "DELIVERY" | "SELLER" | "PAYMENT";

type SupportCase = {
  id: number;
  customer: string;
  type: CaseType;
  title: string;
  amount: number;
  status: CaseStatus;
  priority: "LOW" | "NORMAL" | "HIGH" | "CRITICAL";
  memo: string;
};

type CaseLog = {
  id: number;
  time: string;
  action: string;
};

const initialCases: SupportCase[] = [
  {
    id: 1,
    customer: "USER-1024",
    type: "REFUND",
    title: "상품 파손 환불 요청",
    amount: 2840000,
    status: "NEW",
    priority: "HIGH",
    memo: "배송 중 파손 사진 첨부 필요",
  },
  {
    id: 2,
    customer: "USER-8821",
    type: "DELIVERY",
    title: "배송 지연 문의",
    amount: 890000,
    status: "REVIEW",
    priority: "NORMAL",
    memo: "물류센터 지연 확인",
  },
  {
    id: 3,
    customer: "SELLER-7002",
    type: "SELLER",
    title: "판매자 정산 분쟁",
    amount: 12400000,
    status: "ESCALATED",
    priority: "CRITICAL",
    memo: "정산 원장 및 계약서 검토 필요",
  },
];

export default function App() {
  const [cases, setCases] = useState<SupportCase[]>(initialCases);
  const [logs, setLogs] = useState<CaseLog[]>([
    {
      id: 1,
      time: new Date().toLocaleString(),
      action: "CS / 환불 / 분쟁 관리 센터 초기화",
    },
  ]);

  const summary = useMemo(() => {
    return {
      total: cases.length,
      escalated: cases.filter((item) => item.status === "ESCALATED").length,
      review: cases.filter((item) => item.status === "REVIEW").length,
      critical: cases.filter((item) => item.priority === "CRITICAL").length,
    };
  }, [cases]);

  const addLog = (action: string) => {
    setLogs((prev) => [
      {
        id: Date.now(),
        time: new Date().toLocaleString(),
        action,
      },
      ...prev,
    ]);
  };

  const updateCaseStatus = (id: number, status: CaseStatus) => {
    const target = cases.find((item) => item.id === id);

    setCases((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status } : item))
    );

    addLog(`${target?.title ?? "CS 건"} 상태 변경: ${status}`);
  };

  const createNewCase = () => {
    const newCase: SupportCase = {
      id: Date.now(),
      customer: `USER-${Math.floor(Math.random() * 9000 + 1000)}`,
      type: "REFUND",
      title: "AI 자동 감지 환불 검토 건",
      amount: Math.floor(Math.random() * 2000000) + 300000,
      status: "NEW",
      priority: "NORMAL",
      memo: "AI가 고객 불만 가능성을 감지하여 검토 생성",
    };

    setCases((prev) => [newCase, ...prev]);
    addLog("AI 자동 CS 케이스 생성");
  };

  const typeColor = (type: CaseType) => {
    if (type === "REFUND") return "text-red-400";
    if (type === "EXCHANGE") return "text-yellow-400";
    if (type === "DELIVERY") return "text-cyan-400";
    if (type === "SELLER") return "text-purple-400";
    return "text-green-400";
  };

  const statusColor = (status: CaseStatus) => {
    if (status === "APPROVED") return "text-green-400";
    if (status === "REJECTED") return "text-red-400";
    if (status === "ESCALATED") return "text-orange-400";
    if (status === "REVIEW") return "text-cyan-400";
    return "text-yellow-400";
  };

  const priorityColor = (priority: SupportCase["priority"]) => {
    if (priority === "CRITICAL") return "text-red-400";
    if (priority === "HIGH") return "text-orange-400";
    if (priority === "NORMAL") return "text-cyan-400";
    return "text-green-400";
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <p className="text-xs tracking-[0.4em] text-red-400">
              DAEJUNG NEXT
            </p>
            <h1 className="text-2xl font-black mt-1">
              CS REFUND DISPUTE CENTER
            </h1>
          </div>

          <button
            onClick={createNewCase}
            className="rounded-2xl bg-cyan-500 hover:bg-cyan-400 px-6 py-3 text-black font-black"
          >
            AI 케이스 생성
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6 space-y-6">
        <section className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className="rounded-3xl bg-zinc-950 border border-zinc-800 p-6">
            <p className="text-sm text-zinc-500">전체 CS</p>
            <p className="mt-3 text-4xl font-black text-cyan-400">{summary.total}</p>
          </div>

          <div className="rounded-3xl bg-zinc-950 border border-zinc-800 p-6">
            <p className="text-sm text-zinc-500">검토중</p>
            <p className="mt-3 text-4xl font-black text-yellow-400">{summary.review}</p>
          </div>

          <div className="rounded-3xl bg-zinc-950 border border-zinc-800 p-6">
            <p className="text-sm text-zinc-500">분쟁상향</p>
            <p className="mt-3 text-4xl font-black text-orange-400">{summary.escalated}</p>
          </div>

          <div className="rounded-3xl bg-zinc-950 border border-zinc-800 p-6">
            <p className="text-sm text-zinc-500">치명 우선순위</p>
            <p className="mt-3 text-4xl font-black text-red-400">{summary.critical}</p>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-6">
          <div className="rounded-[36px] bg-zinc-950 border border-zinc-800 p-6">
            <div className="flex items-center justify-between gap-4 mb-6">
              <div>
                <p className="text-xs tracking-[0.3em] text-zinc-500">CUSTOMER PROTECTION CASES</p>
                <h2 className="text-3xl font-black mt-2">환불·교환·분쟁 케이스</h2>
              </div>
              <div className="rounded-full px-4 py-2 bg-red-500/10 text-red-300 text-xs font-bold">
                PROTECTION LOG
              </div>
            </div>

            <div className="space-y-5">
              {cases.map((item) => (
                <div key={item.id} className="rounded-[28px] border border-zinc-800 bg-black p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
                    <div>
                      <div className="flex flex-wrap gap-3 text-xs">
                        <span className={typeColor(item.type)}>{item.type}</span>
                        <span className={statusColor(item.status)}>{item.status}</span>
                        <span className={priorityColor(item.priority)}>{item.priority}</span>
                        <span className="text-cyan-400">{item.customer}</span>
                      </div>

                      <h3 className="mt-3 text-2xl font-black">{item.title}</h3>
                      <p className="mt-3 text-sm text-zinc-400">{item.memo}</p>
                      <p className="mt-4 text-3xl font-black text-green-400">
                        ₩{item.amount.toLocaleString()}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 min-w-[280px]">
                      <button
                        onClick={() => updateCaseStatus(item.id, "REVIEW")}
                        className="py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition-all text-black font-black"
                      >
                        검토
                      </button>
                      <button
                        onClick={() => updateCaseStatus(item.id, "APPROVED")}
                        className="py-4 rounded-2xl bg-green-600 hover:bg-green-500 transition-all font-black"
                      >
                        승인
                      </button>
                      <button
                        onClick={() => updateCaseStatus(item.id, "REJECTED")}
                        className="py-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700 transition-all font-black"
                      >
                        반려
                      </button>
                      <button
                        onClick={() => updateCaseStatus(item.id, "ESCALATED")}
                        className="py-4 rounded-2xl bg-red-600 hover:bg-red-500 transition-all font-black"
                      >
                        분쟁상향
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[32px] bg-zinc-950 border border-zinc-800 p-6">
              <p className="text-xs tracking-[0.3em] text-zinc-500">PROCESS RULE</p>
              <h2 className="text-2xl font-black mt-2">CS 처리 원칙</h2>

              <div className="mt-5 space-y-3 text-sm text-zinc-300">
                <div className="rounded-2xl bg-black border border-zinc-800 p-4">고객 요청 접수</div>
                <div className="rounded-2xl bg-black border border-zinc-800 p-4">증빙자료 확인</div>
                <div className="rounded-2xl bg-black border border-zinc-800 p-4">판매자 소명 요청</div>
                <div className="rounded-2xl bg-black border border-zinc-800 p-4">환불/교환 승인 또는 반려</div>
                <div className="rounded-2xl bg-black border border-zinc-800 p-4">분쟁 시 법무·회계 기록 연결</div>
              </div>
            </div>

            <div className="rounded-[32px] bg-zinc-950 border border-zinc-800 p-6">
              <p className="text-xs tracking-[0.3em] text-zinc-500">AUDIT TRAIL</p>
              <h2 className="text-2xl font-black mt-2">처리 이력</h2>

              <div className="mt-5 space-y-3 max-h-[420px] overflow-auto pr-2">
                {logs.map((log) => (
                  <div key={log.id} className="rounded-2xl bg-black border border-zinc-800 p-4">
                    <div className="text-xs text-zinc-500">{log.time}</div>
                    <p className="mt-2 text-sm text-zinc-300">{log.action}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] bg-zinc-950 border border-red-500/20 p-6">
              <p className="text-xs tracking-[0.3em] text-red-400">LEGAL SAFE NOTE</p>
              <div className="mt-4 space-y-3 text-sm text-zinc-300">
                <p>환불/교환 기준 고지 필요</p>
                <p>고객 증빙자료 보존 필요</p>
                <p>판매자 소명 기록 필요</p>
                <p>정산 차감 시 회계 원장 연결 필요</p>
              </div>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}
