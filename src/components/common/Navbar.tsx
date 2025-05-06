'use client';

import { useRouter } from 'next/navigation';
import StatusBar from './StatusBar';

const TOPBAR_HEIGHT = 48 + 56; // 状态栏48px+导航栏56px

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="fixed left-0 right-0 z-50" style={{top: 0}}>
      <div className="mx-auto max-w-md" style={{borderTopLeftRadius: 20, borderTopRightRadius: 20, overflow: 'hidden'}}>
        <StatusBar />
        <div className="h-14 bg-white relative flex items-center px-4">
          {/* 返回按钮 */}
          <button
            onClick={() => router.push('/')}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors absolute left-4"
            style={{top: '50%', transform: 'translateY(-50%)'}}
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          {/* 居中标题 */}
          <div className="absolute left-0 right-0 flex justify-center pointer-events-none">
            <h1 className="text-lg font-semibold text-[#2F2E41]">摄像头探测器</h1>
          </div>
        </div>
      </div>
    </div>
  );
} 