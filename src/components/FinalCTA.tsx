
import { Button } from "@/components/ui/button";
import { Download, Star, Users, Shield, ArrowRight } from "lucide-react";

const FinalCTA = () => {
  const finalBenefits = [
    { icon: "🚀", text: "Launch in 30 seconds", subtext: "No registration needed" },
    { icon: "🇮🇳", text: "Built for Indians", subtext: "By Indians who understand" },
    { icon: "⭐", text: "4.8★ rated", subtext: "50,000+ happy users" },
    { icon: "🔒", text: "Privacy first", subtext: "Your data stays yours" }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-safe via-safe-dark to-green-800 text-white overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_50%)]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto animate-on-scroll">
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <Star className="h-4 w-4 text-yellow-300 fill-current" />
              <span className="text-sm font-semibold">4.8★ App Store</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <Users className="h-4 w-4 text-blue-300" />
              <span className="text-sm font-semibold">50K+ Users</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <Shield className="h-4 w-4 text-green-300" />
              <span className="text-sm font-semibold">1M+ Scans</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">
            Don't Just Shop.
            <span className="block bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent">
              Shop Smarter.
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto leading-relaxed">
            Join the revolution of informed shopping in India. 
            <span className="block mt-2 font-semibold text-yellow-200">
              Download now and make your first scan in under 30 seconds.
            </span>
          </p>

          {/* Key benefits grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
            {finalBenefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
                <div className="font-semibold mb-1">{benefit.text}</div>
                <div className="text-sm opacity-80">{benefit.subtext}</div>
              </div>
            ))}
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg"
              className="bg-white text-safe hover:bg-gray-100 px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 group"
            >
              <span className="text-3xl mr-4 group-hover:scale-110 transition-transform">🍎</span>
              <div className="text-left">
                <div>Download for iOS</div>
                <div className="text-xs opacity-70">Available on App Store</div>
              </div>
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 group"
            >
              <span className="text-3xl mr-4 group-hover:scale-110 transition-transform">🤖</span>
              <div className="text-left">
                <div>Get on Android</div>
                <div className="text-xs opacity-70">Available on Play Store</div>
              </div>
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </div>

          {/* Social proof */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto mb-12 border border-white/20">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">50K+</div>
                <div className="text-sm opacity-80">Indians already protected</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">500K+</div>
                <div className="text-sm opacity-80">Harmful products avoided</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">₹0</div>
                <div className="text-sm opacity-80">Cost to you, forever</div>
              </div>
            </div>
          </div>

          {/* Final message */}
          <div className="max-w-3xl mx-auto">
            <div className="text-lg opacity-90 mb-6">
              "The smartest shopping decision you'll make this year"
            </div>
            <div className="flex justify-center items-center space-x-4 text-sm opacity-80">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
                <span>No registration required</span>
              </div>
              <div>•</div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
                <span>Works offline</span>
              </div>
              <div>•</div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                <span>Free forever</span>
              </div>
            </div>
          </div>

          {/* Made in India badge */}
          <div className="mt-12">
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 border border-white/20">
              <span className="text-3xl">🇮🇳</span>
              <div className="text-left">
                <div className="font-bold">Proudly Made in India</div>
                <div className="text-sm opacity-80">For Indian families, by Indian developers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
