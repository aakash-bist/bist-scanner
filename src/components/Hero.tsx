
import { Button } from "@/components/ui/button";
import { Shield, Smartphone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-green-50/30 to-blue-50/30">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-safe/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Logo/Brand */}
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="p-3 bg-safe rounded-2xl shadow-lg">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Is This Safe?</h1>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
            <span className="block">Scan.</span>
            <span className="block text-safe">Know.</span>
            <span className="block">Stay Safe.</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Know what's inside your food, skincare, or daily-use items — instantly.
            <span className="block mt-2 font-semibold text-gray-900">AI-powered. Made for India. Supports Hindi.</span>
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
            <div className="flex items-center space-x-2 bg-safe/10 rounded-full px-4 py-2">
              <span className="text-2xl">🤖</span>
              <span className="text-safe font-medium">AI-Powered</span>
            </div>
            <div className="flex items-center space-x-2 bg-orange-100 rounded-full px-4 py-2">
              <span className="text-2xl">🇮🇳</span>
              <span className="text-orange-600 font-medium">Made for India</span>
            </div>
            <div className="flex items-center space-x-2 bg-blue-100 rounded-full px-4 py-2">
              <span className="text-2xl">🗣️</span>
              <span className="text-blue-600 font-medium">Supports Hindi</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Button 
              size="lg" 
              className="bg-safe hover:bg-safe-dark text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center"
            >
              <span className="text-2xl mr-2">🍎</span>
              Download on App Store
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-gray-300 hover:border-safe text-gray-700 hover:text-safe px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-200 flex items-center"
            >
              <span className="text-2xl mr-2">🤖</span>
              Get it on Play Store
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-16 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-safe rounded-full"></div>
              <span>50,000+ Trusted Users</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-safe rounded-full"></div>
              <span>Indian Products Supported</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-safe rounded-full"></div>
              <span>Free to Use</span>
            </div>
          </div>
        </div>

        {/* Hero Image - Phone mockup */}
        <div className="mt-20 animate-slide-in-right">
          <div className="relative max-w-xs mx-auto">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-[2.5rem] p-2 shadow-2xl">
              <div className="bg-white rounded-[2rem] overflow-hidden">
                <div className="h-96 bg-gradient-to-b from-gray-50 to-white p-6 flex flex-col items-center justify-center">
                  <div className="w-full max-w-[200px] h-32 bg-gradient-to-br from-safe-light to-safe rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <div className="text-white text-4xl font-bold">85</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-gray-900 mb-2">Good Choice!</div>
                    <div className="text-sm text-gray-600">Mostly natural ingredients</div>
                    <div className="text-xs text-gray-500 mt-1">✅ Jain-friendly</div>
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
