import React from 'react';
import { Check, X, Minus } from 'lucide-react';

interface Feature {
  name: string;
  aiConnected: boolean | 'partial';
  competitors: boolean | 'partial';
}

const features: Feature[] = [
  { name: 'Advanced Personalization', aiConnected: true, competitors: 'partial' },
  { name: 'E-commerce Specialization', aiConnected: true, competitors: false },
  { name: 'Gamification System', aiConnected: true, competitors: false },
  { name: 'Multi-language Support', aiConnected: true, competitors: true },
  { name: 'Real-time Analytics', aiConnected: true, competitors: 'partial' },
  { name: 'Intent Recognition >90%', aiConnected: true, competitors: false },
  { name: 'Dedicated Support', aiConnected: true, competitors: 'partial' },
  { name: '99.9% Availability', aiConnected: true, competitors: true },
];

const ComparisonTable: React.FC = () => {
  const renderStatus = (status: boolean | 'partial') => {
    if (status === true) {
      return <Check className="w-5 h-5 text-emerald-500" />;
    } else if (status === false) {
      return <X className="w-5 h-5 text-red-500" />;
    }
    return <Minus className="w-5 h-5 text-yellow-500" />;
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b-2 border-gray-200 dark:border-gray-700">
            <th className="py-4 px-6 text-left text-gray-600 dark:text-gray-300">Feature</th>
            <th className="py-4 px-6 text-center text-violet-600 dark:text-violet-400 font-semibold">AI Connected</th>
            <th className="py-4 px-6 text-center text-gray-600 dark:text-gray-300">Competitors</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr 
              key={feature.name}
              className={`
                border-b border-gray-100 dark:border-gray-800
                ${index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800/50' : ''}
              `}
            >
              <td className="py-4 px-6 text-gray-800 dark:text-gray-200">{feature.name}</td>
              <td className="py-4 px-6">
                <div className="flex justify-center">{renderStatus(feature.aiConnected)}</div>
              </td>
              <td className="py-4 px-6">
                <div className="flex justify-center">{renderStatus(feature.competitors)}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;