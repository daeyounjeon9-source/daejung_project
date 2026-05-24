const queue = [
  "뷰티 특가 LIVE",
  "푸드 초특가 LIVE",
  "IT 리뷰 LIVE",
  "패션 방송 LIVE"
];

export default function LiveQueueBoard(){
  return (
    <section className="liveQueueBoard">
      <h2>LIVE QUEUE</h2>

      {queue.map((q)=>(
        <div className="queueItem" key={q}>
          {q}
        </div>
      ))}
    </section>
  );
}