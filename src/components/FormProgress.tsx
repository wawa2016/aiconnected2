import React from 'react';
import { Trophy, Star } from 'lucide-react';

interface FormProgressProps {
  progress: number;
  currentStep: number;
  totalSteps: number;
}

const FormProgress: React.FC<FormProgressProps> = ({ progress, currentStep, totalSteps }) => {
  return (
    <div className="mb-8">
      {/* Progress bar */}
      <div className="relative h-3 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden mb-2">
        <div 
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      {/* Progress info */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Trophy className={`w-5 h-5 ${progress === 100 ? 'text-yellow-500' : 'text-gray-400 dark:text-gray-500'}`} />
          <span className="text-sm text-gray-600 dark:text-gray-300">
            Step {currentStep} of {totalSteps}
          </span>
        </div>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i}
              className={`w-4 h-4 transition-colors duration-300 ${
                progress >= (i + 1) * 20 
                  ? 'fill-yellow-400 text-yellow-400' 
                  : 'text-gray-300 dark:text-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FormProgress;