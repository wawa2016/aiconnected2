import React, { useState } from 'react';
import { 
  Coffee, 
  Store, 
  Factory, 
  Shield, 
  Scale,
  TrendingUp,
  ArrowUpRight,
  Bot,
  Sparkles,
  Leaf,
  GraduationCap,
  Zap,
  Clock,
  Heart,
  ShieldCheck,
  BookOpen,
  LineChart,
  Target,
  ShoppingBag
} from 'lucide-react';
import IndustryModal from './IndustryModal';
import caseStudies from '../data/caseStudies';

const industries = [
  {
    icon: Store,
    name: 'Retail Stores',
    description: 'Transform customer experience with personalized shopping assistance, inventory checks, and omnichannel support.',
    benefits: [
      { icon: Zap, text: 'Reduce customer wait time by 65%' },
      { icon: ShoppingBag, text: 'Increase sales conversion by 40%' }
    ],
    recommendedPersona: {
      name: 'Professional Expert',
      icon: Bot,
      description: 'Delivers polished, knowledgeable assistance while maintaining brand professionalism'
    },
    caseStudyId: 'retail'
  },
  {
    icon: Coffee,
    name: 'Restaurants & Coffee Shops',
    description: 'Enhance dining experience with instant menu recommendations, allergen information, and order customization support.',
    benefits: [
      { icon: Zap, text: 'Reduce wait times by 70%' },
      { icon: Clock, text: '24/7 instant order support' }
    ],
    recommendedPersona: {
      name: 'Green Freak',
      icon: Leaf,
      description: 'Perfect for promoting sustainable dining and eco-friendly practices'
    },
    caseStudyId: 'restaurants'
  },
  {
    icon: Factory,
    name: 'Industrial Manufacturing',
    description: 'Streamline operations with technical support, maintenance guidance, and inventory management.',
    benefits: [
      { icon: Zap, text: 'Reduce downtime by 35%' },
      { icon: Clock, text: 'Technical support 24/7' }
    ],
    recommendedPersona: {
      name: 'Academic Researcher',
      icon: GraduationCap,
      description: 'Provides detailed technical information with precision and clarity'
    },
    caseStudyId: 'manufacturing'
  },
  {
    icon: Shield,
    name: 'Insurance Services',
    description: 'Simplify claims processing and provide instant policy information with AI-powered assistance.',
    benefits: [
      { icon: ShieldCheck, text: 'Faster claim processing' },
      { icon: Heart, text: 'Improved client satisfaction' }
    ],
    recommendedPersona: {
      name: 'Professional Expert',
      icon: Bot,
      description: 'Handles sensitive information with appropriate formality and expertise'
    },
    caseStudyId: 'insurance'
  },
  {
    icon: Scale,
    name: 'Legal & Law Firms',
    description: 'Streamline client intake and provide preliminary legal information with AI assistance.',
    benefits: [
      { icon: BookOpen, text: 'Efficient case management' },
      { icon: Clock, text: '24/7 client support' }
    ],
    recommendedPersona: {
      name: 'Academic Researcher',
      icon: GraduationCap,
      description: 'Provides accurate legal information with proper citations'
    },
    caseStudyId: 'legal'
  },
  {
    icon: TrendingUp,
    name: 'Venture Capital',
    description: 'Enhance investment decisions with AI-powered market analysis and startup evaluation.',
    benefits: [
      { icon: LineChart, text: 'Data-driven insights' },
      { icon: Target, text: 'Improved deal flow' }
    ],
    recommendedPersona: {
      name: 'Professional Expert',
      icon: Bot,
      description: 'Delivers sophisticated market analysis and investment insights'
    },
    caseStudyId: 'ventureCap'
  }
];

const IndustriesSection: React.FC = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<string | null>(null);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4 dark:text-white">Industries We Serve</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Transforming customer experience across diverse sectors
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {industries.map((industry) => (
          <div
            key={industry.name}
            onClick={() => setSelectedCaseStudy(industry.caseStudyId)}
            className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            {/* Header */}
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-violet-100 dark:bg-violet-900/50 rounded-xl group-hover:bg-violet-600 transition-colors">
                <industry.icon className="w-6 h-6 text-violet-600 dark:text-violet-400 group-hover:text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400">
                  {industry.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {industry.description}
                </p>
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-3 mb-6">
              {industry.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <benefit.icon className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                  <span className="text-gray-600 dark:text-gray-300">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* Recommended Persona */}
            <div className="bg-violet-50 dark:bg-violet-900/20 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <industry.recommendedPersona.icon className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                <span className="font-semibold text-violet-600 dark:text-violet-400">
                  Recommended: {industry.recommendedPersona.name}
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {industry.recommendedPersona.description}
              </p>
            </div>

            {/* View Case Study Button */}
            <button className="mt-6 w-full flex items-center justify-center gap-2 text-violet-600 dark:text-violet-400 font-medium group-hover:text-violet-700 dark:group-hover:text-violet-300">
              View Case Study <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {selectedCaseStudy && caseStudies[selectedCaseStudy] && (
        <IndustryModal
          isOpen={true}
          onClose={() => setSelectedCaseStudy(null)}
          caseStudy={caseStudies[selectedCaseStudy]}
        />
      )}
    </section>
  );
};

export default IndustriesSection;