
import { Star, Quote, TrendingUp, Users } from "lucide-react";

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
      productsSaved: "23 products avoided"
    },
    {
      name: "Dr. Arvind Kumar", 
      location: "Bangalore",
      role: "Pediatrician",
      content: "I recommend this to all my patients' parents. It's more accurate on Indian brands than international apps. The cultural filters for Jain and Halal are brilliant.",
      avatar: "👨‍⚕️",
      rating: 5,
      verified: true,
      productsSaved: "Professional endorsement"
    },
    {
      name: "Meera Patel",
      location: "Mumbai",
      role: "Fitness Enthusiast",
      content: "Love how it scans supplements without barcodes! Found so many cleaner alternatives on Nykaa and Amazon. My skin has never looked better since switching products.",
      avatar: "💪",
      rating: 5,
      verified: true,
      productsSaved: "40+ safer swaps"
    },
    {
      name: "Rajesh Gupta",
      location: "Pune",
      role: "Tech Professional",
      content: "The OCR technology is incredible - works on regional brands that even Google Lens struggles with. Perfect for my family's Jain dietary requirements.",
      avatar: "👨‍💻",
      rating: 5,
      verified: true,
      productsSaved: "Family-approved"
    }
  ];

  const stats = [
    { number: "4.8", label: "App Store Rating", suffix: "★", description: "Highest rated Indian scanner" },
    { number: "50K+", label: "Active Users", suffix: "", description: "Growing 25% monthly" },
    { number: "1M+", label: "Daily Scans", suffix: "", description: "Products analyzed daily" },
    { number: "95%", label: "User Satisfaction", suffix: "%", description: "Would recommend to friends" }
  ];

  const mediaMentions = [
    { outlet: "Economic Times", quote: "Revolutionary app for Indian consumers" },
    { outlet: "YourStory", quote: "The Yuka killer India needed" },
    { outlet: "Inc42", quote: "AI-powered health guardian" }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Enhanced stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 animate-on-scroll">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-safe to-blue-600 bg-clip-text text-transparent mb-2">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-gray-900 font-semibold mb-1">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-20 animate-on-scroll">
          <div className="inline-flex items-center space-x-2 bg-safe/10 rounded-full px-6 py-3 mb-6">
            <Users className="h-4 w-4 text-safe" />
            <span className="text-safe font-semibold">User Love</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
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
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
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
                        <div className="text-xs text-gray-500">{testimonial.location}</div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="flex space-x-1 mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <div className="text-xs text-safe font-semibold">{testimonial.productsSaved}</div>
                    </div>
                  </div>
                  
                  {/* Quote */}
                  <div className="relative mb-6">
                    <Quote className="absolute -top-2 -left-2 h-8 w-8 text-safe/20" />
                    <blockquote className="text-gray-700 leading-relaxed italic pl-6">
                      "{testimonial.content}"
                    </blockquote>
                  </div>
                  
                  {/* Engagement metrics */}
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="h-3 w-3" />
                      <span>Verified Purchase</span>
                    </div>
                    <div>•</div>
                    <div>2 days ago</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Media mentions */}
        <div className="animate-on-scroll mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Featured In</h3>
            <p className="text-gray-600">Leading publications recognize our impact</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {mediaMentions.map((mention, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
                <div className="font-bold text-gray-900 mb-2">{mention.outlet}</div>
                <div className="text-sm text-gray-600 italic">"{mention.quote}"</div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced FAQ Preview */}
        <div className="bg-gradient-to-r from-safe/5 via-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 shadow-lg max-w-5xl mx-auto animate-on-scroll">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Quick Answers</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-safe rounded-full mr-3"></span>
                  Works on Indian regional brands?
                </h4>
                <p className="text-gray-700 text-sm">✅ Yes! Our OCR reads labels in 12+ Indian languages, even without barcodes.</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Better than Yuka?
                </h4>
                <p className="text-gray-700 text-sm">✅ Absolutely! Built for Indian consumers with cultural preferences and local products.</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Need internet connection?
                </h4>
                <p className="text-gray-700 text-sm">⚡ Basic scans work offline. Deep analysis needs connection for latest data.</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Really free forever?
                </h4>
                <p className="text-gray-700 text-sm">✅ Yes! Core features will always be free. No hidden charges, no premium tiers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
