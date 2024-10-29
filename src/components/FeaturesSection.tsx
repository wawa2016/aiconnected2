import React from 'react';
import { Brain, ShoppingBag, Trophy, Shield, Users, MessageSquare, Target, Sparkles, Gift, Award } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600">
            Revolutionizing Customer Service
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience the future of e-commerce with our advanced AI technology that adapts and grows with your business
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Contextual Personalization */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-violet-100 dark:bg-violet-900/50 rounded-xl">
                <Brain className="w-6 h-6 text-violet-600 dark:text-violet-400" />
              </div>
              <h3 className="text-xl font-semibold dark:text-white">Advanced Contextual Personalization</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-violet-600 dark:text-violet-400 flex-shrink-0 mt-1" />
                <p className="text-gray-600 dark:text-gray-300">
                  Intelligent profiling adapts to diverse user groups including Gen Z, seniors, and scientists
                </p>
              </div>
              <div className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-violet-600 dark:text-violet-400 flex-shrink-0 mt-1" />
                <p className="text-gray-600 dark:text-gray-300">
                  Dynamic communication style adjusts to match individual preferences
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-violet-600 dark:text-violet-400 flex-shrink-0 mt-1" />
                <p className="text-gray-600 dark:text-gray-300">
                  Precise intent detection for contextually relevant responses
                </p>
              </div>
            </div>
          </div>

          {/* Product Consulting */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-violet-100 dark:bg-violet-900/50 rounded-xl">
                <ShoppingBag className="w-6 h-6 text-violet-600 dark:text-violet-400" />
              </div>
              <h3 className="text-xl font-semibold dark:text-white">Interactive Product Consulting</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-violet-600 dark:text-violet-400 flex-shrink-0 mt-1" />
                <p className="text-gray-600 dark:text-gray-300">
                  Tailored recommendations based on preferences and purchase history
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Gift className="w-5 h-5 text-violet-600 dark:text-violet-400 flex-shrink-0 mt-1" />
                <p className="text-gray-600 dark:text-gray-300">
                  Comprehensive product information including ingredients and certifications
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-violet-600 dark:text-violet-400 flex-shrink-0 mt-1" />
                <p className="text-gray-600 dark:text-gray-300">
                  Advanced comparison tools highlighting key differences and benefits
                </p>
              </div>
            </div>
          </div>

          {/* Gamification */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-violet-100 dark:bg-violet-900/50 rounded-xl">
                <Trophy className="w-6 h-6 text-violet-600 dark:text-violet-400" />
              </div>
              <h3 className="text-xl font-semibold dark:text-white">Innovative Gamification</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-violet-600 dark:text-violet-400 flex-shrink-0 mt-1" />
                <p className="text-gray-600 dark:text-gray-300">
                  Personalized achievements and badges system for engagement
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-violet-600 dark:text-violet-400 flex-shrink-0 mt-1" />
                <p className="text-gray-600 dark:text-gray-300">
                  Dynamic missions and challenges tailored to user profiles
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Gift className="w-5 h-5 text-violet-600 dark:text-violet-400 flex-shrink-0 mt-1" />
                <p className="text-gray-600 dark:text-gray-300">
                  Gamified loyalty program encouraging repeat engagement
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Security Badge */}
        <div className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl p-8 text-white">
          <div className="flex items-center gap-6">
            <div className="p-4 bg-white/10 rounded-xl">
              <Shield className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Enterprise-Grade Security</h4>
              <p className="text-violet-100">
                Fully compliant with GDPR requirements and ISO 27001 data security standards. 
                Our proprietary technology is protected by copyright and ensures the highest level of data protection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;