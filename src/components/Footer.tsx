import React, { useState } from 'react';
import { Github, Twitter, Linkedin, Send } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribed:', email);
    setEmail('');
    alert('Thanks for subscribing!');
  };

  return (
    <footer className="bg-black py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-white font-semibold mb-4">Social Analytics</h3>
            <p className="text-gray-400 text-sm">
              Transforming social media data into actionable insights
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-400 hover:text-pink-500 transition-all duration-300 relative group">
                  Features
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-pink-500 transition-all duration-300 relative group">
                  API
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-pink-500 transition-all duration-300 relative group">
                  Terms & Conditions
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-pink-500 transition-all duration-300 relative group">
                  Privacy Policy
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-pink-500 hover:text-pink-400 transition-colors"
                >
                  <Send size={20} />
                </button>
              </div>
            </form>
            
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Social Analytics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}