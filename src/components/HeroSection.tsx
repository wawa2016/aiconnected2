import React from 'react';
import { ChevronRight } from 'lucide-react';
import ChatDemo from './ChatDemo';

interface HeroSectionProps {
  onGetStarted: () => void;
  onWatchDemo: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onGetStarted, onWatchDemo }) => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600 mb-6">
            Transform Your Customer Experience with AI
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
          AI Connected is a cutting-edge AI chatbot designed to revolutionize customer service for online stores. Our technology offers a unique approach to personalization
          </p>
          <div className="flex gap-4">
            <button 
              onClick={onGetStarted}
              className="bg-violet-600 text-white px-8 py-3 rounded-full font-medium hover:bg-violet-700 transition flex items-center gap-2"
            >
              Get Started <ChevronRight size={20} />
            </button>
            <button 
              onClick={onWatchDemo}
              className="border border-violet-600 text-violet-600 dark:text-violet-400 dark:border-violet-400 px-8 py-3 rounded-full font-medium hover:bg-violet-50 dark:hover:bg-violet-900/20 transition"
            >
              Watch Demo
            </button>
          </div>
        </div>
        <div className="lg:block">
          <ChatDemo />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;