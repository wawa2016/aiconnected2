import React from 'react';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';

interface Solution {
  title: string;
  description: string;
}

interface CaseStudy {
  title: string;
  company: string;
  challenge: string;
  solutions: Solution[];
  results: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

interface IndustryModalProps {
  isOpen: boolean;
  onClose: () => void;
  caseStudy: CaseStudy;
}

const IndustryModal: React.FC<IndustryModalProps> = ({ isOpen, onClose, caseStudy }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-[fadeIn_0.3s_ease-out]">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-gray-100 dark:border-gray-700 sticky top-0 bg-white dark:bg-gray-800 z-10">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold dark:text-white">{caseStudy.title}</h3>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </button>
          </div>
          <p className="text-violet-600 dark:text-violet-400 font-medium mt-1">
            {caseStudy.company}
          </p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Challenge */}
          <div>
            <h4 className="text-lg font-semibold mb-3 dark:text-white">The Challenge</h4>
            <p className="text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl">
              {caseStudy.challenge}
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-semibold mb-3 dark:text-white">Our Solution</h4>
            <div className="space-y-4">
              {caseStudy.solutions.map((solution, index) => (
                <div 
                  key={index}
                  className="bg-violet-50 dark:bg-violet-900/20 p-4 rounded-xl"
                >
                  <h5 className="font-semibold text-violet-700 dark:text-violet-300 mb-2">
                    {solution.title}
                  </h5>
                  <p className="text-gray-600 dark:text-gray-300">
                    {solution.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Results */}
          <div>
            <h4 className="text-lg font-semibold mb-3 dark:text-white">Key Results</h4>
            <div className="grid sm:grid-cols-2 gap-4">
              {caseStudy.results.map((result, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">{result}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          {caseStudy.testimonial && (
            <div className="bg-gradient-to-br from-violet-600 to-indigo-600 p-6 rounded-xl text-white">
              <blockquote className="text-lg italic mb-4">
                "{caseStudy.testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-2">
                <div>
                  <p className="font-semibold">{caseStudy.testimonial.author}</p>
                  <p className="text-sm text-violet-200">{caseStudy.testimonial.role}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50">
          <button
            onClick={onClose}
            className="w-full bg-violet-600 text-white px-6 py-3 rounded-full font-medium hover:bg-violet-700 dark:hover:bg-violet-500 transition flex items-center justify-center gap-2"
          >
            Schedule a Demo <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndustryModal;