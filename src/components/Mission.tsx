
import { Heart, Users, Shield, Award, Target, Zap } from "lucide-react";

const Mission = () => {
  const values = [
    {
      icon: <Shield className="h-10 w-10 text-safe" />,
      title: "Transparency First",
      description: "Every ingredient analyzed with scientific backing. No hidden agendas, just honest assessments.",
      stat: "500+ Studies Referenced"
    },
    {
      icon: <Heart className="h-10 w-10 text-red-500" />,
      title: "Health Over Profit",
      description: "Zero brand partnerships or paid promotions. Our only loyalty is to your health and safety.",
      stat: "100% Independent"
    },
    {
      icon: <Users className="h-10 w-10 text-blue-500" />,
      title: "Cultural Intelligence",
      description: "Built by Indians, for Indians. Understanding dietary restrictions, regional preferences, and family needs.",
      stat: "15+ Cultural Filters"
    },
    {
      icon: <Award className="h-10 w-10 text-purple-500" />,
      title: "Scientific Excellence",
      description: "Every rating backed by peer-reviewed research, regulatory data, and expert nutritionist insights.",
      stat: "95% Accuracy Rate"
    }
  ];

  const impactMetrics = [
    { number: "50K+", label: "Families Protected", description: "Making safer choices daily" },
    { number: "500K+", label: "Harmful Products Avoided", description: "Through our warnings" },
    { number: "1M+", label: "Scans Completed", description: "Products analyzed for safety" },
    { number: "95%", label: "Health Improvements", description: "Reported by regular users" }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-safe/5 via-blue-50/30 to-purple-50/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-20 animate-on-scroll">
          <div className="inline-flex items-center space-x-2 bg-safe/10 rounded-full px-6 py-3 mb-6">
            <Target className="h-4 w-4 text-safe" />
            <span className="text-safe font-semibold">Our Mission</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Democratizing
            <span className="block bg-gradient-to-r from-safe to-blue-600 bg-clip-text text-transparent">
              Product Safety
            </span>
          </h2>
          <div className="text-xl md:text-2xl text-gray-700 leading-relaxed space-y-6">
            <p>
              <strong className="text-gray-900">Born from frustration.</strong> 
              {" "}We were tired of international apps that don't understand Indian products, ingredients, or cultural preferences.
            </p>
            <p>
              <strong className="text-gray-900">Built with purpose.</strong> 
              {" "}Every line of code is written to empower Indian families with the knowledge they need to make safer, healthier choices.
            </p>
          </div>
        </div>

        {/* Enhanced values grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-20">
          {values.map((value, index) => (
            <div 
              key={index}
              className="group animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105 border border-gray-100 h-full text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {value.description}
                </p>
                <div className="inline-flex items-center space-x-2 bg-safe/10 rounded-full px-4 py-2">
                  <Zap className="h-3 w-3 text-safe" />
                  <span className="text-safe text-xs font-bold">{value.stat}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact metrics */}
        <div className="animate-on-scroll mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Impact So Far</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every scan makes a difference. Here's how we're changing the way India shops for safer products.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-safe to-blue-600 bg-clip-text text-transparent mb-2">
                    {metric.number}
                  </div>
                  <div className="text-gray-900 font-semibold mb-1">{metric.label}</div>
                  <div className="text-xs text-gray-500">{metric.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced team commitment */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl max-w-5xl mx-auto animate-on-scroll border border-gray-100">
          <div className="text-center mb-8">
            <div className="text-6xl mb-6">🤝</div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our Commitment to You
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're not just building an app - we're building a movement towards safer, more informed consumption in India.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-safe/10 to-safe/5 rounded-2xl">
              <div className="text-2xl mb-4">💯</div>
              <div className="text-safe font-bold text-xl mb-2">Always Free</div>
              <p className="text-gray-600 text-sm">Core features will never require payment. Health information should be accessible to all.</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-100/50 to-blue-50/30 rounded-2xl">
              <div className="text-2xl mb-4">🚫</div>
              <div className="text-blue-600 font-bold text-xl mb-2">Always Ad-Free</div>
              <p className="text-gray-600 text-sm">No advertisements, no distractions. Just pure, unbiased product safety information.</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-100/50 to-purple-50/30 rounded-2xl">
              <div className="text-2xl mb-4">🔬</div>
              <div className="text-purple-600 font-bold text-xl mb-2">Always Independent</div>
              <p className="text-gray-600 text-sm">Zero brand partnerships. Our algorithms serve your health, not corporate interests.</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-safe/10 to-blue-50 rounded-full px-6 py-3">
              <Heart className="h-4 w-4 text-safe" />
              <span className="text-gray-700 font-medium">Made with ❤️ in India, for India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
