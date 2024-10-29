import React from 'react';
import { Database, RefreshCw, Layers, User, Bot, Check } from 'lucide-react';

const DatabaseIntegrationSection: React.FC = () => {
  return (
    <section id="real-time-intelligence" className="py-20 bg-gradient-to-br from-violet-900 via-violet-800 to-indigo-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6bTAgMmMtMi4yMSAwLTQgMS43OS00IDRzMS43OSA0IDQgNCA0LTEuNzkgNC00LTEuNzktNC00LTR6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-5"></div>
      
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Real-Time Product Intelligence</h2>
          <p className="text-lg text-violet-200 max-w-2xl mx-auto">
            Our AI seamlessly connects with your product database, learning and adapting to provide accurate, real-time information to your customers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-violet-600 rounded-xl">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Dynamic Learning</h3>
              </div>
              <p className="text-violet-200">
                Our AI continuously learns from your product database, staying up-to-date with:
              </p>
              <ul className="mt-4 space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-violet-400 rounded-full"></div>
                  <span>Real-time inventory levels</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-violet-400 rounded-full"></div>
                  <span>Price updates and promotions</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-violet-400 rounded-full"></div>
                  <span>New product launches</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-violet-600 rounded-xl">
                  <RefreshCw className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Intelligent Sync</h3>
              </div>
              <p className="text-violet-200">
                Bi-directional synchronization ensures:
              </p>
              <ul className="mt-4 space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-violet-400 rounded-full"></div>
                  <span>Automatic product knowledge updates</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-violet-400 rounded-full"></div>
                  <span>Customer interaction insights</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-violet-400 rounded-full"></div>
                  <span>Trend analysis and recommendations</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-violet-600 to-indigo-600 rounded-2xl p-8 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Layers className="w-6 h-6" />
                  <span className="font-semibold">Database Integration Demo</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-black/20 backdrop-blur-sm rounded-lg p-4">
                  <code className="text-sm font-mono">
                    <span className="text-blue-300">SELECT</span>{" "}
                    <span className="text-gray-300">product_name, price, stock</span>{" "}
                    <span className="text-blue-300">FROM</span>{" "}
                    <span className="text-gray-300">products</span>{" "}
                    <span className="text-blue-300">WHERE</span>{" "}
                    <span className="text-gray-300">category = 'skincare';</span>
                  </code>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <User className="w-4 h-4 text-gray-300" />
                    <span className="text-sm text-gray-300">Customer:</span>
                  </div>
                  <p className="text-sm">"What's your best moisturizer for dry skin?"</p>
                </div>

                <div className="bg-violet-600/30 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Bot className="w-4 h-4 text-gray-300" />
                    <span className="text-sm text-gray-300">AI Response:</span>
                  </div>
                  <p className="text-sm">
                    "Based on our current inventory, I recommend our Hydra-Plus Cream (€29.99, in stock). It contains hyaluronic acid and ceramides, perfect for dry skin. We also have 3 other moisturizers in stock that I can tell you about."
                  </p>
                </div>

                <div className="bg-emerald-600/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center gap-2 text-emerald-300 text-sm">
                    <Check className="w-4 h-4" />
                    <span>Real-time data retrieved in 0.03s</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-violet-600 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-indigo-600 rounded-full blur-3xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DatabaseIntegrationSection;