import { useStatusStore } from "../store/useStatusStore";

const Control = () => {
  const { status, setStatus, setAll } = useStatusStore();

  return (
    <div style={{ padding: "40px", color: "white" }}>
      <h1>운영센터</h1>

      {status.map((item, index) => (
        <div key={index}>
          <span>{item.name}</span>
          <button onClick={() => setStatus(index, "normal")}>정상</button>
          <button onClick={() => setStatus(index, "warning")}>경고</button>
          <button onClick={() => setStatus(index, "error")}>에러</button>
        </div>
      ))}

      <button onClick={() => setAll("normal")}>전체 정상</button>
      <button onClick={() => setAll("warning")}>전체 경고</button>
      <button onClick={() => setAll("error")}>전체 에러</button>
    </div>
  );
};

export default Control;
