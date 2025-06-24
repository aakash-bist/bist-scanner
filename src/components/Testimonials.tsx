
const Testimonials = () => {
  const testimonials = [
    {
      name: "Pooja Sharma",
      location: "Delhi",
      content: "I avoided over 20 harmful ingredients this month! This app has completely changed how I shop for my family.",
      avatar: "👩",
      rating: 5
    },
    {
      name: "Arvind Kumar", 
      location: "Bangalore",
      content: "Finally, an app that understands Indian products. Works perfectly with local brands that international apps miss.",
      avatar: "👨",
      rating: 5
    },
    {
      name: "Priya Patel",
      role: "New Mother",
      content: "As a new mom, this gives me peace of mind when choosing baby products. The Hindi support is really helpful too!",
      avatar: "👶",
      rating: 5
    }
  ];

  const stats = [
    { number: "4.8", label: "App Store Rating", suffix: "★" },
    { number: "50K+", label: "Downloads", suffix: "" },
    { number: "10K+", label: "Daily Scans", suffix: "" },
    { number: "95%", label: "User Satisfaction", suffix: "%" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
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
            Trusted by Indian Families
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of health-conscious Indians making safer choices every day
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
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
                <div className="text-sm text-gray-500">{testimonial.location || testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Preview */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg max-w-4xl mx-auto animate-on-scroll">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Quick Answers</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Does it work on Indian regional brands?</h4>
              <p className="text-gray-600 text-sm">✅ Yes, our OCR works even without barcodes.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Do I need internet connection?</h4>
              <p className="text-gray-600 text-sm">⚠️ Basic scans work offline, detailed analysis needs connection.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Does it support cultural preferences?</h4>
              <p className="text-gray-600 text-sm">✅ Yes, filters for Jain, Halal, and more.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Is it really free?</h4>
              <p className="text-gray-600 text-sm">✅ Yes, completely free with no hidden charges.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
