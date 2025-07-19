import React from 'react';
import { Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <div className="py-24 bg-gradient-to-b from-indigo-950 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Ready to Transform Your Social Strategy?
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          Join thousands of brands using our platform to unlock social media success
        </p>
        <button className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-purple-900">
          Start Free Trial
          <Sparkles className="inline-block ml-2 group-hover:rotate-12 transition-transform" />
        </button>
      </div>
    </div>
  );
}