
import { Button } from "@/components/ui/button";
import { Shield, Star, Users, Globe } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-safe/5 to-blue-50/50">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.08),transparent_50%)]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.02]"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Content */}
            <div className="space-y-8 animate-fade-in">
              {/* Trust indicators */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <div className="flex items-center space-x-2 bg-safe/10 rounded-full px-4 py-2 border border-safe/20">
                  <Star className="h-4 w-4 text-safe fill-current" />
                  <span className="text-safe font-semibold text-sm">4.8★ Rated</span>
                </div>
                <div className="flex items-center space-x-2 bg-blue-50 rounded-full px-4 py-2 border border-blue-200">
                  <Users className="h-4 w-4 text-blue-600" />
                  <span className="text-blue-600 font-semibold text-sm">50K+ Users</span>
                </div>
                <div className="flex items-center space-x-2 bg-orange-50 rounded-full px-4 py-2 border border-orange-200">
                  <Globe className="h-4 w-4 text-orange-600" />
                  <span className="text-orange-600 font-semibold text-sm">Made in India</span>
                </div>
              </div>

              {/* Brand */}
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <div className="p-4 bg-gradient-to-br from-safe to-safe-dark rounded-3xl shadow-xl">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Is This Safe?</h1>
                  <p className="text-gray-600">Your Product Safety Guardian</p>
                </div>
              </div>

              {/* Main headline */}
              <div className="text-center lg:text-left">
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
                  <span className="block">Scan.</span>
                  <span className="block bg-gradient-to-r from-safe to-safe-dark bg-clip-text text-transparent">Understand.</span>
                  <span className="block">Choose Safe.</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed">
                  The most advanced ingredient scanner for Indian consumers. 
                  <span className="block mt-2 font-semibold text-gray-900">
                    AI-powered insights • Hindi support • Works offline
                  </span>
                </p>
              </div>

              {/* Enhanced CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-safe to-safe-dark hover:from-safe-dark hover:to-safe text-white px-10 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center group"
                >
                  <span className="text-3xl mr-3 group-hover:scale-110 transition-transform">🍎</span>
                  Download for iOS
                </Button>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center group"
                >
                  <span className="text-3xl mr-3 group-hover:scale-110 transition-transform">🤖</span>
                  Get on Android
                </Button>
              </div>

              {/* Social proof */}
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-8 pt-8 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-safe to-safe-dark rounded-full animate-pulse"></div>
                  <span className="font-medium">1M+ Products Scanned</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-safe to-safe-dark rounded-full animate-pulse"></div>
                  <span className="font-medium">Works Without Barcodes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-safe to-safe-dark rounded-full animate-pulse"></div>
                  <span className="font-medium">100% Free Forever</span>
                </div>
              </div>
            </div>

            {/* Right side - Enhanced phone mockup */}
            <div className="relative animate-slide-in-right">
              <div className="relative max-w-md mx-auto">
                {/* Floating elements */}
                <div className="absolute -top-8 -left-8 bg-safe/10 backdrop-blur-sm rounded-2xl p-4 shadow-xl animate-bounce">
                  <div className="text-2xl font-bold text-safe">85</div>
                  <div className="text-xs text-gray-600">Safety Score</div>
                </div>
                <div className="absolute -top-4 -right-4 bg-orange-100 backdrop-blur-sm rounded-2xl p-3 shadow-xl animate-bounce" style={{ animationDelay: '0.5s' }}>
                  <div className="text-sm font-bold text-orange-600">⚠️ Avoid</div>
                </div>
                <div className="absolute -bottom-8 -left-4 bg-blue-100 backdrop-blur-sm rounded-2xl p-3 shadow-xl animate-bounce" style={{ animationDelay: '1s' }}>
                  <div className="text-xs font-bold text-blue-600">✅ Jain Safe</div>
                </div>

                {/* Main phone */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-[3rem] p-3 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden">
                    <div className="h-[600px] bg-gradient-to-b from-gray-50 to-white relative">
                      {/* Phone screen content */}
                      <div className="p-8 h-full flex flex-col">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-8">
                          <div className="w-8 h-8 bg-safe/20 rounded-full"></div>
                          <div className="text-lg font-bold text-gray-900">Scan Results</div>
                          <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                        </div>

                        {/* Product card */}
                        <div className="bg-white rounded-3xl shadow-lg p-6 mb-6 border border-gray-100">
                          <div className="text-center mb-6">
                            <div className="w-24 h-24 bg-gradient-to-br from-safe-light to-safe rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                              <div className="text-white text-3xl font-bold">85</div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Good Choice!</h3>
                            <p className="text-sm text-gray-600">Mostly natural ingredients</p>
                          </div>

                          {/* Ingredient insights */}
                          <div className="space-y-3">
                            <div className="flex items-center justify-between p-3 bg-safe/10 rounded-xl">
                              <div className="flex items-center space-x-3">
                                <div className="w-3 h-3 bg-safe rounded-full"></div>
                                <span className="text-sm font-medium text-gray-900">Natural Vitamins</span>
                              </div>
                              <span className="text-xs text-safe font-bold">SAFE</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-orange-50 rounded-xl">
                              <div className="flex items-center space-x-3">
                                <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                                <span className="text-sm font-medium text-gray-900">Artificial Color</span>
                              </div>
                              <span className="text-xs text-orange-600 font-bold">MODERATE</span>
                            </div>
                          </div>
                        </div>

                        {/* Action buttons */}
                        <div className="mt-auto space-y-3">
                          <button className="w-full bg-safe text-white py-3 rounded-2xl font-semibold text-sm">
                            Find Better Alternative
                          </button>
                          <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-2xl font-semibold text-sm">
                            Save to My Safe List
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
