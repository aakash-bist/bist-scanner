
const WhoItsFor = () => {
  const userTypes = [
    {
      emoji: "👩",
      title: "Women avoiding harmful skincare chemicals",
      benefit: "Identify parabens, sulfates, and other toxic ingredients instantly"
    },
    {
      emoji: "👶",
      title: "Parents checking baby products and food",
      benefit: "Ensure your little ones get only the safest, purest products"
    },
    {
      emoji: "💪",
      title: "Gym-goers reviewing supplements",
      benefit: "Verify supplement quality and avoid banned substances"
    },
    {
      emoji: "🍃",
      title: "Vegans and allergy-sensitive users",
      benefit: "Filter for vegan, gluten-free, and allergen-free options"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Who It's For
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by health-conscious Indians across all walks of life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {userTypes.map((user, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group animate-on-scroll border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {user.emoji}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {user.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {user.benefit}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
