
import { Star, Quote, TrendingUp, Users, MapPin, Heart } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Delhi",
      role: "Working Mother",
      content: "Finally found an app that understands Indian products! Saved me from buying 15+ harmful items this month. The Hindi support is a game-changer for my mother-in-law.",
      avatar: "👩‍💼",
      rating: 5,
      verified: true,
      productsSaved: "23 products avoided",
      scanCount: "150+ scans"
    },
    {
      name: "Dr. Arvind Kumar", 
      location: "Bangalore",
      role: "Pediatrician",
      content: "I recommend this to all my patients' parents. It's more accurate on Indian brands than international apps. The cultural filters for Jain and Halal are brilliant.",
      avatar: "👨‍⚕️",
      rating: 5,
      verified: true,
      productsSaved: "Professional endorsement",
      scanCount: "500+ patients helped"
    },
    {
      name: "Meera Patel",
      location: "Mumbai", 
      role: "Fitness Enthusiast",
      content: "Love how it scans supplements without barcodes! Found so many cleaner alternatives on Nykaa and Amazon. My skin has never looked better since switching products.",
      avatar: "💪",
      rating: 5,
      verified: true,
      productsSaved: "40+ safer swaps",
      scanCount: "200+ products"
    },
    {
      name: "Rajesh Gupta",
      location: "Pune",
      role: "Tech Professional", 
      content: "The OCR technology is incredible - works on regional brands that even Google Lens struggles with. Perfect for my family's dietary requirements.",
      avatar: "👨‍💻",
      rating: 5,
      verified: true,
      productsSaved: "Family-approved",
      scanCount: "300+ scans"
    }
  ];

  const stats = [
    { number: "4.8", label: "App Store Rating", suffix: "★", description: "Highest rated scanner", icon: "⭐" },
    { number: "50K+", label: "Active Users", suffix: "", description: "Growing 25% monthly", icon: "👥" },
    { number: "1M+", label: "Daily Scans", suffix: "", description: "Products analyzed", icon: "📱" },
    { number: "95%", label: "Accuracy Rate", suffix: "%", description: "On Indian products", icon: "🎯" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Enhanced stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 animate-on-scroll">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-safe to-blue-600 bg-clip-text text-transparent mb-2">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-gray-900 font-semibold mb-1 text-sm">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center space-x-2 bg-safe/10 rounded-full px-6 py-3 mb-6">
            <Heart className="h-4 w-4 text-safe" />
            <span className="text-safe font-semibold">User Love</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Families
            <span className="block bg-gradient-to-r from-safe to-blue-600 bg-clip-text text-transparent">
              Across India
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of health-conscious Indians making safer choices every day with our AI-powered insights.
          </p>
        </div>

        {/* Enhanced testimonials */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105 border border-gray-100 h-full relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-safe/10 to-transparent rounded-bl-3xl"></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                          {testimonial.verified && (
                            <div className="w-5 h-5 bg-safe rounded-full flex items-center justify-center">
                              <span className="text-white text-xs">✓</span>
                            </div>
                          )}
                        </div>
                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                        <div className="flex items-center space-x-1 text-xs text-gray-500">
                          <MapPin className="h-3 w-3" />
                          <span>{testimonial.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="flex space-x-1 mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <div className="text-xs text-safe font-semibold">{testimonial.scanCount}</div>
                    </div>
                  </div>
                  
                  {/* Quote */}
                  <div className="relative mb-6">
                    <Quote className="absolute -top-2 -left-2 h-8 w-8 text-safe/20" />
                    <blockquote className="text-gray-700 leading-relaxed italic pl-6">
                      "{testimonial.content}"
                    </blockquote>
                  </div>
                  
                  {/* Impact metrics */}
                  <div className="bg-safe/5 rounded-2xl p-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-safe rounded-full"></div>
                        <span className="text-gray-600">{testimonial.productsSaved}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-xs text-gray-500">
                        <TrendingUp className="h-3 w-3" />
                        <span>Verified Impact</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
