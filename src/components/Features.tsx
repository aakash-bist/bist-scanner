
import { Shield, Heart, Users, Award } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-safe" />,
      title: "Independent & Ad-Free",
      description: "No brand partnerships or paid promotions. Our ratings are based purely on scientific research and ingredient safety data.",
      highlight: "100% Unbiased"
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Ingredient Transparency", 
      description: "Detailed breakdown of every ingredient, its purpose, potential risks, and health implications explained in simple terms.",
      highlight: "Full Disclosure"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Better Alternatives",
      description: "Get personalized recommendations for safer products that match your needs, budget, and preferences.",
      highlight: "Smart Suggestions"
    },
    {
      icon: <Award className="h-8 w-8 text-caution" />,
      title: "Expert-Backed Research",
      description: "Our safety assessments are based on peer-reviewed studies and recommendations from health organizations worldwide.",
      highlight: "Science-Based"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Is-It-Safe?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to providing you with honest, accurate, and actionable insights about the products you use every day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group animate-on-scroll border border-gray-100"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-gray-50 rounded-xl group-hover:bg-safe/10 transition-colors duration-300">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <span className="px-3 py-1 bg-safe/10 text-safe text-sm font-medium rounded-full">
                      {feature.highlight}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-20 animate-on-scroll">
          <div className="bg-safe/5 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-safe mb-2">1M+</div>
                <div className="text-gray-600">Products Scanned</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-safe mb-2">50K+</div>
                <div className="text-gray-600">Daily Users</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-safe mb-2">99%</div>
                <div className="text-gray-600">Accuracy Rate</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-safe mb-2">0</div>
                <div className="text-gray-600">Ads Forever</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
