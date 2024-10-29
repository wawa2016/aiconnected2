import React, { useState, useRef, useEffect } from 'react';
import { X, Loader2, Globe, Building } from 'lucide-react';
import { Toaster, toast } from 'react-hot-toast';
import FormProgress from './FormProgress';
import FormReward from './FormReward';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Challenge {
  id: string;
  text: string;
}

interface Tool {
  id: string;
  text: string;
}

const challenges: Challenge[] = [
  { id: 'inquiries', text: 'We are struggling to effectively manage customer inquiries and need an automated solution' },
  { id: 'followups', text: 'We are losing customers due to delayed or inconsistent follow-ups' },
  { id: 'voice', text: 'Our phone support is overloaded and we need a smart, automated voice solution' },
  { id: 'fragmented', text: 'Our current AI or automation tools are too fragmented, we need an integrated solution' },
  { id: 'knowledge', text: 'We lack internal knowledge of artificial intelligence and want to understand how to use it in our company' },
  { id: 'none_challenges', text: 'None of the above' }
];

const tools: Tool[] = [
  { id: 'crm', text: 'CRM (e.g. Bitrix, Hubspot, Pipedrive)' },
  { id: 'erp', text: 'ERP (e.g. Optima, Enova, Symfonia)' },
  { id: 'project', text: 'Project Management (e.g., Asana, Monday, Trello)' },
  { id: 'none_tools', text: 'None of the above' }
];

const countryCodes = [
  { code: '+48', country: 'Poland' },
  { code: '+49', country: 'Germany' },
  { code: '+44', country: 'UK' },
  { code: '+1', country: 'USA' }
];

const validateNIP = (nip: string): boolean => {
  if (!/^[0-9]{10}$/.test(nip)) return false;
  
  const weights = [6, 5, 7, 2, 3, 4, 5, 6, 7];
  const sum = Array.from(nip.slice(0, -1)).reduce(
    (acc, digit, idx) => acc + parseInt(digit) * weights[idx],
    0
  );
  const checksum = sum % 11;
  return checksum === parseInt(nip[9]);
};

