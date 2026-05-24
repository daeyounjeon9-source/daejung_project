
import RiskResponsePanel from "./components/RiskResponsePanel";
import "./index.css";

export default function App(){
  return (
    <div className="app">
      <header className="nav">
        <strong>DAEJUNG NEXT</strong>
        <span>RISK RESPONSE SYSTEM PACK</span>
      </header>

      <RiskResponsePanel />
    </div>
  );
}
