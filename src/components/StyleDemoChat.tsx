import React, { useState, useEffect, useRef } from 'react';
import { Bot, User, ExternalLink, Sparkles, Leaf, GraduationCap } from 'lucide-react';

interface StyleDemoChatProps {
  style: 'modern' | 'professional' | 'green' | 'academic';
  onClose: () => void;
}

const StyleDemoChat: React.FC<StyleDemoChatProps> = ({ style, onClose }) => {
  const [messages, setMessages] = useState<Array<{
    type: 'user' | 'bot';
    text: string;
    links?: Array<{ text: string; url: string }>;
    id: number;
  }>>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const modernConversations = [
    { type: 'bot', text: "Hey bestie! 🌟 Ready to glow up your skincare game?", delay: 200 },
    { type: 'user', text: "Yes! Need some recommendations!", delay: 2000 },
    { 
      type: 'bot', 
      text: "OMG, you're gonna love our new K-beauty drops! ✨ They're literally everywhere on TikTok rn!",
      links: [
        { text: "Trending Products", url: "#trending" },
        { text: "TikTok Favs", url: "#tiktok-favs" }
      ],
      delay: 2500
    }
  ];

  const professionalConversations = [
    { type: 'bot', text: "Welcome to ROSSMANN. How may I assist you with your skincare needs today?", delay: 200 },
    { type: 'user', text: "I'm looking for skincare recommendations.", delay: 2000 },
    { 
      type: 'bot', 
      text: "I'd be happy to help. Our dermatologically-tested collection features premium ingredients suitable for various skin types.",
      links: [
        { text: "Premium Collection", url: "#premium" },
        { text: "Skin Analysis", url: "#analysis" }
      ],
      delay: 2500
    }
  ];

  const greenConversations = [
    { type: 'bot', text: "Welcome! 🌱 Let's find eco-friendly skincare that's good for you and the planet!", delay: 200 },
    { type: 'user', text: "I want sustainable beauty products.", delay: 2000 },
    { 
      type: 'bot', 
      text: "Amazing choice! Our zero-waste collection uses recyclable packaging and natural, sustainable ingredients. 🌿",
      links: [
        { text: "Zero-Waste Products", url: "#zero-waste" },
        { text: "Sustainability Report", url: "#eco-report" }
      ],
      delay: 2500
    }
  ];

  const academicConversations = [
    { type: 'bot', text: "Greetings. I'm here to provide evidence-based skincare recommendations.", delay: 200 },
    { type: 'user', text: "What ingredients are best for anti-aging?", delay: 2000 },
    { 
      type: 'bot', 
      text: "According to recent studies, retinoids and peptides show significant efficacy in reducing signs of aging (Johnson et al., 2023).",
      links: [
        { text: "Research Papers", url: "#research" },
        { text: "Clinical Studies", url: "#studies" }
      ],
      delay: 2500
    }
  ];

  const getConversations = () => {
    switch (style) {
      case 'modern':
        return modernConversations;
      case 'professional':
        return professionalConversations;
      case 'green':
        return greenConversations;
      case 'academic':
        return academicConversations;
      default:
        return modernConversations;
    }
  };

  const getBackgroundStyle = () => {
    switch (style) {
      case 'modern':
        return 'bg-gradient-to-br from-violet-600 via-fuchsia-500 to-pink-500';
      case 'professional':
        return 'bg-white dark:bg-gray-800';
      case 'green':
        return 'bg-gradient-to-br from-emerald-600 to-green-500';
      case 'academic':
        return 'bg-gradient-to-br from-blue-600 to-cyan-500';
      default:
        return '';
    }
  };

  const getBotIcon = () => {
    switch (style) {
      case 'modern':
        return <Sparkles className="text-white" size={24} />;
      case 'professional':
        return <Bot className="text-violet-600 dark:text-violet-400" size={24} />;
      case 'green':
        return <Leaf className="text-white" size={24} />;
      case 'academic':
        return <GraduationCap className="text-white" size={24} />;
      default:
        return <Bot className="text-violet-600" size={24} />;
    }
  };

  useEffect(() => {
    const addNextMessage = () => {
      if (currentIndex < getConversations().length) {
        const nextMessage = getConversations()[currentIndex];
        setMessages(prev => [...prev, { ...nextMessage, id: Date.now() }]);
        setCurrentIndex(prev => prev + 1);
      }
    };

    const delay = getConversations()[currentIndex]?.delay || 2000;
    const timer = setTimeout(addNextMessage, delay);
    return () => clearTimeout(timer);
  }, [currentIndex, style]);

  useEffect(() => {
    if (chatContainerRef.current) {
      const { scrollHeight, clientHeight } = chatContainerRef.current;
      chatContainerRef.current.scrollTo({
        top: scrollHeight - clientHeight,
        behavior: 'smooth'
      });
    }
  }, [messages]);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className={`
        rounded-2xl shadow-lg p-6 w-full max-w-md relative
        ${getBackgroundStyle()}
      `}>
        <button 
          onClick={onClose}
          className={`
            absolute top-4 right-4 transition-colors
            ${style === 'professional' ? 'text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300' : 'text-white/70 hover:text-white'}
          `}
        >
          ✕
        </button>
        
        <div className={`
          flex items-center gap-2 mb-6
          ${style === 'professional' ? 'text-gray-800 dark:text-white' : 'text-white'}
        `}>
          {getBotIcon()}
          <span className="font-semibold">
            {style === 'modern' ? 'Gen Z Assistant' :
             style === 'professional' ? 'Professional Assistant' :
             style === 'green' ? 'Eco Assistant' :
             'Research Assistant'}
          </span>
        </div>
        
        <div className={`
          h-[400px] overflow-hidden relative rounded-xl
          ${style === 'professional' ? 'bg-gray-50 dark:bg-gray-700' : 'bg-white/10 backdrop-blur-sm'}
        `}>
          <div 
            ref={chatContainerRef}
            className="absolute inset-0 overflow-y-auto scrollbar-hide p-4"
          >
            <div className="space-y-4">
              {messages.map((message) => (
                <div 
                  key={message.id}
                  className={`flex gap-2 ${message.type === 'user' ? 'justify-end' : ''}`}
                  style={{
                    animation: 'fadeIn 0.5s ease-out forwards',
                    opacity: 0
                  }}
                >
                  {message.type === 'bot' && getBotIcon()}
                  <div className="space-y-2">
                    <div 
                      className={`
                        rounded-2xl p-3 max-w-[80%]
                        ${message.type === 'user' 
                          ? style === 'professional'
                            ? 'bg-violet-600 text-white ml-4'
                            : 'bg-white/20 backdrop-blur-sm text-white ml-4'
                          : style === 'professional'
                            ? 'bg-white dark:bg-gray-600 text-gray-800 dark:text-white'
                            : 'bg-white/95 backdrop-blur-sm text-gray-800'
                        }
                      `}
                    >
                      {message.text}
                    </div>
                    {message.links && (
                      <div className="flex flex-wrap gap-2">
                        {message.links.map((link, index) => (
                          <a
                            key={index}
                            href={link.url}
                            className={`
                              inline-flex items-center gap-1 text-sm px-3 py-1 rounded-full transition-colors duration-200
                              ${style === 'professional'
                                ? 'text-violet-600 hover:text-violet-700 bg-violet-50 hover:bg-violet-100 dark:text-violet-400 dark:bg-violet-900/20 dark:hover:bg-violet-900/40'
                                : 'text-white bg-white/20 hover:bg-white/30 backdrop-blur-sm'
                              }
                            `}
                          >
                            {link.text}
                            <ExternalLink size={12} />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                  {message.type === 'user' && (
                    <User className={`w-8 h-8 ${style === 'professional' ? 'text-violet-600 dark:text-violet-400' : 'text-white'}`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleDemoChat;