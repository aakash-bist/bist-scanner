
const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Nutrition Coach",
      content: "Is-It-Safe has revolutionized how I help my clients make informed choices. The ingredient analysis is incredibly detailed and easy to understand.",
      avatar: "👩‍⚕️",
      rating: 5
    },
    {
      name: "Michael Rodriguez", 
      role: "Parent of 3",
      content: "Finally, an app that helps me understand what I'm actually buying for my family. No more guessing - just clear, honest information.",
      avatar: "👨‍👧‍👦",
      rating: 5
    },
    {
      name: "Dr. Emily Watson",
      role: "Dermatologist",
      content: "I recommend Is-It-Safe to all my patients with sensitive skin. The cosmetic analysis feature is particularly impressive and scientifically sound.",
      avatar: "👩‍⚕️",
      rating: 5
    }
  ];

  const stats = [
    { number: "4.9", label: "App Store Rating", suffix: "★" },
    { number: "1M+", label: "Downloads", suffix: "" },
    { number: "50K+", label: "Daily Scans", suffix: "" },
    { number: "99%", label: "User Satisfaction", suffix: "%" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 animate-on-scroll">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-safe mb-2">
                {stat.number}{stat.suffix}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Health Professionals
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of users who've made smarter, safer choices with Is-It-Safe
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">{testimonial.avatar}</div>
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
              </div>
              
              <blockquote className="text-gray-600 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </blockquote>
              
              <div className="text-center">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 text-center animate-on-scroll">
          <p className="text-gray-500 mb-8">Featured in:</p>
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
            <div className="px-6 py-3 border border-gray-200 rounded-lg bg-white">TechCrunch</div>
            <div className="px-6 py-3 border border-gray-200 rounded-lg bg-white">Health.com</div>
            <div className="px-6 py-3 border border-gray-200 rounded-lg bg-white">Forbes</div>
            <div className="px-6 py-3 border border-gray-200 rounded-lg bg-white">Medical News</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
