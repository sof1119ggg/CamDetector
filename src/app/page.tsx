'use client';

import { useRouter } from 'next/navigation';
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center relative"
      style={{
        background: 'url(/back.png) center center / cover no-repeat',
        backgroundColor: '#fff',
      }}
    >
      <div style={{ marginTop: 500}} className="flex flex-col items-center w-full">
        <button
          onClick={() => router.push('/detection')}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-all duration-300 transform hover:scale-105 mb-12"
        >
          开始查找周围摄像头
        </button>
        <footer className="flex gap-8 flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#2F2E41' }}
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
              style={{ filter: 'invert(16%) sepia(13%) saturate(600%) hue-rotate(210deg) brightness(90%) contrast(90%)' }}
            />
            Learn
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#2F2E41' }}
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
              style={{ filter: 'invert(16%) sepia(13%) saturate(600%) hue-rotate(210deg) brightness(90%) contrast(90%)' }}
            />
            Examples
          </a>
        </footer>
      </div>
    </div>
  );
}
