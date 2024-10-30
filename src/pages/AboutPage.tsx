import React from 'react';
import { Link } from 'react-router-dom';
import {
  Bot,
  ArrowLeft,
  Building2,
  Globe2,
  Users2,
  Rocket,
  Mail,
  Phone,
  MapPin,
  Target,
  Heart,
} from 'lucide-react';

function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white">
      <nav className="fixed w-full bg-white shadow-sm py-4 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bot className="text-violet-600" size={32} />
              <span className="font-bold text-xl">AIChat</span>
            </div>
            <Link
              to="/"
              className="flex items-center gap-2 text-violet-600 hover:text-violet-700 transition"
            >
              <ArrowLeft size={20} />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            About AI Connected
          </h1>

          {/* Hero Image */}
          <div className="relative mb-16 rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              alt="AIChat Team"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-violet-900/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h2 className="text-2xl font-bold mb-2">Meet Our Team</h2>
              <p className="text-white/90">
                Passionate innovators shaping the future of AI communication
              </p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-violet-600" size={24} />
                <h3 className="text-xl font-bold">Our Mission</h3>
              </div>
              <p className="text-gray-600 mb-4">
                To revolutionize customer engagement by creating AI solutions
                that authentically connect businesses with Generation Z,
                fostering meaningful interactions that drive growth and build
                lasting relationships.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-violet-600"></div>
                  <span>Bridge the generational communication gap</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-violet-600"></div>
                  <span>Empower businesses with AI-driven insights</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-violet-600"></div>
                  <span>Create personalized customer experiences</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="text-violet-600" size={24} />
                <h3 className="text-xl font-bold">Our Vision</h3>
              </div>
              <p className="text-gray-600 mb-4">
                To create a world where every business, regardless of size, can
                harness the power of AI to build authentic connections with the
                next generation of consumers, while setting new standards for
                digital communication.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-violet-600"></div>
                  <span>100% accessibility to AI technology</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-violet-600"></div>
                  <span>Industry-leading privacy standards</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-violet-600"></div>
                  <span>Continuous innovation in AI communication</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Company Info */}
          <div className="grid gap-8 mb-16">
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-violet-100 rounded-lg">
                <Building2 className="text-violet-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Our Company</h3>
                <p className="text-gray-600">
                  Founded in 2022, AI Connected has quickly grown to become a
                  leader in AI-powered customer engagement solutions. Our team
                  of AI experts and developers work tirelessly to push the
                  boundaries of what's possible in conversational AI.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-3 bg-violet-100 rounded-lg">
                <Globe2 className="text-violet-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Global Impact</h3>
                <p className="text-gray-600">
                  With offices in Warsaw and London we serve clients worldwide,
                  helping businesses connect with the next generation of
                  consumers through innovative AI solutions.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-3 bg-violet-100 rounded-lg">
                <Users2 className="text-violet-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Our Team</h3>
                <p className="text-gray-600">
                  Our diverse team includes AI researchers, software engineers,
                  UX designers, and Gen Z culture experts who collaborate to
                  create chatbots that truly understand and engage with young
                  consumers.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-3 bg-violet-100 rounded-lg">
                <Rocket className="text-violet-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Innovation Focus</h3>
                <p className="text-gray-600">
                  We invest heavily in R&D to stay at the forefront of AI
                  technology, constantly improving our natural language
                  processing capabilities and developing new features that
                  enhance customer engagement.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-br from-violet-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Email Us</h4>
                  <a
                    href="mailto:contact@aichat.com"
                    className="text-white/90 hover:text-white transition"
                  >
                    aiconnected@plwaw.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Call Us</h4>
                  <a
                    href="tel:+49301234567"
                    className="text-white/90 hover:text-white transition"
                  ></a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Visit Us</h4>
                  <address className="text-white/90 not-italic">
                    Okólnik 9a lok.12
                    <br />
                    00-368 Warszawa
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AboutPage;
