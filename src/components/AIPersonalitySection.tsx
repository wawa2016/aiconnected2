import React from 'react';
import AIPersonalityCard from './AIPersonalityCard';

interface AIPersonalitySectionProps {
  ref: React.RefObject<HTMLElement>;
}

const AIPersonalitySection: React.FC<AIPersonalitySectionProps> = React.forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white dark:bg-gray-900">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4 dark:text-white">Find Your AI Personality Match 🎯</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300">What's your vibe? Let's find your perfect AI match!</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        <AIPersonalityCard
          style="modern"
          title="Gen Z Bestie"
          description="Your trendy, emoji-loving AI assistant that keeps it 💯 and speaks the language of today's youth."
          features={[
            "Fluent in internet slang and emojis",
            "Casual, friendly conversation style",
            "Pop culture references on point",
            "Perfect for social media support"
          ]}
        />
        <AIPersonalityCard
          style="professional"
          title="Professional Expert"
          description="A sophisticated, articulate AI assistant that maintains a polished and professional demeanor."
          features={[
            "Formal communication style",
            "Industry-specific terminology",
            "Detailed, thorough responses",
            "Perfect for business inquiries"
          ]}
        />
        <AIPersonalityCard
          style="green"
          title="Green Freak"
          description="An eco-conscious AI that promotes sustainability and environmental awareness in every interaction."
          features={[
            "Sustainability-focused advice",
            "Eco-friendly recommendations",
            "Environmental impact insights",
            "Green lifestyle tips"
          ]}
        />
        <AIPersonalityCard
          style="academic"
          title="Academic Researcher"
          description="A scholarly AI that provides well-researched, evidence-based responses with academic precision."
          features={[
            "Research-backed answers",
            "Academic citations",
            "Technical expertise",
            "In-depth analysis"
          ]}
        />
      </div>
    </section>
  );
});

AIPersonalitySection.displayName = 'AIPersonalitySection';

export default AIPersonalitySection;