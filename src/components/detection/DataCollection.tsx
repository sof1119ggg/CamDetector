import { useEffect, useState } from 'react';

interface DataCollectionProps {
  onNext: () => void;
}

export default function DataCollection({ onNext }: DataCollectionProps) {
  const [progress, setProgress] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (progress < 100) {
      const timer = setTimeout(() => {
        setProgress((prev) => Math.min(prev + 2, 100));
      }, 140); // 7秒内完成
      return () => clearTimeout(timer);
    } else {
      setFinished(true);
    }
  }, [progress]);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
      <h2 className="text-xl font-bold mb-4" style={{ color: '#7E818A' }}>数据收集</h2>
      {!finished ? (
        <>
          <p className="text-gray-600 mb-6">
            正在收集周围网络数据，<br />
            保持手机WiFi开启...
          </p>
          <div className="flex justify-center mb-4">
            <div className="relative w-24 h-24 flex items-center justify-center">
              <svg className="absolute top-0 left-0" width="96" height="96" viewBox="0 0 96 96">
                <circle
                  cx="48"
                  cy="48"
                  r="42"
                  stroke="#E5E7EB"
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="48"
                  cy="48"
                  r="42"
                  stroke="#3B82F6"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={2 * Math.PI * 42}
                  strokeDashoffset={2 * Math.PI * 42 * (1 - progress / 100)}
                  strokeLinecap="round"
                  style={{ transition: 'stroke-dashoffset 0.14s linear' }}
                />
              </svg>
              <span className="text-2xl font-bold text-blue-500 z-10">{progress}%</span>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col items-center mb-4">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mb-2">
              <circle cx="24" cy="24" r="24" fill="#22C55E" />
              <path d="M15 25.5L21 31.5L33 19.5" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="text-green-600 font-semibold">数据收集完毕</p>
          </div>
          <p className="text-gray-600 mb-6">请点击下一步按钮，进入流量识别阶段</p>
        </>
      )}
      <button
        onClick={onNext}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors mt-2"
        disabled={!finished}
        style={{ opacity: finished ? 1 : 0.5, cursor: finished ? 'pointer' : 'not-allowed' }}
      >
        下一步
      </button>
    </div>
  );
} 