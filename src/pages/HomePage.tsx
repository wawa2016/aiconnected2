import React, { useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import CompetitiveAnalysisSection from '../components/CompetitiveAnalysis/CompetitiveAnalysisSection';
import DatabaseIntegrationSection from '../components/DatabaseIntegrationSection';
import AIPersonalitySection from '../components/AIPersonalitySection';
import IndustriesSection from '../components/IndustriesSection';
import Partners from '../components/Partners';
import CTASection from '../components/CTASection';
import ContactForm from '../components/ContactForm';

const HomePage: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const aiPersonalityRef = useRef<HTMLElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAIPersonality = () => {
    aiPersonalityRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white dark:from-gray-900 dark:to-gray-800 dark:text-white">
      <Navbar 
        isScrolled={isScrolled} 
        onGetStarted={() => setShowContactForm(true)} 
      />
      
      <HeroSection 
        onGetStarted={() => setShowContactForm(true)}
        onWatchDemo={scrollToAIPersonality}
      />

      <FeaturesSection />

      <AIPersonalitySection ref={aiPersonalityRef} />

      <DatabaseIntegrationSection />

      <IndustriesSection />

      <CompetitiveAnalysisSection onGetStarted={() => setShowContactForm(true)} />

      <Partners />

      <CTASection onGetStarted={() => setShowContactForm(true)} />

      <ContactForm 
        isOpen={showContactForm} 
        onClose={() => setShowContactForm(false)} 
      />
    </div>
  );
};

export default HomePage;