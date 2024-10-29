import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  onGetStarted: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ onGetStarted }) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Customer Experience?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Join hundreds of forward-thinking companies already using our AI solution.
        </p>
        <button 
          onClick={onGetStarted}
          className="bg-white text-violet-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition flex items-center gap-2 mx-auto"
        >
          Schedule a Demo <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default CTASection;