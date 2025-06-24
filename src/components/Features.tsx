
import { Shield, Heart, Users, Award, Search, Filter } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Search className="h-8 w-8 text-safe" />,
      title: "OCR Ingredient Scanning",
      description: "Advanced OCR technology reads ingredient lists even without barcodes - perfect for Indian regional brands.",
      highlight: "Works Offline"
    },
    {
      icon: <Filter className="h-8 w-8 text-blue-500" />,
      title: "Personalized Filters", 
      description: "Filter for gluten-free, paraben-free, sulfate-free, vegan, Jain-friendly, halal, and more based on your needs.",
      highlight: "Cultural Preferences"
    },
    {
      icon: <Shield className="h-8 w-8 text-caution" />,
      title: "Local Indian Product Support",
      description: "Comprehensive database of Indian brands and regional products that other international apps miss.",
      highlight: "Made in India"
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Safer Product Alternatives",
      description: "Get recommendations for cleaner alternatives available on Amazon, Flipkart, Nykaa with direct purchase links.",
      highlight: "Smart Shopping"
    },
    {
      icon: <Users className="h-8 w-8 text-purple-500" />,
      title: "Multilingual Support",
      description: "Available in Hindi and English, making it accessible to users across India regardless of language preference.",
      highlight: "हिंदी Support"
    },
    {
      icon: <Award className="h-8 w-8 text-green-500" />,
      title: "Personal Clean List",
      description: "Save your scan history and build your own curated list of trusted, safe products for quick reference.",
      highlight: "Your Safe List"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Key Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to make informed, safer choices for you and your family
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group animate-on-scroll border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-gray-50 rounded-xl group-hover:bg-safe/10 transition-colors duration-300">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <span className="px-2 py-1 bg-safe/10 text-safe text-xs font-medium rounded-full">
                      {feature.highlight}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
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
                <div className="text-3xl md:text-4xl font-bold text-safe mb-2">50K+</div>
                <div className="text-gray-600">Trusted Users</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-safe mb-2">1M+</div>
                <div className="text-gray-600">Products Scanned</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-safe mb-2">100%</div>
                <div className="text-gray-600">Free to Use</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-safe mb-2">2</div>
                <div className="text-gray-600">Languages</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
