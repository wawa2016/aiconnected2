import React, { useState } from 'react';
import { Bot, Sparkles, Check, Leaf, GraduationCap } from 'lucide-react';
import StyleDemoChat from './StyleDemoChat';

interface AIPersonalityCardProps {
  title: string;
  description: string;
  features: string[];
  style: 'modern' | 'professional' | 'green' | 'academic';
}

const AIPersonalityCard: React.FC<AIPersonalityCardProps> = ({ title, description, features, style }) => {
  const [showDemo, setShowDemo] = useState(false);
  
  const getStyleClasses = () => {
    switch (style) {
      case 'modern':
        return 'bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white';
      case 'professional':
        return 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-2 border-gray-100 dark:border-gray-700';
      case 'green':
        return 'bg-gradient-to-br from-emerald-600 to-green-600 text-white';
      case 'academic':
        return 'bg-gradient-to-br from-blue-600 to-cyan-600 text-white';
      default:
        return '';
    }
  };

  const getIcon = () => {
    switch (style) {
      case 'modern':
        return <Sparkles className="w-8 h-8" />;
      case 'professional':
        return <Bot className={`w-8 h-8 ${style === 'professional' ? 'text-violet-600 dark:text-violet-400' : 'text-white'}`} />;
      case 'green':
        return <Leaf className="w-8 h-8" />;
      case 'academic':
        return <GraduationCap className="w-8 h-8" />;
      default:
        return <Bot className="w-8 h-8" />;
    }
  };

  const getButtonClasses = () => {
    const baseClasses = 'relative w-full py-3 px-6 rounded-full font-medium transition-all duration-300 transform hover:scale-105 active:scale-95';
    const beforeClasses = 'before:absolute before:inset-0 before:rounded-full before:transition-all before:duration-300';
    
    switch (style) {
      case 'modern':
        return `${baseClasses} ${beforeClasses} bg-white text-violet-600 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:-translate-y-1`;
      case 'professional':
        return `${baseClasses} ${beforeClasses} bg-violet-600 text-white hover:bg-violet-700 dark:hover:bg-violet-500 hover:shadow-lg hover:-translate-y-1`;
      case 'green':
        return `${baseClasses} ${beforeClasses} bg-white text-emerald-600 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:-translate-y-1`;
      case 'academic':
        return `${baseClasses} ${beforeClasses} bg-white text-blue-600 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:-translate-y-1`;
      default:
        return '';
    }
  };
  
  return (
    <>
      <div className={`
        relative overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-xl
        ${getStyleClasses()}
        group flex flex-col
      `}>
        {/* Animated background effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 animate-shimmer"></div>
        </div>

        {/* Card content */}
        <div className="p-6 flex-1 relative">
          <div className="flex items-center gap-3 mb-4">
            <div className="transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
              {getIcon()}
            </div>
            <h3 className="text-xl font-bold">{title}</h3>
          </div>
          
          <p className={`mb-6 ${style === 'professional' ? 'text-gray-600 dark:text-gray-300' : 'text-white/90'}`}>
            {description}
          </p>
          
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 group/item">
                <Check className={`
                  w-5 h-5 transition-transform duration-300 group-hover/item:scale-110
                  ${style === 'professional' ? 'text-violet-600 dark:text-violet-400' : 'text-white'}
                `} />
                <span className={
                  style === 'professional' ? 'text-gray-600 dark:text-gray-300' : 'text-white/90'
                }>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Button container with consistent positioning */}
        <div className="p-6 pt-0 mt-auto">
          <button 
            onClick={() => setShowDemo(true)}
            className={getButtonClasses()}
          >
            Try This Persona
          </button>
        </div>
      </div>

      {showDemo && (
        <StyleDemoChat 
          style={style} 
          onClose={() => setShowDemo(false)} 
        />
      )}
    </>
  );
};

export default AIPersonalityCard;