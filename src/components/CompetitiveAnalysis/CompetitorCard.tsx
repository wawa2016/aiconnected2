import React from 'react';
import { Globe2, DollarSign, CheckCircle2, XCircle } from 'lucide-react';

interface CompetitorProps {
  name: string;
  location: string;
  price: string;
  currency: string;
  features: string[];
  limitations: string[];
  availability: string;
}

const CompetitorCard: React.FC<CompetitorProps> = ({
  name,
  location,
  price,
  currency,
  features,
  limitations,
  availability
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold dark:text-white">{name}</h3>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <Globe2 className="w-4 h-4 mr-1" />
          {location}
        </div>
      </div>

      <div className="flex items-center gap-2 mb-6">
        <DollarSign className="w-5 h-5 text-violet-600 dark:text-violet-400" />
        <span className="text-2xl font-bold text-violet-600 dark:text-violet-400">
          {price}
        </span>
        <span className="text-gray-500 dark:text-gray-400">
          /{currency}/month
        </span>
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Features</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-1" />
                <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Limitations</h4>
          <ul className="space-y-2">
            {limitations.map((limitation, index) => (
              <li key={index} className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-1" />
                <span className="text-sm text-gray-600 dark:text-gray-300">{limitation}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-sm text-gray-500 dark:text-gray-400">
        Availability: {availability}
      </div>
    </div>
  );
};

export default CompetitorCard;