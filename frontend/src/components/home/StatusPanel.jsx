const StatusPanel = ({ data }) => {
  return (
    <div>
      {data.map((item, i) => (
        <div key={i}>
          {item.name} - {item.state}
        </div>
      ))}
    </div>
  );
};

export default StatusPanel;
