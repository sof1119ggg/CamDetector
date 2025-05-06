import { useEffect, useState } from 'react';

interface TrafficAnalysisProps {
  onNext: () => void;
}

const mockDevices = [
  { id: 1, name: '摄像头A', ip: '192.168.1.101', mac: 'AA:BB:CC:DD:EE:01' }
];

export default function TrafficAnalysis({ onNext }: TrafficAnalysisProps) {
  const [devices, setDevices] = useState<typeof mockDevices>([]);
  const [wavePhase, setWavePhase] = useState(0);

  useEffect(() => {
    // 模拟识别过程
    const timer = setTimeout(() => setDevices(mockDevices), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // 波形动画
    const interval = setInterval(() => setWavePhase((p) => p + 1), 40);
    return () => clearInterval(interval);
  }, []);

  // 生成脉冲波形路径
  function getWavePath(phase: number) {
    let path = '';
    for (let x = 0; x <= 300; x += 5) {
      const y = 40 + Math.sin((x / 30) + phase * 0.15) * 18 * Math.abs(Math.sin(phase * 0.07));
      path += x === 0 ? `M${x},${y}` : ` L${x},${y}`;
    }
    return path;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
      <h2 className="text-xl font-bold mb-4" style={{ color: '#7E818A' }}>流量识别</h2>
      <p className="text-gray-600 mb-6">
        正在分析网络流量特征<br />
        识别可疑摄像头信号...
      </p>
   
      {/* 脉冲波形动画 */}
      <div className="w-full flex justify-center mb-8">
        <svg width="300" height="80" viewBox="0 0 300 80">
          <path d={getWavePath(wavePhase)} stroke="#3B82F6" strokeWidth="4" fill="none"/>
        </svg>
      </div>
      {/* 可疑设备信息 */}
      <div className="w-full max-w-xs mx-auto mb-6">
        <div className="text-gray-500 text-lg mb-2 text-left font-semibold">已识别可疑设备：</div>
        {devices.length === 0 ? (
          <div className="text-gray-400 text-sm text-left">正在识别中...</div>
        ) : (
          <ul className="space-y-2">
            {devices.map(device => (
              <li key={device.id} className="bg-gray-100 rounded px-3 py-2 text-left">
                <div className="font-semibold text-gray-800 text-lg">{device.name}</div>
                <div className="text-base text-gray-500">IP: {device.ip}</div>
                <div className="text-base text-gray-500">MAC: {device.mac}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <button
        onClick={onNext}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
      >
        下一步
      </button>
    </div>
  );
} 