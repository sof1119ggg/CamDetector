import { useEffect, useRef, useState } from 'react';

interface PreciseLocationProps {
  onNext: () => void;
}

export default function PreciseLocation({ onNext }: PreciseLocationProps) {
  const [signal, setSignal] = useState(60); // 0-100
  const [distance, setDistance] = useState(3.5); // 米
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let frame: number;
    let start = Date.now();
    function animate() {
      const elapsed = (Date.now() - start) / 1000; // 秒
      // 7秒内信号从60到100，距离从3.5到0.8
      const percent = Math.min(elapsed / 7, 1);
      setSignal(Math.round(60 + (100 - 60) * percent));
      setDistance(Number((3.5 - (3.5 - 0.8) * percent).toFixed(2)));
      if (percent < 1) {
        frame = requestAnimationFrame(animate);
      }
    }
    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
      <h2 className="text-xl font-bold mb-4" style={{ color: '#7E818A' }}>精准定位</h2>
      <p className="text-gray-600 mb-6">正在精确定位摄像头位置<br />请缓慢移动手机...</p>
      <div className="relative h-64 w-full flex justify-center items-center bg-gray-100 rounded-lg mb-6 overflow-hidden">
        <video
          ref={videoRef}
          src="/2.mp4"
          className="w-full h-full object-cover rounded-lg"
          autoPlay
          muted
          playsInline
          controls={false}
        />
      </div>
      <div className="space-y-4 mb-6 w-full">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-gray-800">信号强度</span>
          <div className="w-32 h-2 bg-gray-200 rounded-full">
            <div
              className="h-full bg-green-500 rounded-full transition-all duration-300"
              style={{ width: `${signal}%` }}
            ></div>
          </div>
          <span className="ml-2 font-semibold text-gray-800">{signal}%</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-semibold text-gray-800">距离</span>
          <span className="text-blue-600 font-semibold">{distance}米</span>
        </div>
      </div>
      <button
        onClick={onNext}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
      >
        完成
      </button>
    </div>
  );
} 