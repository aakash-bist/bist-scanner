
import { Shield, Heart, Dumbbell, Leaf } from "lucide-react";

const WhoItsFor = () => {
  const userTypes = [
    {
      icon: <Heart className="h-12 w-12 text-pink-500" />,
      emoji: "👩‍⚕️",
      title: "Health-Conscious Women",
      subtitle: "Skincare & Beauty Products",
      benefit: "Identify harmful parabens, sulfates, and endocrine disruptors in cosmetics instantly",
      stats: "Scanned 500K+ beauty products",
      color: "from-pink-100 to-rose-50"
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-500" />,
      emoji: "👶",
      title: "Protective Parents",
      subtitle: "Baby & Family Products",
      benefit: "Ensure your children get only the safest, purest products with zero compromises",
      stats: "Trusted by 15K+ families",
      color: "from-blue-100 to-sky-50"
    },
    {
      icon: <Dumbbell className="h-12 w-12 text-green-600" />,
      emoji: "💪",
      title: "Fitness Enthusiasts",
      subtitle: "Supplements & Nutrition",
      benefit: "Verify supplement quality, avoid banned substances, and optimize your nutrition",
      stats: "10K+ supplements analyzed",
      color: "from-green-100 to-emerald-50"
    },
    {
      icon: <Leaf className="h-12 w-12 text-orange-500" />,
      emoji: "🌱",
      title: "Conscious Consumers",
      subtitle: "Dietary Restrictions",
      benefit: "Perfect for vegan, gluten-free, Jain, and halal lifestyle choices",
      stats: "15+ dietary filters",
      color: "from-orange-100 to-amber-50"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center space-x-2 bg-safe/10 rounded-full px-6 py-3 mb-6">
            <span className="w-2 h-2 bg-safe rounded-full animate-pulse"></span>
            <span className="text-safe font-semibold">Who It's For</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Built for Every
            <span className="block bg-gradient-to-r from-safe to-blue-600 bg-clip-text text-transparent mt-2">
              Indian Family
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From busy professionals to health-conscious families - our app adapts to your unique needs and lifestyle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {userTypes.map((user, index) => (
            <div 
              key={index}
              className="group animate-on-scroll"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`relative bg-gradient-to-br ${user.color} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105 border border-white/50 h-full`}>
                <div className="flex items-start space-x-6">
                  {/* Avatar and icon */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="text-5xl group-hover:scale-110 transition-transform duration-300 mb-4">
                        {user.emoji}
                      </div>
                      <div className="absolute -bottom-2 -right-2 p-2 bg-white rounded-xl shadow-lg">
                        {user.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {user.title}
                      </h3>
                      <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                        {user.subtitle}
                      </p>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {user.benefit}
                    </p>
                    
                    <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2">
                      <div className="w-2 h-2 bg-safe rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-gray-700">{user.stats}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* User testimonials preview */}
        <div className="animate-on-scroll">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-4xl mx-auto border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Loved Across India
              </h3>
              <div className="flex justify-center items-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-safe">4.8★</div>
                  <div className="text-sm text-gray-600">App Rating</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">50K+</div>
                  <div className="text-sm text-gray-600">Happy Users</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">28</div>
                  <div className="text-sm text-gray-600">Indian Cities</div>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-gray-50 rounded-2xl">
                <div className="text-2xl mb-2">👩‍💼</div>
                <div className="text-sm font-semibold text-gray-900">Working Professionals</div>
                <div className="text-xs text-gray-600 mt-1">"Quick scans during lunch break"</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-2xl">
                <div className="text-2xl mb-2">👨‍👩‍👧‍👦</div>
                <div className="text-sm font-semibold text-gray-900">Joint Families</div>
                <div className="text-xs text-gray-600 mt-1">"Safe for grandparents to kids"</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-2xl">
                <div className="text-2xl mb-2">🏃‍♀️</div>
                <div className="text-sm font-semibold text-gray-900">Health Enthusiasts</div>
                <div className="text-xs text-gray-600 mt-1">"Detailed ingredient analysis"</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
