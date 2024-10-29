interface CaseStudy {
  id: string;
  title: string;
  company: string;
  challenge: string;
  solutions: Array<{
    title: string;
    description: string;
  }>;
  results: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const caseStudies: Record<string, CaseStudy> = {
  retail: {
    id: 'retail',
    title: 'Transforming Retail Customer Experience',
    company: 'SmartShop Retail (Pilot Program)',
    challenge: 'A growing retail chain struggled with providing consistent customer service across multiple locations, managing product inquiries, and maintaining accurate inventory information while dealing with high customer volume during peak hours.',
    solutions: [
      {
        title: 'Professional AI Retail Assistant',
        description: 'Implemented our Professional Expert persona to handle customer queries with product expertise and brand consistency across all channels.'
      },
      {
        title: 'Omnichannel Integration',
        description: 'Connected AI system with inventory, CRM, and e-commerce platforms for seamless customer experience across all touchpoints.'
      },
      {
        title: 'Smart Inventory Management',
        description: 'Real-time inventory tracking and automated notifications for stock levels, helping both customers and staff make informed decisions.'
      }
    ],
    results: [
      'Reduced customer wait times by 65%',
      'Increased sales conversion rate by 40%',
      'Improved inventory accuracy to 98%',
      'Enhanced customer satisfaction scores by 45%'
    ],
    testimonial: {
      quote: "The AI assistant has revolutionized how we serve our customers. It's like having a knowledgeable sales associate available 24/7 across all our channels.",
      author: "Jennifer Martinez",
      role: "Head of Retail Operations, SmartShop"
    }
  },
  restaurants: {
    id: 'restaurants',
    title: 'Sustainable Restaurant Operations',
    company: 'Green Table Café (Pilot Partner)',
    challenge: 'An eco-conscious café chain wanted to effectively communicate their sustainability initiatives and source-to-table journey while handling customer service inquiries.',
    solutions: [
      {
        title: 'Eco-Conscious AI Support',
        description: 'Deployed our Green Freak persona to handle customer queries with a focus on sustainability and environmental impact.'
      },
      {
        title: 'Supply Chain Transparency',
        description: 'Integrated with inventory system to provide real-time information about local sourcing and sustainable practices.'
      }
    ],
    results: [
      'Increased customer engagement with sustainability initiatives by 85%',
      'Reduced food waste by 40% through better communication',
      'Improved local supplier relationship management by 50%',
      'Achieved 90% positive feedback on sustainability communications'
    ],
    testimonial: {
      quote: "The Green Freak AI has helped us tell our sustainability story in a way that really resonates with our environmentally conscious customers.",
      author: "Michael Green",
      role: "Founder, Green Table Café"
    }
  },
  manufacturing: {
    id: 'manufacturing',
    title: 'Streamlining Industrial Support',
    company: 'TechPro Manufacturing (Early Adopter)',
    challenge: 'A medium-sized manufacturing company struggled with providing 24/7 technical support for their machinery operators and maintenance staff.',
    solutions: [
      {
        title: 'Technical Documentation AI',
        description: 'Implemented our Academic Researcher persona to provide detailed technical specifications and troubleshooting procedures.'
      },
      {
        title: 'Predictive Maintenance Integration',
        description: 'Connected AI system with machinery sensors for real-time diagnostics and maintenance recommendations.'
      }
    ],
    results: [
      'Reduced equipment downtime by 35%',
      'Decreased response time for technical queries by 80%',
      'Improved first-time resolution rate by 60%',
      'Achieved 95% accuracy in maintenance recommendations'
    ]
  },
  insurance: {
    id: 'insurance',
    title: 'Revolutionizing Insurance Services',
    company: 'SecureLife Insurance (Beta Partner)',
    challenge: 'A regional insurance provider needed to streamline claims processing and provide instant policy information while maintaining compliance and accuracy.',
    solutions: [
      {
        title: 'Professional Insurance AI',
        description: 'Deployed our Professional Expert persona to handle policy inquiries and claims guidance with appropriate insurance terminology.'
      },
      {
        title: 'Claims Process Automation',
        description: 'Integrated AI system with claims management platform for faster processing and status updates.'
      }
    ],
    results: [
      'Reduced claims processing time by 50%',
      'Increased client satisfaction ratings by 60%',
      'Improved policy inquiry response time by 75%',
      'Achieved 99% accuracy in policy information delivery'
    ]
  },
  legal: {
    id: 'legal',
    title: 'Modernizing Legal Consultations',
    company: 'Future Law Associates (Beta Program)',
    challenge: 'A forward-thinking law firm needed to streamline initial client consultations and provide basic legal information while ensuring accuracy and compliance.',
    solutions: [
      {
        title: 'Academic AI Legal Assistant',
        description: 'Implemented our Academic Researcher persona to handle initial legal inquiries with proper citations and precise language.'
      },
      {
        title: 'Case Management Integration',
        description: 'Connected AI system with legal database for accurate precedent references and documentation.'
      }
    ],
    results: [
      'Reduced initial consultation time by 60%',
      'Increased qualified lead conversion by 45%',
      'Improved client satisfaction ratings by 50%',
      'Achieved 98% accuracy in legal information delivery'
    ]
  },
  ventureCap: {
    id: 'ventureCap',
    title: 'AI-Powered Investment Analysis',
    company: 'NextGen Ventures (Early Access Partner)',
    challenge: 'A boutique VC firm needed to enhance their initial startup screening process and provide quick market analysis for potential investments.',
    solutions: [
      {
        title: 'Professional Investment AI',
        description: 'Deployed our Professional Expert persona to analyze startup pitches and provide market insights.'
      },
      {
        title: 'Market Intelligence Integration',
        description: 'Connected AI system with multiple data sources for comprehensive market analysis and trend identification.'
      }
    ],
    results: [
      'Reduced initial screening time by 70%',
      'Increased quality deal flow by 40%',
      'Improved market analysis accuracy by 55%',
      'Accelerated due diligence process by 30%'
    ]
  }
};

export default caseStudies;