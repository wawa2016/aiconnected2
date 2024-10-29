import React, { useState, useEffect, useRef } from 'react';
import { Bot, Sparkles, Leaf, GraduationCap } from 'lucide-react';
import StyleDemoChat from '../components/StyleDemoChat';

const StyleSelector: React.FC = () => {
  const [selectedStyle, setSelectedStyle] = useState<'modern' | 'professional' | 'green' | 'academic' | null>(null);
  const [showDemo, setShowDemo] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState<'initial' | 'moving-to-card' | 'clicking' | 'moving-to-chat' | 'returning' | 'done'>('initial');
  const animationRef = useRef<NodeJS.Timeout>();
  const currentIndexRef = useRef(0);

  const styles = [
    {
      id: 'modern',
      name: 'Gen Z Bestie',
      icon: <Sparkles className="w-6 h-6" />,
      description: 'Casual, trendy, and emoji-friendly',
      gradient: 'from-violet-600 to-fuchsia-600',
      sample: 'Hey bestie! 🌟 Ready to level up your experience?'
    },
    {
      id: 'professional',
      name: 'Professional Expert',
      icon: <Bot className="w-6 h-6" />,
      description: 'Formal, precise, and business-focused',
      gradient: 'from-gray-700 to-gray-900',
      sample: 'Welcome. How may I assist you today?'
    },
    {
      id: 'green',
      name: 'Green Freak',
      icon: <Leaf className="w-6 h-6" />,
      description: 'Eco-conscious and sustainability-focused',
      gradient: 'from-emerald-600 to-green-600',
      sample: 'Let\'s make eco-friendly choices together! 🌱'
    },
    {
      id: 'academic',
      name: 'Academic Researcher',
      icon: <GraduationCap className="w-6 h-6" />,
      description: 'Scholarly and research-based',
      gradient: 'from-blue-600 to-cyan-600',
      sample: 'Based on recent studies (Smith et al., 2024)...'
    }
  ];

  const animateToNextStyle = () => {
    setIsAnimating(true);
    setCurrentStep('moving-to-card');

    // Get next style in sequence
    const targetCard = document.querySelectorAll('.style-card')[currentIndexRef.current];
    const cardRect = targetCard.getBoundingClientRect();

    // Move cursor to card center
    setCursorPosition({
      x: cardRect.left + cardRect.width / 2,
      y: cardRect.top + cardRect.height / 2
    });

    // Click animation
    animationRef.current = setTimeout(() => {
      setCurrentStep('clicking');
      setSelectedStyle(styles[currentIndexRef.current].id as any);

      // Move to chat
      animationRef.current = setTimeout(() => {
        setCurrentStep('moving-to-chat');
        setShowDemo(true);

        // Show chat for a while then return
        animationRef.current = setTimeout(() => {
          setCurrentStep('returning');
          setShowDemo(false);
          setSelectedStyle(null);

          // Reset and prepare for next style
          animationRef.current = setTimeout(() => {
            setCurrentStep('done');
            setIsAnimating(false);
            
            // Move to next style
            currentIndexRef.current = (currentIndexRef.current + 1) % styles.length;
            
            // Start next animation after delay
            animationRef.current = setTimeout(animateToNextStyle, 1000);
          }, 1000);
        }, 3000);
      }, 1000);
    }, 1000);
  };

  useEffect(() => {
    // Start initial animation after component mount
    animationRef.current = setTimeout(animateToNextStyle, 1000);

    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, []);

  const handleStyleSelect = (style: 'modern' | 'professional' | 'green' | 'academic') => {
    if (!isAnimating) {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
      setSelectedStyle(style);
      setShowDemo(true);
    }
  };

  return (
    <div className="relative">
      {/* Animated cursor */}
      {isAnimating && (
        <div 
          className={`
            fixed pointer-events-none z-50 transition-all duration-500
            ${currentStep === 'clicking' ? 'scale-90' : 'scale-100'}
          `}
          style={{
            transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
            left: '-20px',
            top: '-20px'
          }}
        >
          <div className="w-10 h-10 flex items-center justify-center animate-bounce">
            👆
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {styles.map((style) => (
          <button
            key={style.id}
            onClick={() => handleStyleSelect(style.id as any)}
            className={`
              style-card relative overflow-hidden rounded-2xl p-6 text-left transition-all duration-300
              hover:-translate-y-1 hover:shadow-lg
              ${selectedStyle === style.id ? 'ring-4 ring-white/50' : ''}
              bg-gradient-to-br ${style.gradient} text-white
              ${isAnimating && selectedStyle === style.id ? 'animate-pulse' : ''}
            `}
          >
            <div className="absolute top-0 right-0 w-32 h-32 transform translate-x-16 -translate-y-16">
              <div className="absolute inset-0 bg-white opacity-10 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                {style.icon}
                <h3 className="text-lg font-semibold">{style.name}</h3>
              </div>
              
              <p className="text-sm text-white/90 mb-4">
                {style.description}
              </p>
              
              <div className="bg-black/20 rounded-lg p-3 text-sm">
                <p className="text-white/90 italic">"{style.sample}"</p>
              </div>
              
              <div className="mt-4 text-sm text-white/90">
                Click to try this style
              </div>
            </div>
          </button>
        ))}
      </div>

      {showDemo && selectedStyle && (
        <StyleDemoChat 
          style={selectedStyle} 
          onClose={() => {
            if (!isAnimating) {
              setShowDemo(false);
              setSelectedStyle(null);
              // Restart animation loop when manually closing
              animationRef.current = setTimeout(animateToNextStyle, 1000);
            }
          }} 
        />
      )}
    </div>
  );
};

export default StyleSelector;