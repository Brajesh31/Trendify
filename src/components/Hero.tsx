import React from 'react';
import { BarChart3, ArrowRight } from 'lucide-react';

export default function Hero() {
  const handleGetStarted = () => {
    const featuresSection = document.getElementById('features');
    featuresSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="relative mb-8 inline-block">
          <BarChart3 size={64} className="text-pink-500 animate-float" />
          <div className="absolute inset-0 blur-2xl bg-pink-500/30"></div>
        </div>
        
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 transition-all duration-500 cursor-default">
            Unleash the Power of Data
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto hover:text-white transition-colors duration-300">
          Transform your social media strategy with AI-powered analytics and real-time insights
        </p>
        
        <button 
          onClick={handleGetStarted}
          className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-purple-900 animate-pulse hover:animate-none"
        >
          <span className="relative z-10">Get Started</span>
          <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
        </button>
      </div>
    </div>
  );
}