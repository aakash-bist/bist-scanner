
import { Button } from "@/components/ui/button";
import { Shield, Star, Users, Globe, Play, ArrowRight, Lock, Brain, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-safe/5 to-blue-50/50">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.08),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.05),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
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

              {/* Main headline - Simplified */}
              <div>
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">
                  <span className="block">Scan Ingredients.</span>
                  <span className="block bg-gradient-to-r from-safe to-safe-dark bg-clip-text text-transparent">Spot Toxins.</span>
                  <span className="block">Stay Safe.</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 mb-4">
                  AI-powered scanner for food, skincare, and daily products.
                </p>
                <p className="text-lg text-gray-500 max-w-xl mx-auto lg:mx-0">
                  Hindi support • Works offline • 100% Free
                </p>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <div className="flex items-center space-x-2 bg-green-50 rounded-full px-4 py-2 border border-green-200">
                  <Lock className="h-4 w-4 text-green-600" />
                  <span className="text-green-700 font-medium text-sm">Private & Secure</span>
                </div>
                <div className="flex items-center space-x-2 bg-blue-50 rounded-full px-4 py-2 border border-blue-200">
                  <Brain className="h-4 w-4 text-blue-600" />
                  <span className="text-blue-700 font-medium text-sm">Built with AI</span>
                </div>
                <div className="flex items-center space-x-2 bg-orange-50 rounded-full px-4 py-2 border border-orange-200">
                  <MapPin className="h-4 w-4 text-orange-600" />
                  <span className="text-orange-700 font-medium text-sm">Made in India</span>
                </div>
              </div>

              {/* Single Strong CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-safe to-safe-dark hover:from-safe-dark hover:to-safe text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center group"
                >
                  <span className="text-2xl mr-4 group-hover:scale-110 transition-transform">📱</span>
                  Try Scan Now
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-safe text-safe hover:bg-safe hover:text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center group"
                >
                  <Play className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
                  Download App (Free)
                </Button>
              </div>

              {/* Simple stats */}
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 pt-4 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span>4.8★ • 50K+ Users</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-safe rounded-full animate-pulse"></div>
                  <span>1M+ Products Scanned</span>
                </div>
              </div>
            </div>

            {/* Right side - Animated iPhone mockup */}
            <div className="relative animate-slide-in-right">
              <div className="relative max-w-sm mx-auto">
                {/* Floating result badges */}
                <div className="absolute -top-6 -left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl animate-bounce border border-green-200">
                  <div className="text-2xl font-bold text-safe">SAFE</div>
                  <div className="text-xs text-gray-600">Natural ingredients</div>
                </div>
                <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-3 shadow-xl animate-bounce border border-orange-200" style={{ animationDelay: '0.5s' }}>
                  <div className="text-xs font-bold text-orange-600">⚠️ AVOID</div>
                  <div className="text-xs text-gray-500">Contains parabens</div>
                </div>

                {/* iPhone Frame - More realistic Apple design */}
                <div className="relative bg-black rounded-[3.5rem] p-3 shadow-2xl">
                  {/* Dynamic Island */}
                  <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-28 h-7 bg-black rounded-full z-20 shadow-inner"></div>
                  
                  {/* Screen */}
                  <div className="bg-white rounded-[2.8rem] overflow-hidden relative">
                    <div className="h-[640px] bg-gradient-to-b from-gray-50 to-white relative">
                      {/* Animated scanning overlay */}
                      <div className="absolute inset-0 bg-gradient-to-b from-safe/20 via-transparent to-safe/20 animate-pulse"></div>
                      
                      {/* Status Bar */}
                      <div className="flex justify-between items-center px-8 pt-14 pb-4 relative z-10">
                        <div className="text-sm font-semibold">9:41</div>
                        <div className="flex items-center space-x-1">
                          <div className="flex space-x-1">
                            <div className="w-1 h-3 bg-gray-800 rounded-full"></div>
                            <div className="w-1 h-3 bg-gray-800 rounded-full"></div>
                            <div className="w-1 h-3 bg-gray-800 rounded-full"></div>
                          </div>
                          <div className="w-6 h-3 border border-gray-800 rounded-sm ml-1">
                            <div className="w-4 h-2 bg-green-500 rounded-sm m-0.5"></div>
                          </div>
                        </div>
                      </div>

                      {/* App Content - Animated Demo */}
                      <div className="px-6 h-full flex flex-col relative">
                        {/* Header with scan animation */}
                        <div className="text-center mb-6">
                          <div className="text-3xl font-bold text-gray-900 mb-2">Scanning...</div>
                          <div className="w-16 h-1 bg-safe rounded-full mx-auto animate-pulse"></div>
                        </div>

                        {/* Product Image Placeholder with scan overlay */}
                        <div className="relative mb-6">
                          <div className="w-full h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center relative overflow-hidden">
                            <div className="text-4xl">🧴</div>
                            {/* Scanning line animation */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-safe to-transparent animate-[slide-in-right_2s_ease-in-out_infinite]"></div>
                          </div>
                        </div>

                        {/* Animated Results */}
                        <div className="space-y-3 flex-1">
                          <div className="bg-green-50 rounded-2xl p-4 border-l-4 border-green-500 animate-slide-in-left">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                <span className="text-sm font-medium text-green-800">Natural Vitamins</span>
                              </div>
                              <span className="text-xs text-green-600 font-bold">✓ SAFE</span>
                            </div>
                          </div>

                          <div className="bg-yellow-50 rounded-2xl p-4 border-l-4 border-yellow-500 animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                <span className="text-sm font-medium text-yellow-800">Artificial Color</span>
                              </div>
                              <span className="text-xs text-yellow-600 font-bold">⚠ MODERATE</span>
                            </div>
                          </div>

                          <div className="bg-red-50 rounded-2xl p-4 border-l-4 border-red-500 animate-slide-in-left" style={{ animationDelay: '0.6s' }}>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                <span className="text-sm font-medium text-red-800">Parabens</span>
                              </div>
                              <span className="text-xs text-red-600 font-bold">✗ AVOID</span>
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="pb-8 space-y-3 mt-6">
                          <button className="w-full bg-safe text-white py-4 rounded-2xl font-semibold text-lg shadow-lg">
                            Find Safer Alternative
                          </button>
                          <button className="w-full border-2 border-gray-200 text-gray-700 py-3 rounded-2xl font-medium">
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
