
const AppShowcase = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            See It In Action
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get instant insights about any product with our intuitive scanning interface
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* App Screenshots */}
          <div className="relative animate-on-scroll">
            <div className="flex space-x-6 justify-center">
              {/* Phone 1 - Scanning */}
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-[2rem] p-2 shadow-2xl transform rotate-[-2deg] hover:rotate-0 transition-transform duration-300">
                  <div className="bg-white rounded-[1.5rem] overflow-hidden w-64 h-[500px]">
                    <div className="bg-gradient-to-b from-blue-50 to-white h-full p-6 flex flex-col">
                      <div className="text-center mb-8">
                        <h3 className="font-semibold text-gray-900 mb-2">Scan Product</h3>
                        <div className="w-full h-48 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                          <div className="text-6xl">📱</div>
                        </div>
                        <p className="text-sm text-gray-600">Position barcode in center</p>
                      </div>
                      <div className="space-y-3">
                        <div className="h-3 bg-gray-200 rounded-full w-3/4"></div>
                        <div className="h-3 bg-gray-200 rounded-full w-1/2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone 2 - Results */}
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-[2rem] p-2 shadow-2xl transform rotate-[2deg] hover:rotate-0 transition-transform duration-300">
                  <div className="bg-white rounded-[1.5rem] overflow-hidden w-64 h-[500px]">
                    <div className="bg-gradient-to-b from-white to-gray-50 h-full p-6 flex flex-col">
                      <div className="text-center mb-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-safe to-safe-dark rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                          <span className="text-white text-2xl font-bold">85</span>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-1">Good Choice!</h3>
                        <p className="text-sm text-gray-600">Mostly natural ingredients</p>
                      </div>
                      
                      <div className="space-y-4 flex-1">
                        <div className="bg-safe/10 rounded-lg p-3">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-2 h-2 bg-safe rounded-full"></div>
                            <span className="text-sm font-medium text-gray-900">Natural Vitamins</span>
                          </div>
                          <p className="text-xs text-gray-600">Essential nutrients from natural sources</p>
                        </div>
                        
                        <div className="bg-caution/10 rounded-lg p-3">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-2 h-2 bg-caution rounded-full"></div>
                            <span className="text-sm font-medium text-gray-900">Artificial Flavoring</span>
                          </div>
                          <p className="text-xs text-gray-600">Generally safe but consider natural alternatives</p>
                        </div>

                        <div className="bg-blue-50 rounded-lg p-3">
                          <p className="text-xs text-blue-600 font-medium">💡 Better Alternative Available</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-8 animate-on-scroll">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-safe/10 rounded-xl flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Analysis</h3>
                <p className="text-gray-600">Get comprehensive safety ratings in under 3 seconds</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-safe/10 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🔍</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Detailed Breakdown</h3>
                <p className="text-gray-600">Understand every ingredient and its potential impact on your health</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-safe/10 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Recommendations</h3>
                <p className="text-gray-600">Discover better alternatives tailored to your preferences</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-safe/10 rounded-xl flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Track Your Choices</h3>
                <p className="text-gray-600">Build a history of healthier product decisions over time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
