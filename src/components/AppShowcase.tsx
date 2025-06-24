
import { Play, Star, Download, ArrowRight } from "lucide-react";

const AppShowcase = () => {
  const showcaseFeatures = [
    {
      title: "Lightning Fast Scanning",
      description: "Get results in under 3 seconds with our advanced OCR technology",
      metric: "3s",
      color: "from-safe to-safe-dark"
    },
    {
      title: "Comprehensive Analysis",
      description: "Detailed breakdown of every ingredient with health impact ratings",
      metric: "500+",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Smart Alternatives",
      description: "AI-powered recommendations tailored to your preferences and budget",
      metric: "10K+",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Personal Health Insights",
      description: "Track your choices and get personalized health improvement suggestions",
      metric: "95%",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-on-scroll">
          <div className="inline-flex items-center space-x-2 bg-safe/10 rounded-full px-6 py-3 mb-6">
            <Play className="h-4 w-4 text-safe" />
            <span className="text-safe font-semibold">App Showcase</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Experience the
            <span className="block bg-gradient-to-r from-safe to-blue-600 bg-clip-text text-transparent">
              Future of Shopping
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our advanced technology makes product safety scanning effortless and incredibly accurate.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto mb-20">
          {/* Enhanced app demo */}
          <div className="relative animate-on-scroll">
            <div className="flex justify-center space-x-8">
              {/* Phone 1 - Scanning Interface */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-safe/20 to-blue-500/20 rounded-3xl blur-xl"></div>
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-[2.5rem] p-3 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-white rounded-[2rem] overflow-hidden w-72 h-[580px]">
                    <div className="bg-gradient-to-b from-blue-50 to-white h-full p-6 flex flex-col">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        </div>
                        <div className="text-sm font-semibold text-gray-900">Scan Product</div>
                        <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                      </div>

                      {/* Camera viewfinder */}
                      <div className="flex-1 bg-gray-900 rounded-2xl mb-6 relative overflow-hidden">
                        <div className="absolute inset-4 border-2 border-safe rounded-xl"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg max-w-[200px]">
                            <div className="text-center">
                              <div className="text-xs font-bold text-gray-900 mb-2">Maggi Noodles</div>
                              <div className="text-[10px] text-gray-600 leading-tight">
                                Wheat flour, Palm oil, Salt, Spices, Flavor enhancer...
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute top-4 left-4 bg-safe/20 backdrop-blur-sm rounded-lg px-3 py-1">
                          <div className="text-xs font-semibold text-safe">Scanning...</div>
                        </div>
                      </div>

                      {/* Instructions */}
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-900 mb-2">Point at ingredients list</div>
                        <div className="text-sm text-gray-600">No barcode needed</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone 2 - Results */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-safe/20 rounded-3xl blur-xl"></div>
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-[2.5rem] p-3 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-white rounded-[2rem] overflow-hidden w-72 h-[580px]">
                    <div className="bg-gradient-to-b from-white to-gray-50 h-full p-6 flex flex-col">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-6">
                        <ArrowRight className="h-5 w-5 text-gray-400" />
                        <div className="text-sm font-semibold text-gray-900">Analysis Results</div>
                        <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      </div>

                      {/* Safety score */}
                      <div className="text-center mb-6">
                        <div className="w-24 h-24 bg-gradient-to-br from-caution to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                          <div className="text-white text-2xl font-bold">68</div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">Moderate Choice</h3>
                        <p className="text-sm text-gray-600">Some concerning ingredients</p>
                      </div>
                      
                      {/* Ingredient breakdown */}
                      <div className="space-y-3 mb-6">
                        <div className="bg-red-50 rounded-xl p-3 border border-red-100">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                              <span className="text-sm font-medium text-gray-900">MSG (E621)</span>
                            </div>
                            <span className="text-xs text-red-600 font-bold">AVOID</span>
                          </div>
                          <p className="text-xs text-gray-600 mt-1">May cause headaches</p>
                        </div>
                        
                        <div className="bg-orange-50 rounded-xl p-3 border border-orange-100">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                              <span className="text-sm font-medium text-gray-900">Palm Oil</span>
                            </div>
                            <span className="text-xs text-orange-600 font-bold">MODERATE</span>
                          </div>
                          <p className="text-xs text-gray-600 mt-1">High in saturated fats</p>
                        </div>

                        <div className="bg-safe/10 rounded-xl p-3 border border-safe/20">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 bg-safe rounded-full"></div>
                              <span className="text-sm font-medium text-gray-900">Wheat Flour</span>
                            </div>
                            <span className="text-xs text-safe font-bold">GOOD</span>
                          </div>
                          <p className="text-xs text-gray-600 mt-1">Natural carbohydrate source</p>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="mt-auto space-y-2">
                        <button className="w-full bg-gradient-to-r from-safe to-safe-dark text-white py-3 rounded-xl font-semibold text-sm shadow-lg">
                          Find Healthier Alternative
                        </button>
                        <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-xl font-semibold text-sm">
                          Add to Watchlist
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced features showcase */}
          <div className="space-y-8 animate-on-scroll">
            {showcaseFeatures.map((feature, index) => (
              <div 
                key={index}
                className="group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-100">
                  <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white text-xl font-bold">{feature.metric}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-safe transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-safe group-hover:translate-x-2 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video demo CTA */}
        <div className="text-center animate-on-scroll">
          <div className="bg-gradient-to-r from-safe/10 via-blue-50 to-purple-50 rounded-3xl p-12 max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-safe to-safe-dark rounded-full shadow-xl mb-6 hover:scale-110 transition-transform duration-300 cursor-pointer">
                <Play className="h-8 w-8 text-white ml-1" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                See It In Action
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Watch how easy it is to scan any product and get instant safety insights. No registration needed.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-safe mb-2">2 Min</div>
                <div className="text-gray-600">Demo Video</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">Real Time</div>
                <div className="text-gray-600">Scanning Demo</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">Live</div>
                <div className="text-gray-600">Product Analysis</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
