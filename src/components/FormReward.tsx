import React from 'react';
import { Trophy, Download, Gift } from 'lucide-react';
import confetti from 'canvas-confetti';

interface FormRewardProps {
  show: boolean;
  onClose: () => void;
}

const FormReward: React.FC<FormRewardProps> = ({ show, onClose }) => {
  React.useEffect(() => {
    if (show) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 w-full max-w-md text-center animate-[fadeIn_0.5s_ease-out]">
        <div className="mb-6">
          <div className="w-20 h-20 bg-violet-100 dark:bg-violet-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
            <Trophy className="w-10 h-10 text-violet-600 dark:text-violet-400" />
          </div>
          <h3 className="text-2xl font-bold mb-2 dark:text-white">Congratulations! 🎉</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Thank you for completing the form! Here's your reward:
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-violet-50 dark:bg-violet-900/20 p-4 rounded-xl">
            <Gift className="w-8 h-8 text-violet-600 dark:text-violet-400 mx-auto mb-2" />
            <h4 className="font-semibold mb-1 dark:text-white">Free AI Consultation</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              30-minute consultation with our AI experts
            </p>
          </div>

          <div className="bg-violet-50 dark:bg-violet-900/20 p-4 rounded-xl">
            <Download className="w-8 h-8 text-violet-600 dark:text-violet-400 mx-auto mb-2" />
            <h4 className="font-semibold mb-1 dark:text-white">Exclusive Whitepaper</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              "AI Implementation Guide for Business"
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-8 bg-violet-600 text-white px-8 py-3 rounded-full font-medium hover:bg-violet-700 dark:hover:bg-violet-500 transition w-full"
        >
          Claim Your Rewards
        </button>
      </div>
    </div>
  );
};

export default FormReward;