import React from 'react';
import { LineChart, Zap, Brain } from 'lucide-react';

const features = [
  {
    icon: LineChart,
    title: 'Engagement Analysis',
    description: 'Deep dive into your audience interactions with advanced metrics and visualizations',
    points: [
      'Real-time engagement tracking',
      'Audience sentiment analysis',
      'Performance benchmarking'
    ]
  },
  {
    icon: Zap,
    title: 'Real-time Insights',
    description: 'Monitor social performance as it happens with lightning-fast updates',
    points: [
      'Live data streaming',
      'Instant notifications',
      'Trend detection'
    ]
  },
  {
    icon: Brain,
    title: 'GPT Integration',
    description: 'AI-powered content suggestions and trend analysis for better engagement',
    points: [
      'Smart content recommendations',
      'Predictive analytics',
      'Automated reporting'
    ]
  }
];

export default function Features() {
  return (
    <div id="features" className="relative py-24 bg-black/95 overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-16">
          Powerful Features for Modern Analytics
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gradient-to-b from-gray-900 to-gray-800 border border-gray-800 hover:border-pink-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(236,72,153,0.2)] hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Hover Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <feature.icon className="w-12 h-12 text-pink-500 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" />
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400 mb-6">{feature.description}</p>
              
              <ul className="space-y-2">
                {feature.points.map((point, idx) => (
                  <li key={idx} className="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-2 group-hover:scale-150 transition-transform duration-300" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}