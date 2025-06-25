import { Zap, Shield, Heart, Users, Award, Search, Filter, Globe, Smartphone, Star } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Search className="h-10 w-10 text-safe" />,
      title: "Advanced OCR Scanning",
      description: "World's first OCR that reads ingredient lists in Hindi, Tamil, Bengali and 9+ Indian languages. No barcode? No problem.",
      highlight: "Multi-language",
      stats: "12 Languages",
      color: "from-safe/20 to-safe/5"
    },
    {
      icon: <Filter className="h-10 w-10 text-blue-600" />,
      title: "Cultural Intelligence", 
      description: "Smart filters for Jain, Halal, Kosher, regional preferences. The only app that understands Indian dietary needs.",
      highlight: "India-First",
      stats: "15+ Filters",
      color: "from-blue-200/50 to-blue-100/30"
    },
    {
      icon: <Shield className="h-10 w-10 text-purple-600" />,
      title: "Local Product Mastery",
      description: "Comprehensive database of 50,000+ Indian brands including regional products that international apps miss completely.",
      highlight: "Made in India",
      stats: "50K+ Products",
      color: "from-purple-200/50 to-purple-100/30"
    },
    {
      icon: <Heart className="h-10 w-10 text-red-500" />,
      title: "Smart Shopping Assistant",
      description: "Get alternatives with direct links to Amazon, Flipkart, Nykaa, BigBasket. Compare prices and find the safest option.",
      highlight: "Price Compare",
      stats: "4 Platforms",
      color: "from-red-200/50 to-red-100/30"
    },
    {
      icon: <Users className="h-10 w-10 text-orange-500" />,
      title: "AI Health Insights",
      description: "Personalized analysis based on your health profile, age, gender, and specific conditions. Smarter than generic warnings.",
      highlight: "Personalized",
      stats: "10M+ Insights",
      color: "from-orange-200/50 to-orange-100/30"
    },
    {
      icon: <Award className="h-10 w-10 text-green-600" />,
      title: "Your Personal Safe List",
      description: "Build your curated collection of trusted products. Family sharing, shopping lists, and smart recommendations.",
      highlight: "Family Sharing",
      stats: "Unlimited Saves",
      color: "from-green-200/50 to-green-100/30"
    }
  ];

  const comparisons = [
    { app: "Is This Safe", ocr: true, indian: true, hindi: true, cultural: true, ecommerce: true },
    { app: "Other Apps", ocr: false, indian: false, hindi: false, cultural: false, ecommerce: false }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-on-scroll">
          <div className="inline-flex items-center space-x-2 bg-safe/10 rounded-full px-6 py-3 mb-6">
            <Star className="h-4 w-4 text-safe fill-current" />
            <span className="text-safe font-semibold">Superior Features</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
            <span className="block">Experience the</span>
            <span className="block bg-gradient-to-r from-safe to-blue-600 bg-clip-text text-transparent">
              Future of Shopping
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Built from the ground up for Indian consumers. More features, better accuracy, deeper insights.
          </p>
        </div>

        {/* Enhanced features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`relative bg-gradient-to-br ${feature.color} rounded-3xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105 border border-white/50`}>
                <div className="flex items-start justify-between mb-6">
                  <div className="p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div className="text-right">
                    <div className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-bold rounded-full mb-2">
                      {feature.highlight}
                    </div>
                    <div className="text-sm font-bold text-gray-600">{feature.stats}</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced comparison section */}
        <div className="animate-on-scroll mb-20">
          <div className="bg-gradient-to-br from-white via-safe/5 to-blue-50/30 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-safe via-safe-dark to-blue-600 p-8">
              <h3 className="text-3xl font-bold text-white text-center mb-2">
                Why Choose Us?
              </h3>
              <p className="text-white/90 text-center text-lg">
                Compare features that matter for Indian families
              </p>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Our App */}
                <div className="bg-gradient-to-br from-safe/10 to-safe/5 rounded-2xl p-6 border-2 border-safe/20">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-4 h-4 bg-safe rounded-full"></div>
                    <h4 className="text-xl font-bold text-safe">Is This Safe</h4>
                    <span className="text-xs bg-safe text-white px-3 py-1 rounded-full font-bold">YOU</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 font-medium">OCR Scanning</span>
                      <div className="text-green-600 text-xl">✅</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 font-medium">Indian Products</span>
                      <div className="text-green-600 text-xl">✅</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 font-medium">Hindi Support</span>
                      <div className="text-green-600 text-xl">✅</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 font-medium">Cultural Filters</span>
                      <div className="text-green-600 text-xl">✅</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 font-medium">E-commerce Links</span>
                      <div className="text-green-600 text-xl">✅</div>
                    </div>
                  </div>
                </div>

                {/* Other Apps */}
                <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                    <h4 className="text-xl font-bold text-gray-700">Other Apps</h4>
                    <span className="text-xs bg-gray-400 text-white px-3 py-1 rounded-full font-bold">THEM</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 font-medium">OCR Scanning</span>
                      <div className="text-red-500 text-xl">❌</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 font-medium">Indian Products</span>
                      <div className="text-red-500 text-xl">❌</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 font-medium">Hindi Support</span>
                      <div className="text-red-500 text-xl">❌</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 font-medium">Cultural Filters</span>
                      <div className="text-red-500 text-xl">❌</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 font-medium">E-commerce Links</span>
                      <div className="text-red-500 text-xl">❌</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="text-center mt-8">
                <div className="bg-gradient-to-r from-safe/20 to-blue-500/20 rounded-2xl p-6">
                  <h5 className="text-xl font-bold text-gray-900 mb-2">
                    The Choice is Clear
                  </h5>
                  <p className="text-gray-600 mb-4">
                    Join thousands of Indian families making safer choices every day
                  </p>
                  <button className="bg-gradient-to-r from-safe to-safe-dark text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                    Start Scanning Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced stats section */}
        <div className="animate-on-scroll">
          <div className="bg-gradient-to-r from-safe/10 via-blue-50 to-purple-50 rounded-3xl p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-safe to-safe-dark bg-clip-text text-transparent mb-3">50K+</div>
                <div className="text-gray-600 font-medium">Trusted Users</div>
                <div className="text-xs text-safe mt-1">Growing Fast</div>
              </div>
              <div className="group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">1M+</div>
                <div className="text-gray-600 font-medium">Products Scanned</div>
                <div className="text-xs text-blue-600 mt-1">Daily Growth</div>
              </div>
              <div className="group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">95%</div>
                <div className="text-gray-600 font-medium">Accuracy Rate</div>
                <div className="text-xs text-purple-600 mt-1">Indian Products</div>
              </div>
              <div className="group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-3">12</div>
                <div className="text-gray-600 font-medium">Languages</div>
                <div className="text-xs text-orange-600 mt-1">Including Hindi</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