const ContactForm: React.FC<ContactFormProps> = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [countryCode, setCountryCode] = useState('+48');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showReward, setShowReward] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formProgress, setFormProgress] = useState(0);
  const [selectedChallenges, setSelectedChallenges] = useState<string[]>([]);
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [website, setWebsite] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!isOpen && formRef.current) {
      formRef.current.reset();
      setCurrentStep(1);
      setFormProgress(0);
      setSelectedChallenges([]);
      setSelectedTools([]);
      setShowReward(false);
      setWebsite('');
    }
  }, [isOpen]);

  const handleChallengeChange = (challengeId: string) => {
    setSelectedChallenges(prev => {
      if (challengeId === 'none_challenges') {
        return ['none_challenges'];
      }
      const newSelection = prev.includes(challengeId)
        ? prev.filter(id => id !== challengeId)
        : [...prev.filter(id => id !== 'none_challenges'), challengeId];
      return newSelection;
    });
  };

  const handleToolChange = (toolId: string) => {
    setSelectedTools(prev => {
      if (toolId === 'none_tools') {
        return ['none_tools'];
      }
      const newSelection = prev.includes(toolId)
        ? prev.filter(id => id !== toolId)
        : [...prev.filter(id => id !== 'none_tools'), toolId];
      return newSelection;
    });
  };

  const calculateProgress = () => {
    const form = formRef.current;
    if (!form) return 0;

    const requiredFields = form.querySelectorAll('[required]');
    let filledFields = 0;

    requiredFields.forEach(field => {
      if ((field as HTMLInputElement).value) {
        filledFields++;
      }
    });

    if (selectedChallenges.length > 0) filledFields++;
    if (selectedTools.length > 0) filledFields++;

    const progress = (filledFields / (requiredFields.length + 2)) * 100;
    setFormProgress(Math.min(100, progress));
  };

  useEffect(() => {
    calculateProgress();
  }, [selectedChallenges, selectedTools]);

  const handleWebsiteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    // Remove any existing protocol
    value = value.replace(/^(https?:\/\/)/, '');
    // Remove any spaces
    value = value.trim();
    setWebsite(value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      
      // Add the website with https:// protocol if not present
      const websiteValue = website.startsWith('http') ? website : `https://${website}`;
      formData.set('website', websiteValue);
      
      // Add selected challenges and tools to form data
      formData.append('challenges', selectedChallenges.join(','));
      formData.append('tools', selectedTools.join(','));

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString()
      });

      if (response.ok) {
        setShowReward(true);
        toast.success('Message sent successfully!');
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Toaster position="top-center" />
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 w-full max-w-2xl relative animate-[fadeIn_0.3s_ease-out] max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          disabled={isSubmitting}
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold mb-2 dark:text-white">Enter your details</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">and see what we have prepared for you!</p>
        
        <FormProgress 
          progress={formProgress}
          currentStep={currentStep}
          totalSteps={3}
        />
        
        <form
          ref={formRef}
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          onChange={calculateProgress}
          className="space-y-6"
        >
          <input type="hidden" name="form-name" value="contact" />
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                disabled={isSubmitting}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-violet-600 focus:border-transparent transition disabled:bg-gray-100 dark:disabled:bg-gray-600 disabled:cursor-not-allowed"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                disabled={isSubmitting}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-violet-600 focus:border-transparent transition disabled:bg-gray-100 dark:disabled:bg-gray-600 disabled:cursor-not-allowed"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Company Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              disabled={isSubmitting}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-violet-600 focus:border-transparent transition disabled:bg-gray-100 dark:disabled:bg-gray-600 disabled:cursor-not-allowed"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Phone Number *
            </label>
            <div className="flex gap-2">
              <select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                disabled={isSubmitting}
                className="w-32 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-violet-600 focus:border-transparent transition disabled:bg-gray-100 dark:disabled:bg-gray-600 disabled:cursor-not-allowed"
              >
                {countryCodes.map(({ code, country }) => (
                  <option key={code} value={code}>
                    {code} ({country})
                  </option>
                ))}
              </select>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                required
                disabled={isSubmitting}
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-violet-600 focus:border-transparent transition disabled:bg-gray-100 dark:disabled:bg-gray-600 disabled:cursor-not-allowed"
                placeholder="Enter phone number"
              />
            </div>
          </div>

          <div>
            <label htmlFor="website" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Website URL *
            </label>
            <div className="relative">
              <Globe className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                id="website"
                name="website"
                value={website}
                onChange={handleWebsiteChange}
                required
                disabled={isSubmitting}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-violet-600 focus:border-transparent transition disabled:bg-gray-100 dark:disabled:bg-gray-600 disabled:cursor-not-allowed"
                placeholder="example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="nip" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              NIP (Polish Tax ID) *
            </label>
            <div className="relative">
              <Building className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                id="nip"
                name="nip"
                pattern="\d{10}"
                title="NIP must be exactly 10 digits"
                required
                disabled={isSubmitting}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '');
                  e.target.value = value;
                  if (value.length === 10 && !validateNIP(value)) {
                    e.target.setCustomValidity('Invalid NIP number');
                  } else {
                    e.target.setCustomValidity('');
                  }
                }}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-violet-600 focus:border-transparent transition disabled:bg-gray-100 dark:disabled:bg-gray-600 disabled:cursor-not-allowed"
                placeholder="Enter 10-digit NIP"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              What challenges do you face in your current business processes? *
            </h3>
            <div className="space-y-3">
              {challenges.map((challenge) => (
                <label
                  key={challenge.id}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition cursor-pointer"
                >
                  <input
                    type="checkbox"
                    name={`challenge_${challenge.id}`}
                    checked={selectedChallenges.includes(challenge.id)}
                    onChange={() => handleChallengeChange(challenge.id)}
                    className="mt-1 h-4 w-4 text-violet-600 focus:ring-violet-500 rounded dark:bg-gray-600 dark:border-gray-500"
                  />
                  <span className="text-gray-700 dark:text-gray-200">{challenge.text}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              What tools are you currently using in your Company? *
            </h3>
            <div className="space-y-3">
              {tools.map((tool) => (
                <label
                  key={tool.id}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition cursor-pointer"
                >
                  <input
                    type="checkbox"
                    name={`tool_${tool.id}`}
                    checked={selectedTools.includes(tool.id)}
                    onChange={() => handleToolChange(tool.id)}
                    className="mt-1 h-4 w-4 text-violet-600 focus:ring-violet-500 rounded dark:bg-gray-600 dark:border-gray-500"
                  />
                  <span className="text-gray-700 dark:text-gray-200">{tool.text}</span>
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-violet-600 text-white py-3 px-6 rounded-full font-medium hover:bg-violet-700 dark:hover:bg-violet-500 transition mt-6 disabled:bg-violet-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                Sending...
              </>
            ) : (
              'Submit'
            )}
          </button>
        </form>
      </div>

      <FormReward 
        show={showReward} 
        onClose={() => {
          setShowReward(false);
          onClose();
        }} 
      />
    </div>
  );
};

export default ContactForm;