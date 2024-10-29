import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bot, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  isScrolled: boolean;
  onGetStarted: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled, onGetStarted }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToFeatures = (e: React.MouseEvent) => {
    e.preventDefault();
    const featuresSection = document.querySelector('#real-time-intelligence');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white dark:bg-gray-900 shadow-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Bot className="text-violet-600 dark:text-violet-400" size={32} />
            <span className="font-bold text-xl dark:text-white">AI Connected</span>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition">About</Link>
            <a href="#real-time-intelligence" onClick={scrollToFeatures} className="text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition">Features</a>
            <ThemeToggle />
            <button 
              onClick={onGetStarted}
              className="bg-violet-600 text-white px-6 py-2 rounded-full font-medium hover:bg-violet-700 dark:hover:bg-violet-500 transition"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`
          md:hidden 
          transition-all duration-300 ease-in-out
          ${isMenuOpen 
            ? 'max-h-64 opacity-100 mt-4' 
            : 'max-h-0 opacity-0 pointer-events-none'
          }
        `}>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 space-y-4">
            <Link 
              to="/about" 
              className="block text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <a 
              href="#real-time-intelligence"
              onClick={scrollToFeatures}
              className="block text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              Features
            </a>
            <button 
              onClick={() => {
                onGetStarted();
                setIsMenuOpen(false);
              }}
              className="w-full bg-violet-600 text-white px-6 py-2 rounded-full font-medium hover:bg-violet-700 dark:hover:bg-violet-500 transition"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;