
import { Button } from "@/components/ui/button";
import { Smartphone, Download } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-safe to-safe-dark text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-on-scroll">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Start Scanning 
            <span className="block text-safe-light">Smarter Today</span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Join millions of people making informed decisions about their health. 
            <span className="block mt-2 font-semibold">Your safety is worth more than marketing promises.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg"
              className="bg-white text-safe hover:bg-gray-100 px-10 py-6 text-xl font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
            >
              <Download className="mr-3 h-6 w-6" />
              Download Now
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-6 text-xl font-semibold rounded-2xl backdrop-blur-sm transition-all duration-200"
            >
              <Smartphone className="mr-3 h-6 w-6" />
              Try Demo
            </Button>
          </div>

          {/* App store badges */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4">
              <span className="text-2xl">📱</span>
              <div className="text-left">
                <div className="text-sm opacity-80">Download on the</div>
                <div className="font-bold">App Store</div>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4">
              <span className="text-2xl">🤖</span>
              <div className="text-left">
                <div className="text-sm opacity-80">Get it on</div>
                <div className="font-bold">Google Play</div>
              </div>
            </div>
          </div>

          {/* Final stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold mb-2">1M+</div>
              <div className="text-sm opacity-80">Products Analyzed</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">4.9★</div>
              <div className="text-sm opacity-80">User Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-sm opacity-80">Ad-Free</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" fill="none" className="w-full h-auto">
          <path d="M0,60 C200,20 400,100 600,60 C800,20 1000,100 1200,60 L1200,120 L0,120 Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default FinalCTA;
