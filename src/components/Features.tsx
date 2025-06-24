
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
    { app: "Is This Safe", ocr: true, indian: true, hindi: true, cultural: true, offline: true, ecommerce: true },
    { app: "Yuka", ocr: false, indian: false, hindi: false, cultural: false, offline: false, ecommerce: false },
    { app: "Think Dirty", ocr: false, indian: false, hindi: false, cultural: false, offline: false, ecommerce: false }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-on-scroll">
          <div className="inline-flex items-center space-x-2 bg-safe/10 rounded-full px-6 py-3 mb-6">
            <Star className="h-4 w-4 text-safe fill-current" />
            <span className="text-safe font-semibold">Superior Features</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Why We're Better
            <span className="block bg-gradient-to-r from-safe to-blue-600 bg-clip-text text-transparent">
              Than Yuka
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

        {/* Comparison table */}
        <div className="animate-on-scroll mb-20">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-safe to-safe-dark p-6">
              <h3 className="text-2xl font-bold text-white text-center">
                Feature Comparison vs Competition
              </h3>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-gray-900">App</th>
                    <th className="px-4 py-4 text-center font-semibold text-gray-900">OCR Scanning</th>
                    <th className="px-4 py-4 text-center font-semibold text-gray-900">Indian Products</th>
                    <th className="px-4 py-4 text-center font-semibold text-gray-900">Hindi Support</th>
                    <th className="px-4 py-4 text-center font-semibold text-gray-900">Cultural Filters</th>
                    <th className="px-4 py-4 text-center font-semibold text-gray-900">Offline Mode</th>
                    <th className="px-4 py-4 text-center font-semibold text-gray-900">E-commerce Links</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((comp, index) => (
                    <tr key={index} className={index === 0 ? "bg-safe/5 border-l-4 border-safe" : "border-b border-gray-100"}>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          {index === 0 && <div className="w-3 h-3 bg-safe rounded-full"></div>}
                          <span className={`font-semibold ${index === 0 ? "text-safe" : "text-gray-900"}`}>
                            {comp.app}
                          </span>
                          {index === 0 && <span className="text-xs bg-safe text-white px-2 py-1 rounded-full">YOU</span>}
                        </div>
                      </td>
                      <td className="px-4 py-4 text-center">
                        {comp.ocr ? "✅" : "❌"}
                      </td>
                      <td className="px-4 py-4 text-center">
                        {comp.indian ? "✅" : "❌"}
                      </td>
                      <td className="px-4 py-4 text-center">
                        {comp.hindi ? "✅" : "❌"}
                      </td>
                      <td className="px-4 py-4 text-center">
                        {comp.cultural ? "✅" : "❌"}
                      </td>
                      <td className="px-4 py-4 text-center">
                        {comp.offline ? "✅" : "❌"}
                      </td>
                      <td className="px-4 py-4 text-center">
                        {comp.ecommerce ? "✅" : "❌"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
