import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const FinalDecision: React.FC = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  
  const handleConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
  };
  
  return (
    <div id="decision" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg shadow-xl p-8 mb-8 text-white relative overflow-hidden">
          {showConfetti && (
            <div className="absolute inset-0 z-10 pointer-events-none">
              <div className="confetti-container">
                {[...Array(50)].map((_, i) => (
                  <div
                    key={i}
                    className="confetti"
                    style={{
                      left: `${Math.random() * 100}%`,
                      width: `${Math.random() * 10 + 5}px`,
                      height: `${Math.random() * 10 + 5}px`,
                      backgroundColor: ['#FCD34D', '#EF4444', '#3B82F6', '#10B981', '#8B5CF6'][
                        Math.floor(Math.random() * 5)
                      ],
                      animationDelay: `${Math.random() * 5}s`,
                    }}
                  ></div>
                ))}
              </div>
            </div>
          )}
          
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">And The Winner Is...</h2>
          
          <div className="bg-white text-gray-800 p-6 md:p-8 rounded-lg mb-8 transform transition-transform hover:scale-105 duration-300">
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mb-6">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="h-16 w-16 mr-4 bg-yellow-300 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🏆</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-blue-600">MOON PALACE GRAND!</h3>
              </div>
              
              <button 
                onClick={handleConfetti}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg transition-colors flex items-center"
              >
                Celebrate! <ArrowRight className="ml-2" size={20} />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-bold text-blue-700 mb-3">Why Moon Palace Wins:</h4>
                <div className="space-y-3">
                  <p className="flex items-center">
                    <span className="text-green-600 font-bold mr-3 text-xl">✓</span>
                    <span className="font-semibold">Longer kids club hours for more parent alone time</span>
                  </p>
                  <p className="flex items-center">
                    <span className="text-green-600 font-bold mr-3 text-xl">✓</span>
                    <span className="font-semibold">More restaurant options with easier access</span>
                  </p>
                  <p className="flex items-center">
                    <span className="text-green-600 font-bold mr-3 text-xl">✓</span>
                    <span className="font-semibold">Better variety of included activities without extra fees</span>
                  </p>
                  <p className="flex items-center">
                    <span className="text-green-600 font-bold mr-3 text-xl">✓</span>
                    <span className="font-semibold">Superior resort amenities (pools, water park, bowling)</span>
                  </p>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-red-700 mb-3">Planet Hollywood Strengths:</h4>
                <div className="space-y-3">
                  <p className="flex items-center">
                    <span className="text-green-600 font-bold mr-3 text-xl">✓</span>
                    <span className="font-semibold">Lower price point (savings of $3,964 total)</span>
                  </p>
                  <p className="flex items-center">
                    <span className="text-green-600 font-bold mr-3 text-xl">✓</span>
                    <span className="font-semibold">Unique features like on-site movie theater</span>
                  </p>
                  <p className="flex items-center">
                    <span className="text-green-600 font-bold mr-3 text-xl">✓</span>
                    <span className="font-semibold">Guy Fieri's burger restaurant</span>
                  </p>
                  <p className="flex items-center">
                    <span className="text-green-600 font-bold mr-3 text-xl">✓</span>
                    <span className="font-semibold">Celebrity-themed atmosphere</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-center text-xl mb-8">While Planet Hollywood is slightly less expensive, the extras at Moon Palace make it worth the splurge for our once-a-year vacation!</p>
          
          <div className="flex justify-center">
            <button 
              onClick={handleConfetti}
              className="bg-yellow-400 hover:bg-yellow-300 text-blue-800 font-bold py-4 px-10 rounded-full text-2xl inline-block transform hover:scale-105 transition-transform animate-bounce"
            >
              LET'S GO TO MOON PALACE! 🏝️
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalDecision;