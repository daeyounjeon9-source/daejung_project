import { useNavigate } from "react-router-dom";

const ActionButtons = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/control")}>운영센터</button>
    </div>
  );
};

export default ActionButtons;
