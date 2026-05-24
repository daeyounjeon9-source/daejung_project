import React, { useEffect, useRef, useState } from "react";

export default function LiveStreamingPlayer({ streamUrl }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = streamUrl;
      videoRef.current.play().then(() => setIsPlaying(true));
    }
  }, [streamUrl]);

  return (
    <div className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
      <video
        ref={videoRef}
        className="w-full h-auto bg-black"
        controls
        autoPlay
        muted={false}
      />
      <div className="p-4 bg-black/50 text-white flex justify-between">
        <div>실시간 스트리밍</div>
        <div>{isPlaying ? "재생 중" : "로딩 중..."}</div>
      </div>
    </div>
  );
}
