import React from 'react';
import { ArrowRight } from 'lucide-react';
import ComparisonTable from './ComparisonTable';
import CompetitorCard from './CompetitorCard';

interface CompetitiveAnalysisSectionProps {
  onGetStarted: () => void;
}

const competitors = [
  {
    name: 'Satisfly',
    location: 'Poland',
    price: '500',
    currency: 'PLN',
    features: [
      'Basic customer service',
      'FAQ handling',
      'Simple integrations'
    ],
    limitations: [
      'No personalization',
      'No gamification',
      'Limited e-commerce features'
    ],
    availability: '95%'
  },
  {
    name: 'ChatBot',
    location: 'Poland',
    price: '800',
    currency: 'PLN',
    features: [
      'Multi-channel support',
      'Multilingual capabilities',
      'Platform integrations'
    ],
    limitations: [
      'Basic analytics only',
      'Limited personalization',
      'No advanced features'
    ],
    availability: '98%'
  },
  {
    name: 'BotXO',
    location: 'Denmark',
    price: '299',
    currency: 'EUR',
    features: [
      'NLP capabilities',
      'CRM integrations',
      'Multi-language support'
    ],
    limitations: [
      'Basic personalization',
      'No gamification',
      'Limited e-commerce focus'
    ],
    availability: '99%'
  }
];

const CompetitiveAnalysisSection: React.FC<CompetitiveAnalysisSectionProps> = ({ onGetStarted }) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 dark:text-white">
            Why Choose AI Connected?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            See how we stack up against the competition with our innovative features and superior performance
          </p>
        </div>

        <div className="mb-16">
          <ComparisonTable />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {competitors.map((competitor) => (
            <CompetitorCard
              key={competitor.name}
              {...competitor}
            />
          ))}
        </div>

        <div className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl p-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-violet-100 mb-8">
              Join the growing number of businesses that have chosen AI Connected for superior customer engagement and results.
            </p>
            <button 
              onClick={onGetStarted}
              className="bg-white text-violet-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition flex items-center gap-2 mx-auto"
            >
              Get Started Today <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveAnalysisSection;