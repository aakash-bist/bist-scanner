
import { Button } from "@/components/ui/button";
import { Shield, Star, Users, Globe, Apple, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-safe/5 to-blue-50/50">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.08),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.05),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Content */}
            <div className="space-y-8 animate-fade-in text-center lg:text-left">
              {/* Brand */}
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <div className="p-3 bg-gradient-to-br from-safe to-safe-dark rounded-2xl shadow-lg">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Is This Safe?</h1>
                  <p className="text-gray-600 text-sm">Your Product Safety Guardian</p>
                </div>
              </div>

              {/* Main headline */}
              <div>
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  <span className="block">Scan.</span>
                  <span className="block bg-gradient-to-r from-safe to-safe-dark bg-clip-text text-transparent">Understand.</span>
                  <span className="block">Choose Safe.</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Advanced AI-powered ingredient scanner built specifically for Indian consumers. 
                  <span className="block mt-2 font-semibold text-gray-800">
                    Hindi support • Works offline • 100% Free
                  </span>
                </p>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <div className="flex items-center space-x-2 bg-safe/10 rounded-full px-4 py-2">
                  <Star className="h-4 w-4 text-safe fill-current" />
                  <span className="text-safe font-medium text-sm">4.8★ Rated</span>
                </div>
                <div className="flex items-center space-x-2 bg-blue-50 rounded-full px-4 py-2">
                  <Users className="h-4 w-4 text-blue-600" />
                  <span className="text-blue-600 font-medium text-sm">50K+ Users</span>
                </div>
                <div className="flex items-center space-x-2 bg-orange-50 rounded-full px-4 py-2">
                  <Globe className="h-4 w-4 text-orange-600" />
                  <span className="text-orange-600 font-medium text-sm">Made in India</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-safe to-safe-dark hover:from-safe-dark hover:to-safe text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center group"
                >
                  <Apple className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
                  Download for iOS
                </Button>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center group"
                >
                  <Play className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
                  Get on Android
                </Button>
              </div>

              {/* Simple stats */}
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 pt-4 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-safe rounded-full"></div>
                  <span>1M+ Products Scanned</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-safe rounded-full"></div>
                  <span>Works Without Barcodes</span>
                </div>
              </div>
            </div>

            {/* Right side - iPhone mockup */}
            <div className="relative animate-slide-in-right">
              <div className="relative max-w-sm mx-auto">
                {/* Floating badges */}
                <div className="absolute -top-6 -left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-3 shadow-lg animate-bounce border">
                  <div className="text-lg font-bold text-safe">85</div>
                  <div className="text-xs text-gray-600">Safety Score</div>
                </div>
                <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-3 shadow-lg animate-bounce border" style={{ animationDelay: '0.5s' }}>
                  <div className="text-xs font-bold text-orange-600">⚠️ Moderate</div>
                </div>

                {/* iPhone Frame */}
                <div className="relative bg-black rounded-[3rem] p-2 shadow-2xl">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20"></div>
                  
                  {/* Screen */}
                  <div className="bg-white rounded-[2.5rem] overflow-hidden relative">
                    <div className="h-[600px] bg-gradient-to-b from-gray-50 to-white">
                      {/* Status Bar */}
                      <div className="flex justify-between items-center px-6 pt-12 pb-4">
                        <div className="text-sm font-semibold">9:41</div>
                        <div className="flex items-center space-x-1">
                          <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                          <div className="w-6 h-3 border border-gray-300 rounded-sm">
                            <div className="w-4 h-2 bg-green-500 rounded-sm m-0.5"></div>
                          </div>
                        </div>
                      </div>

                      {/* App Content */}
                      <div className="px-6 h-full flex flex-col">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="text-2xl font-bold text-gray-900">Scan Results</div>
                          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                            <Shield className="h-4 w-4 text-safe" />
                          </div>
                        </div>

                        {/* Product Result Card */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
                          <div className="text-center mb-4">
                            <div className="w-20 h-20 bg-gradient-to-br from-safe to-safe-dark rounded-2xl flex items-center justify-center mx-auto mb-3">
                              <div className="text-white text-2xl font-bold">85</div>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-1">Good Choice!</h3>
                            <p className="text-sm text-gray-600">Natural ingredients detected</p>
                          </div>

                          {/* Ingredients */}
                          <div className="space-y-2">
                            <div className="flex items-center justify-between p-2 bg-green-50 rounded-lg">
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span className="text-sm font-medium">Natural Vitamins</span>
                              </div>
                              <span className="text-xs text-green-600 font-bold">SAFE</span>
                            </div>
                            <div className="flex items-center justify-between p-2 bg-orange-50 rounded-lg">
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                                <span className="text-sm font-medium">Artificial Color</span>
                              </div>
                              <span className="text-xs text-orange-600 font-bold">MODERATE</span>
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-auto pb-8 space-y-3">
                          <button className="w-full bg-safe text-white py-3 rounded-xl font-medium">
                            Find Better Alternative
                          </button>
                          <button className="w-full border border-gray-200 text-gray-700 py-3 rounded-xl font-medium">
                            Save to Safe List
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
