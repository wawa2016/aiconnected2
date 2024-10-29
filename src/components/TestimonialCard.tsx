import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  content: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, image, content }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center gap-2 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className="fill-yellow-400 text-yellow-400 transform transition-transform hover:scale-110" 
            size={16} 
          />
        ))}
      </div>
      <p className="text-gray-600 mb-6 leading-relaxed">{content}</p>
      <div className="flex items-center gap-4">
        <div className="relative group">
          <img 
            src={image} 
            alt={name} 
            className="w-12 h-12 rounded-full object-cover ring-2 ring-violet-100 transition-all duration-300 group-hover:ring-violet-300" 
          />
          <div className="absolute inset-0 rounded-full bg-violet-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div>
          <h4 className="font-semibold transform transition-all duration-300 hover:text-violet-600">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;