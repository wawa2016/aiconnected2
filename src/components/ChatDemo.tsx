import React, { useState, useEffect, useRef } from 'react';
import { Bot, User, ExternalLink, Sparkles, Leaf, GraduationCap } from 'lucide-react';

interface Message {
  type: 'user' | 'bot';
  text: string;
  links?: Array<{ text: string; url: string }>;
  id: number;
}

const styles = {
  modern: {
    name: 'Gen Z Bestie',
    headerIcon: <Sparkles className="text-violet-600 dark:text-white" size={24} />,
    bubbleIcon: <Sparkles className="text-white" size={24} />,
    gradient: 'from-violet-600 to-fuchsia-600',
    conversation: [
      { type: 'bot', text: "Hey bestie! 🌟 Ready to glow up?", delay: 500 },
      { type: 'user', text: "Yes! Need help with skincare!", delay: 1000 },
      { type: 'bot', text: "Our K-beauty collection is trending rn! ✨", 
        links: [
          { text: "Shop K-Beauty", url: "#k-beauty" },
          { text: "TikTok Favs", url: "#trending" }
        ],
        delay: 1500 
      },
      { type: 'user', text: "What's best for dry skin?", delay: 1500 },
      { type: 'bot', text: "Try our Moisture Bomb cream + Hyaluronic serum combo! 💦", 
        links: [
          { text: "Hydrating Set", url: "#hydration" },
          { text: "Winter Care", url: "#winter" }
        ],
        delay: 1500 
      }
    ]
  },
  professional: {
    name: 'Professional Expert',
    headerIcon: <Bot className="text-violet-600 dark:text-violet-400" size={24} />,
    bubbleIcon: <Bot className="text-white" size={24} />,
    gradient: 'from-gray-700 to-gray-900',
    conversation: [
      { type: 'bot', text: "Welcome. How may I assist you today?", delay: 500 },
      { type: 'user', text: "Looking for sensitive skin products.", delay: 1000 },
      { type: 'bot', text: "Our Sensitive Care line features Centella and Panthenol.", 
        links: [
          { text: "Clinical Studies", url: "#research" },
          { text: "Product Guide", url: "#guide" }
        ],
        delay: 1500 
      },
      { type: 'user', text: "What's the best routine?", delay: 1500 },
      { type: 'bot', text: "Start with our gentle cleanser, followed by calming serum.", 
        links: [
          { text: "Routine Builder", url: "#routine" },
          { text: "Expert Tips", url: "#tips" }
        ],
        delay: 1500 
      }
    ]
  },
  green: {
    name: 'Green Freak',
    headerIcon: <Leaf className="text-emerald-600 dark:text-white" size={24} />,
    bubbleIcon: <Leaf className="text-white" size={24} />,
    gradient: 'from-emerald-600 to-green-600',
    conversation: [
      { type: 'bot', text: "Welcome to eco-beauty! 🌱", delay: 500 },
      { type: 'user', text: "Looking for zero-waste options", delay: 1000 },
      { type: 'bot', text: "Check our refillable glass containers! 🌍", 
        links: [
          { text: "Zero-Waste", url: "#zero-waste" },
          { text: "Eco Impact", url: "#impact" }
        ],
        delay: 1500 
      },
      { type: 'user', text: "Any refill stations nearby?", delay: 1500 },
      { type: 'bot', text: "Save 15% at our RefillRevolution stations! ♻️", 
        links: [
          { text: "Find Stations", url: "#stations" },
          { text: "Save More", url: "#rewards" }
        ],
        delay: 1500 
      }
    ]
  },
  academic: {
    name: 'Academic Researcher',
    headerIcon: <GraduationCap className="text-blue-600 dark:text-white" size={24} />,
    bubbleIcon: <GraduationCap className="text-white" size={24} />,
    gradient: 'from-blue-600 to-cyan-600',
    conversation: [
      { type: 'bot', text: "Let's explore evidence-based solutions.", delay: 500 },
      { type: 'user', text: "Best for hyperpigmentation?", delay: 1000 },
      { type: 'bot', text: "Studies show efficacy of tranexamic acid and niacinamide.", 
        links: [
          { text: "Research", url: "#studies" },
          { text: "Clinical Data", url: "#data" }
        ],
        delay: 1500 
      },
      { type: 'user', text: "Recommended concentrations?", delay: 1500 },
      { type: 'bot', text: "Our formula: 5% tranexamic acid, 10% niacinamide.", 
        links: [
          { text: "Study Results", url: "#results" },
          { text: "Usage Guide", url: "#guide" }
        ],
        delay: 1500 
      }
    ]
  }
};

const ChatDemo: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStyle, setCurrentStyle] = useState<keyof typeof styles>('modern');
  const [currentIndex, setCurrentIndex] = useState(0);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const styleKeys = Object.keys(styles) as Array<keyof typeof styles>;
    const interval = setInterval(() => {
      setCurrentStyle(prevStyle => {
        const currentIndex = styleKeys.indexOf(prevStyle);
        return styleKeys[(currentIndex + 1) % styleKeys.length];
      });
      setMessages([]);
      setCurrentIndex(0);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const currentConversation = styles[currentStyle].conversation;
    
    if (currentIndex < currentConversation.length) {
      const timer = setTimeout(() => {
        const nextMessage = currentConversation[currentIndex];
        setMessages(prev => [...prev, { ...nextMessage, id: Date.now() }]);
        setCurrentIndex(prev => prev + 1);
      }, currentConversation[currentIndex].delay);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, currentStyle]);

  useEffect(() => {
    if (chatContainerRef.current) {
      const { scrollHeight, clientHeight } = chatContainerRef.current;
      chatContainerRef.current.scrollTo({
        top: scrollHeight - clientHeight,
        behavior: 'smooth'
      });
    }
  }, [messages]);

  const currentStyleConfig = styles[currentStyle];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 w-full max-w-md mx-auto">
      <div className="flex items-center gap-2 mb-6">
        {currentStyleConfig.headerIcon}
        <span className="font-semibold dark:text-white">{currentStyleConfig.name}</span>
        <span className="text-xs text-green-500 ml-auto flex items-center gap-1">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Active
        </span>
      </div>
      
      <div className="h-[400px] overflow-hidden relative bg-gray-50 dark:bg-gray-900 rounded-xl">
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
                  animation: 'fadeIn 0.3s ease-out forwards',
                  opacity: 0
                }}
              >
                {message.type === 'bot' && (
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-br ${currentStyleConfig.gradient}`}>
                    {currentStyleConfig.bubbleIcon}
                  </div>
                )}
                <div className="space-y-2">
                  <div 
                    className={`rounded-2xl p-3 max-w-[80%] ${
                      message.type === 'user' 
                        ? `bg-gradient-to-br ${currentStyleConfig.gradient} text-white ml-4`
                        : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200'
                    }`}
                  >
                    {message.text}
                  </div>
                  {message.links && message.links.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {message.links.map((link, index) => (
                        <a
                          key={index}
                          href={link.url}
                          className={`
                            inline-flex items-center gap-1 text-sm px-3 py-1 rounded-full transition-colors duration-200
                            ${message.type === 'bot' 
                              ? 'text-violet-600 hover:text-violet-700 bg-violet-50 hover:bg-violet-100 dark:bg-violet-900/50 dark:text-violet-300'
                              : 'bg-white/20 text-white hover:bg-white/30'}
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
                  <User className="w-8 h-8 text-violet-600 dark:text-white" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatDemo;