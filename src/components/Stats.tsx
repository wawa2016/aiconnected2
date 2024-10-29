import React from 'react';
import { Users, MessageSquare, Star } from 'lucide-react';

const Stats: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Users className="text-violet-600 dark:text-violet-400" size={32} />,
              number: "1M+",
              label: "Active Users"
            },
            {
              icon: <MessageSquare className="text-violet-600 dark:text-violet-400" size={32} />,
              number: "10M+",
              label: "Messages Daily"
            },
            {
              icon: <Star className="text-violet-600 dark:text-violet-400" size={32} />,
              number: "98%",
              label: "Satisfaction Rate"
            }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              {stat.icon}
              <div className="mt-2 text-4xl font-bold text-gray-900 dark:text-white">{stat.number}</div>
              <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;