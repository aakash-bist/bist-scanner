
import { Button } from "@/components/ui/button";
import { Smartphone, Download } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-safe to-safe-dark text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      </div>
      <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-on-scroll">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Make Smarter, Safer 
            <span className="block text-safe-light">Choices Every Day</span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Join 50,000+ Indians who trust Is This Safe? for healthier living.
            <span className="block mt-2 font-semibold">Effortlessly scan, understand, and choose better.</span>
          </p>

          {/* Key benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2">
              <span className="text-2xl">✅</span>
              <span className="font-medium">Free to use</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-2xl">✅</span>
              <span className="font-medium">Built for Indian users</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-2xl">✅</span>
              <span className="font-medium">Trusted by 50,000+ shoppers</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg"
              className="bg-white text-safe hover:bg-gray-100 px-10 py-6 text-xl font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
            >
              <span className="text-2xl mr-3">🍎</span>
              App Store
            </Button>
            <Button 
              size="lg"
              className="bg-white text-safe hover:bg-gray-100 px-10 py-6 text-xl font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
            >
              <span className="text-2xl mr-3">🤖</span>
              Play Store
            </Button>
          </div>

          {/* Final stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-8">
            <div>
              <div className="text-3xl font-bold mb-2">50K+</div>
              <div className="text-sm opacity-80">Happy Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">4.8★</div>
              <div className="text-sm opacity-80">User Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">Free</div>
              <div className="text-sm opacity-80">Forever</div>
            </div>
          </div>

          {/* Made in India badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
            <span className="text-2xl">❤️</span>
            <span className="font-medium">Made with love in India</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
