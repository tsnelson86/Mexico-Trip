import React, { useState } from 'react';
import { Star } from 'lucide-react';

const DiamondMembership: React.FC = () => {
  const [showDetails, setShowDetails] = useState(false);
  
  return (
    <div className="py-16 px-4">
      <div className="container mx-auto">
        <div className="bg-white/90 rounded-lg shadow-xl p-6 md:p-8 relative">
          <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-500 to-yellow-300 text-white font-bold px-4 py-2 transform rotate-12 translate-x-2 -translate-y-2 z-10 rounded-lg border-2 border-yellow-600">
            DIAMOND MEMBERSHIP!
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-600 flex items-center justify-center">
            <Star className="mr-2 text-yellow-500" size={32} />
            Special Perks at Moon Palace
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-300 col-span-2">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Diamond Membership Benefits</h3>
              <div className="bg-white p-5 rounded-lg mb-4 shadow-sm">
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <span className="text-yellow-500 font-bold mr-3 text-xl">💎</span>
                    <span className="font-semibold">$750 in resort credit per room</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-500 font-bold mr-3 text-xl">💎</span>
                    <span className="font-semibold">Use credit for spa services, excursions, and gifts</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-500 font-bold mr-3 text-xl">💎</span>
                    <span className="font-semibold">Private butler service</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-500 font-bold mr-3 text-xl">💎</span>
                    <span className="font-semibold">Private golf cart transportation around the resort</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-500 font-bold mr-3 text-xl">💎</span>
                    <span className="font-semibold">Priority reservations at restaurants and spa</span>
                  </li>
                </ul>
              </div>
              
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors w-full"
              >
                {showDetails ? 'Hide Details' : 'Show More Diamond Perks'}
              </button>
              
              {showDetails && (
                <div className="mt-4 bg-white p-5 rounded-lg animate-fadeIn shadow-sm">
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <span className="text-yellow-500 font-bold mr-3 text-xl">💎</span>
                      <span className="font-semibold">Upgraded premium liquor selection</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-yellow-500 font-bold mr-3 text-xl">💎</span>
                      <span className="font-semibold">Special beach and pool cabanas</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-yellow-500 font-bold mr-3 text-xl">💎</span>
                      <span className="font-semibold">24/7 room service with exclusive menu items</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-yellow-500 font-bold mr-3 text-xl">💎</span>
                      <span className="font-semibold">Private check-in and check-out experience</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            
            <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-lg border-2 border-yellow-300">
              <h3 className="text-xl font-bold text-yellow-700 mb-4 text-center">Diamond Experience</h3>
              <div className="w-full h-48 rounded-lg overflow-hidden bg-yellow-200 mb-4 shadow-md">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFFhFKUVLXCJjfqUla3t6bZ8gB8FQu56G_YQ&s"
                  alt="Luxury resort service"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center mt-2 font-semibold text-yellow-800">Travel in style with your private golf cart!</p>
              
              <div className="mt-6 bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-center mb-2 text-yellow-700">Member Testimonial</h4>
                <p className="italic text-center">"The Diamond membership made our trip unforgettable. Having the golf cart saved us hours of walking and the butler service was exceptional!"</p>
                <p className="text-right font-semibold mt-2">- Williams Family</p>
              </div>
            </div>
          </div>
          
          <div className="p-5 bg-yellow-100 rounded-lg border border-yellow-300 text-center">
            <p className="font-bold text-lg mb-2">Get the VIP Treatment!</p>
            <p className="text-lg">Diamond membership makes your vacation truly exceptional with exclusive perks and amenities. Planet Hollywood doesn't offer an equivalent membership program!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiamondMembership;