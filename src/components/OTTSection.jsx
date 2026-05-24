export default function OTTSection(){const shows=["드라마","스포츠","예능","다큐"];
return(<section className="ott-section">
<div className="section-head"><span>OTT CONTENT</span><h2>OTT 섹션</h2></div>
<div className="ott-grid">{shows.map((s,i)=>(<div className="ott-card" key={i}>
<div className="ott-placeholder">{s}</div><button>시청</button></div>))}</div>
</section>);
}