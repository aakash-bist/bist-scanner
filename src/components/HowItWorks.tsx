import { Camera, Brain, ShieldCheck, ArrowRight, Zap, Target, Smartphone } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Camera className="h-16 w-16 text-safe" />,
      emoji: "📱",
      title: "Snap & Scan",
      subtitle: "Point. Click. Done.",
      description: "Advanced OCR reads any product label - even handwritten regional brands without barcodes. Works in 12 Indian languages.",
      features: ["No barcode needed", "Works offline", "Instant recognition"],
      color: "from-safe/20 to-safe/5",
      flow: "SCAN"
    },
    {
      icon: <Brain className="h-16 w-16 text-blue-600" />,
      emoji: "🧠",
      title: "AI Analyzes",
      subtitle: "Reads & Detects Harmful",
      description: "Our AI processes 500+ Indian regulations and health data to detect harmful ingredients and give you personalized safety insights.",
      features: ["Toxin detection", "Allergy alerts", "Health impact analysis"],
      color: "from-blue-200/50 to-blue-100/30",
      flow: "AI ANALYZES"
    },
    {
      icon: <ShieldCheck className="h-16 w-16 text-purple-600" />,
      emoji: "🛡️",
      title: "Suggests Safer",
      subtitle: "Beyond just warnings.",
      description: "Get curated safer alternatives available on Amazon, Flipkart, Nykaa with instant purchase links and price comparisons.",
      features: ["Safer alternatives", "Price comparison", "Instant purchase links"],
      color: "from-purple-200/50 to-purple-100/30",
      flow: "SUGGESTS SAFER"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center space-x-2 bg-safe/10 rounded-full px-6 py-3 mb-6">
            <span className="w-2 h-2 bg-safe rounded-full animate-pulse"></span>
            <span className="text-safe font-semibold">How It Works</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            3 Steps to
            <span className="block bg-gradient-to-r from-safe to-blue-600 bg-clip-text text-transparent mt-2">
              Safer Choices
            </span>
          </h2>
          
          {/* Enhanced Scan Flow Highlight */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-gradient-to-r from-safe/10 via-blue-50 to-purple-50 rounded-2xl p-6 border border-safe/20">
              <div className="flex flex-wrap justify-center items-center gap-4 text-lg font-bold">
                <div className="flex items-center space-x-2 bg-safe/20 rounded-xl px-4 py-2">
                  <Smartphone className="h-5 w-5 text-safe" />
                  <span className="text-safe">SCAN</span>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400" />
                <div className="flex items-center space-x-2 bg-blue-100 rounded-xl px-4 py-2">
                  <Brain className="h-5 w-5 text-blue-600" />
                  <span className="text-blue-600">AI ANALYZES</span>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400" />
                <div className="flex items-center space-x-2 bg-purple-100 rounded-xl px-4 py-2">
                  <ShieldCheck className="h-5 w-5 text-purple-600" />
                  <span className="text-purple-600">SUGGESTS SAFER</span>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            More advanced than international apps. Built specifically for Indian products, preferences, and shopping habits.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative group animate-on-scroll"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/3 -right-4 w-8 h-0.5 bg-gradient-to-r from-safe/50 to-safe/20 z-10">
                    <ArrowRight className="absolute -right-2 -top-2 h-5 w-5 text-safe/60" />
                  </div>
                )}

                <div className={`relative bg-gradient-to-br ${step.color} rounded-3xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105 border border-white/50`}>
                  {/* Step number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-safe to-safe-dark rounded-2xl flex items-center justify-center shadow-xl">
                    <span className="text-white text-xl font-bold">{index + 1}</span>
                  </div>

                  {/* Icon */}
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300 text-center">
                    {step.emoji}
                  </div>

                  {/* Content */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-safe font-semibold mb-4">
                      {step.subtitle}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    {step.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-safe rounded-full"></div>
                        <span className="text-sm text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Stats */}
        <div className="text-center mt-16 animate-on-scroll">
          <div className="bg-gradient-to-r from-safe/10 via-blue-50 to-safe/10 rounded-3xl p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-2">⚡</div>
                <div className="text-2xl font-bold text-gray-900">3 Seconds</div>
                <div className="text-gray-600">Average scan time</div>
              </div>
              <div className="group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-2">🎯</div>
                <div className="text-2xl font-bold text-gray-900">95% Accuracy</div>
                <div className="text-gray-600">On Indian products</div>
              </div>
              <div className="group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-2">📱</div>
                <div className="text-2xl font-bold text-gray-900">Works Offline</div>
                <div className="text-gray-600">Basic scans available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
