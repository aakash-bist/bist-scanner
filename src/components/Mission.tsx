
import { Heart, Users, Shield, Award } from "lucide-react";

const Mission = () => {
  const values = [
    {
      icon: <Shield className="h-8 w-8 text-safe" />,
      title: "Transparency First",
      description: "We believe everyone deserves to know what's in their products"
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Health Over Profit",
      description: "No brand partnerships or paid promotions - just honest assessments"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Accessible Knowledge",
      description: "Complex science made simple for everyday decisions"
    },
    {
      icon: <Award className="h-8 w-8 text-caution" />,
      title: "Evidence-Based",
      description: "Every rating backed by peer-reviewed research and expert analysis"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-safe/5 to-blue-50/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Our Mission
          </h2>
          <div className="text-xl md:text-2xl text-gray-700 leading-relaxed space-y-6">
            <p>
              <strong className="text-gray-900">Built by health-conscious developers.</strong> 
              {" "}We created Is-It-Safe because we were tired of not knowing what was really in the products we use every day.
            </p>
            <p>
              <strong className="text-gray-900">No brand influence. Just truth.</strong> 
              {" "}We're committed to providing unbiased, scientifically-backed information that helps you make informed decisions about your health and well-being.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
          {values.map((value, index) => (
            <div 
              key={index}
              className="text-center group animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-lg mb-6 group-hover:shadow-xl transition-all duration-300">
                {value.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Team commitment */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg max-w-4xl mx-auto animate-on-scroll">
          <div className="text-center">
            <div className="text-6xl mb-6">🤝</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Commitment to You
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-safe font-bold text-lg mb-2">Always Free</div>
                <p className="text-gray-600 text-sm">Core features will never require payment</p>
              </div>
              <div>
                <div className="text-safe font-bold text-lg mb-2">Always Ad-Free</div>
                <p className="text-gray-600 text-sm">No advertisements, ever</p>
              </div>
              <div>
                <div className="text-safe font-bold text-lg mb-2">Always Independent</div>
                <p className="text-gray-600 text-sm">No brand partnerships influencing our ratings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
