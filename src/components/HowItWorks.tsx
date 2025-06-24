
import { Smartphone, Search, Shield } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Smartphone className="h-12 w-12 text-safe" />,
      emoji: "📱",
      title: "Scan the Product",
      description: "Simply point your camera at any barcode on food or cosmetic products"
    },
    {
      icon: <Search className="h-12 w-12 text-caution" />,
      emoji: "🧪", 
      title: "See Safety Score",
      description: "Get an instant color-coded safety rating based on ingredient analysis"
    },
    {
      icon: <Shield className="h-12 w-12 text-safe" />,
      emoji: "🛡️",
      title: "Read Detailed Insights",
      description: "Understand ingredient risks and get personalized recommendations"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three simple steps to make informed decisions about the products you use
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="text-center group animate-on-scroll"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Step number */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-safe/10 rounded-full mb-6 group-hover:bg-safe/20 transition-colors duration-300">
                <span className="text-2xl font-bold text-safe">{index + 1}</span>
              </div>

              {/* Icon */}
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {step.emoji}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>

              {/* Connection line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 w-full h-0.5 bg-gray-200 transform translate-x-1/2 -translate-y-1/2 z-0">
                  <div className="w-8 h-8 bg-safe rounded-full absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 animate-on-scroll">
          <div className="inline-flex items-center space-x-2 bg-safe/10 rounded-full px-6 py-3">
            <div className="w-2 h-2 bg-safe rounded-full animate-pulse"></div>
            <span className="text-safe font-medium">Ready in seconds, trusted for life</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
