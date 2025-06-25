
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "Does it work on Indian regional brands without barcodes?",
      answer: "Yes! Our advanced OCR technology reads product labels in 12+ Indian languages, even handwritten text on local products. No barcode needed - just point and scan any ingredient list."
    },
    {
      question: "Is my personal data stored or shared?",
      answer: "No. We prioritize your privacy. Scans are processed locally when possible, and any data sent to our servers is immediately deleted after analysis. We never store personal information or share data with third parties."
    },
    {
      question: "How accurate is it compared to international apps?",
      answer: "95% accuracy on Indian products vs 60-70% for international apps. We're specifically trained on Indian food regulations, local ingredients, and cultural dietary preferences like Jain, Halal, and regional variations."
    },
    {
      question: "Can I use it offline?",
      answer: "Basic ingredient scanning works offline. For detailed health analysis, ingredient explanations, and safer alternatives, you'll need an internet connection to access our AI-powered insights."
    },
    {
      question: "Does it suggest where to buy safer alternatives?",
      answer: "Absolutely! We provide direct links to safer products on Amazon, Flipkart, Nykaa, and other Indian e-commerce platforms, complete with price comparisons and user ratings."
    },
    {
      question: "Is the app really free forever?",
      answer: "Yes! Core scanning features will always be free. We believe everyone deserves access to product safety information. We may introduce premium features in the future, but basic scanning stays free."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-flex items-center space-x-2 bg-safe/10 rounded-full px-6 py-3 mb-6">
              <span className="w-2 h-2 bg-safe rounded-full animate-pulse"></span>
              <span className="text-safe font-semibold">FAQ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Quick Answers to
              <span className="block bg-gradient-to-r from-safe to-blue-600 bg-clip-text text-transparent">
                Common Questions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about scanning Indian products safely
            </p>
          </div>

          <div className="space-y-4 animate-on-scroll">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openFAQ === index ? (
                      <Minus className="h-5 w-5 text-safe" />
                    ) : (
                      <Plus className="h-5 w-5 text-safe" />
                    )}
                  </div>
                </button>
                
                {openFAQ === index && (
                  <div className="px-8 pb-6 animate-fade-in">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-12 animate-on-scroll">
            <div className="bg-gradient-to-r from-safe/10 via-blue-50 to-safe/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Still have questions?
              </h3>
              <p className="text-gray-600 mb-6">
                Our team is here to help you make safer choices for your family.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-safe text-white px-8 py-3 rounded-xl font-semibold hover:bg-safe-dark transition-colors duration-300">
                  Contact Support
                </button>
                <button className="border-2 border-safe text-safe px-8 py-3 rounded-xl font-semibold hover:bg-safe hover:text-white transition-colors duration-300">
                  Join Community
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
