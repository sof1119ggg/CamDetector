'use client';

import { useState } from 'react';
import DataCollection from '@/components/detection/DataCollection';
import TrafficAnalysis from '@/components/detection/TrafficAnalysis';
import RoughLocation from '@/components/detection/RoughLocation';
import PreciseLocation from '@/components/detection/PreciseLocation';
import Navbar from '@/components/common/Navbar';

const TOPBAR_HEIGHT = 48 + 56 + 24; // 状态栏+导航栏+额外留白

const steps = [
  { id: 1, title: '数据收集', component: DataCollection },
  { id: 2, title: '流量识别', component: TrafficAnalysis },
  { id: 3, title: '方向定位', component: RoughLocation },
  { id: 4, title: '精准定位', component: PreciseLocation },
];

export default function Detection() {
  const [currentStep, setCurrentStep] = useState(1);

  const CurrentStepComponent = steps.find(step => step.id === currentStep)?.component;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-100 pb-4" style={{paddingTop: TOPBAR_HEIGHT}}>
        <div className="max-w-md mx-auto px-4">
          <div className="mb-8">
            <div className="flex justify-between mb-4">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`flex-1 text-center ${
                    step.id === currentStep ? 'text-blue-500' : 'text-gray-400'
                  }`}
                >
                  <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center ${
                    step.id === currentStep ? 'bg-blue-500 text-white' : 'bg-gray-200'
                  }`}>
                    {step.id}
                  </div>
                  <div className="text-sm mt-2">{step.title}</div>
                </div>
              ))}
            </div>
            <div className="h-1 bg-gray-200 rounded-full">
              <div
                className="h-full bg-blue-500 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
              />
            </div>
          </div>

          {CurrentStepComponent && <CurrentStepComponent onNext={() => setCurrentStep(prev => Math.min(prev + 1, steps.length))} />}
        </div>
      </main>
    </>
  );
} 