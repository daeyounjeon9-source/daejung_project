import { useMemo, useState } from "react";

const MASTER_ID = "livon700220";
const MASTER_PASSWORD = "jdy0220!";
const MASTER_OTP = "1448927";
const MAX_FAIL_COUNT = 3;

type AccessLog = {
  time: string;
  status: "SUCCESS" | "FAIL" | "LOCKED" | "BLOCKED";
  message: string;
};

export default function AdminSecurityAccess() {
  const [adminId, setAdminId] = useState(MASTER_ID);
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [failCount, setFailCount] = useState(0);
  const [locked, setLocked] = useState(false);
  const [emergencyBlocked, setEmergencyBlocked] = useState(false);
  const [accessGranted, setAccessGranted] = useState(false);
  const [logs, setLogs] = useState<AccessLog[]>([
    {
      time: new Date().toLocaleString(),
      status: "SUCCESS",
      message: "MASTER ACCESS SYSTEM READY",
    },
  ]);

  const securityLevel = useMemo(() => {
    if (emergencyBlocked) return "EMERGENCY_BLOCK";
    if (locked) return "LOCKED";
    if (accessGranted) return "OMEGA_BLACK_GRANTED";
    return "OMEGA_BLACK_STANDBY";
  }, [emergencyBlocked, locked, accessGranted]);

  const addLog = (status: AccessLog["status"], message: string) => {
    setLogs((prev) => [
      {
        time: new Date().toLocaleString(),
        status,
        message,
      },
      ...prev,
    ]);
  };

  const handleAccess = () => {
    if (emergencyBlocked) {
      addLog("BLOCKED", "긴급 차단 상태입니다. 접근이 거부되었습니다.");
      return;
    }

    if (locked) {
      addLog("LOCKED", "3회 이상 실패로 접근이 잠겨 있습니다.");
      return;
    }

    const matched =
      adminId === MASTER_ID &&
      password === MASTER_PASSWORD &&
      otp === MASTER_OTP;

    if (matched) {
      setAccessGranted(true);
      setFailCount(0);
      addLog("SUCCESS", "OMEGA_BLACK 관리자 접근 승인");
      return;
    }

    const nextFail = failCount + 1;
    setFailCount(nextFail);
    setAccessGranted(false);

    if (nextFail >= MAX_FAIL_COUNT) {
      setLocked(true);
      addLog("LOCKED", "인증 3회 실패. 관리자 접근 잠금 처리");
    } else {
      addLog("FAIL", `인증 실패 ${nextFail}/${MAX_FAIL_COUNT}`);
    }
  };

  const resetLock = () => {
    setFailCount(0);
    setLocked(false);
    setAccessGranted(false);
    addLog("SUCCESS", "관리자 잠금 상태 수동 초기화");
  };

  const toggleEmergencyBlock = () => {
    const next = !emergencyBlocked;
    setEmergencyBlocked(next);
    setAccessGranted(false);
    addLog(
      next ? "BLOCKED" : "SUCCESS",
      next ? "긴급 차단 모드 활성화" : "긴급 차단 모드 해제"
    );
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-6">
        <section className="bg-zinc-950 border border-cyan-500/30 rounded-3xl p-8 shadow-2xl shadow-cyan-500/10">
          <div className="mb-8">
            <p className="text-xs tracking-[0.4em] text-cyan-400">DAEJUNG NEXT</p>
            <h1 className="mt-2 text-3xl font-black">MASTER ACCESS</h1>
            <p className="mt-2 text-sm text-zinc-400">
              OMEGA_BLACK 관리자 보안 접근 테스트 패널
            </p>
          </div>

          <div className="space-y-5">
            <div>
              <label className="text-sm text-zinc-400">관리자 ID</label>
              <input
                value={adminId}
                onChange={(e) => setAdminId(e.target.value)}
                className="w-full mt-2 bg-black border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="text-sm text-zinc-400">비밀번호</label>
              <input
                type="password"
                value={password}
                placeholder="비밀번호 입력"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-2 bg-black border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="text-sm text-zinc-400">OTP 인증번호</label>
              <input
                value={otp}
                placeholder="1448927"
                onChange={(e) => setOtp(e.target.value)}
                className="w-full mt-2 bg-black border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-cyan-400"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-zinc-900 rounded-2xl p-4 border border-zinc-800">
                <p className="text-xs text-zinc-500">접근 등급</p>
                <p className="mt-1 text-sm font-bold text-red-400">OMEGA_BLACK</p>
              </div>
              <div className="bg-zinc-900 rounded-2xl p-4 border border-zinc-800">
                <p className="text-xs text-zinc-500">실패 횟수</p>
                <p className="mt-1 text-sm font-bold text-yellow-400">
                  {failCount}/{MAX_FAIL_COUNT}
                </p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-4 border border-zinc-800">
              <p className="text-xs text-zinc-500">현재 보안 상태</p>
              <p className="mt-1 text-sm font-bold text-cyan-300">{securityLevel}</p>
            </div>

            <button
              onClick={handleAccess}
              className="w-full py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition-all text-black font-black tracking-widest shadow-lg shadow-cyan-500/30"
            >
              MASTER ACCESS CHECK
            </button>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={resetLock}
                className="py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-sm font-bold"
              >
                잠금 초기화
              </button>
              <button
                onClick={toggleEmergencyBlock}
                className="py-3 rounded-xl bg-red-600 hover:bg-red-500 text-sm font-bold"
              >
                긴급 차단
              </button>
            </div>
          </div>
        </section>

        <section className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">
          <div className="flex items-center justify-between gap-4 mb-6">
            <div>
              <p className="text-xs tracking-[0.3em] text-zinc-500">SECURITY CORE</p>
              <h2 className="mt-2 text-2xl font-black">실시간 접근 로그</h2>
            </div>
            <div
              className={`px-4 py-2 rounded-full text-xs font-bold ${
                accessGranted
                  ? "bg-green-500/20 text-green-300"
                  : locked || emergencyBlocked
                  ? "bg-red-500/20 text-red-300"
                  : "bg-yellow-500/20 text-yellow-300"
              }`}
            >
              {accessGranted ? "ACCESS GRANTED" : locked || emergencyBlocked ? "ACCESS BLOCKED" : "STANDBY"}
            </div>
          </div>

          <div className="space-y-3 max-h-[620px] overflow-auto pr-2">
            {logs.map((log, index) => (
              <div
                key={`${log.time}-${index}`}
                className="rounded-2xl border border-zinc-800 bg-black p-4"
              >
                <div className="flex justify-between gap-3 text-xs">
                  <span
                    className={
                      log.status === "SUCCESS"
                        ? "text-green-400"
                        : log.status === "FAIL"
                        ? "text-yellow-400"
                        : "text-red-400"
                    }
                  >
                    {log.status}
                  </span>
                  <span className="text-zinc-500">{log.time}</span>
                </div>
                <p className="mt-2 text-sm text-zinc-300">{log.message}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
