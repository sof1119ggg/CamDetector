import { useEffect, useState } from 'react';

interface RoughLocationProps {
  onNext: () => void;
}

export default function RoughLocation({ onNext }: RoughLocationProps) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    setStep(0);
    const timer1 = setTimeout(() => setStep(1), 5000);
    const timer2 = setTimeout(() => setStep(2), 10000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
      <h2 className="text-xl font-bold mb-4" style={{ color: '#7E818A' }}>粗略定位</h2>
      {step === 0 && (
        <p className="text-gray-600 mb-6">
          请从当前房间的一角走向另一角<br />直至出现新的提示
        </p>
      )}
      {step === 1 && (
        <p className="text-gray-600 mb-6">
          请往反方向移动<br />直至出现新的提示
        </p>
      )}
      {step < 2 ? (
        <div className="relative h-64 w-full flex justify-center items-center bg-gray-100 rounded-lg mb-6">
          {/* 提示标志 */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
              <circle cx="28" cy="28" r="28" fill="#3B82F6" />
              <path d="M28 16V40" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
              <circle cx="28" cy="44" r="2.5" fill="#fff" />
            </svg>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-16 h-16 border-4 border-blue-500 rounded-full animate-ping"></div>
            <div className="w-16 h-16 border-4 border-blue-500 rounded-full absolute top-0 left-0"></div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-64 w-full bg-gray-100 rounded-lg mb-6">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="mb-4">
            <circle cx="32" cy="32" r="32" fill="#FACC15" />
            <path d="M32 18V36" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
            <circle cx="32" cy="46" r="3" fill="#fff" />
          </svg>
          <p className="text-yellow-700 font-semibold text-lg mt-2">当前房间内存在摄像头</p>
          <p className="text-gray-600 text-base mt-1">点击下一步精准定位摄像头</p>
        </div>
      )}
      <button
        onClick={onNext}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
      >
        下一步
      </button>
    </div>
  );
} 