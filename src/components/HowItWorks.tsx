import React from 'react';
import { Upload, Database, PieChart } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: 'Upload Your Data',
    description: 'Connect your social accounts or upload historical data'
  },
  {
    icon: Database,
    title: 'AI Processing',
    description: 'Our AI analyzes patterns and generates insights'
  },
  {
    icon: PieChart,
    title: 'Get Results',
    description: 'View detailed reports and actionable insights'
  }
];

export default function HowItWorks() {
  return (
    <div className="py-24 bg-gradient-to-b from-black/95 to-indigo-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-16">
          How It Works
        </h2>
        
        <div className="relative flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Progress Line */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 transform -translate-y-1/2" />
          
          {steps.map((step, index) => (
            <div key={index} className="relative flex-1">
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-center">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}