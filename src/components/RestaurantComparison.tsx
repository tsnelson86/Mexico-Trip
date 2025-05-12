import React, { useState } from 'react';
import { UtensilsCrossed, CheckCircle, XCircle } from 'lucide-react';

interface Restaurant {
  name: string;
  cuisine: string;
  reservationRequired: boolean;
  dressCode: string;
  description: string;
}

const moonPalaceRestaurants: Restaurant[] = [
  { name: "Jade", cuisine: "Asian Fusion", reservationRequired: false, dressCode: "Casual Elegant", description: "Upscale Asian cuisine featuring sushi, teppanyaki, and Chinese specialties." },
  { name: "Cuzco", cuisine: "Peruvian", reservationRequired: true, dressCode: "Casual Elegant", description: "Sophisticated Peruvian dishes with unique flavors and fresh seafood." },
  { name: "Agra", cuisine: "Indian", reservationRequired: false, dressCode: "Casual", description: "Authentic Indian cuisine with traditional tandoori and curry dishes." },
  { name: "Il Giardino", cuisine: "Italian", reservationRequired: false, dressCode: "Casual Elegant", description: "Classic Italian fare with fresh pasta and wood-fired pizzas." },
  { name: "Los Tacos", cuisine: "Mexican", reservationRequired: false, dressCode: "Casual", description: "Casual Mexican taqueria with authentic street tacos and local flavors." }
];

const planetHollywoodRestaurants: Restaurant[] = [
  { name: "Guy's Burger Joint", cuisine: "American", reservationRequired: false, dressCode: "Casual", description: "Celebrity chef Guy Fieri's gourmet burgers and loaded fries." },
  { name: "Sunset Strip Steakhouse", cuisine: "Steakhouse", reservationRequired: true, dressCode: "Formal", description: "Fine dining steakhouse featuring premium cuts and seafood." },
  { name: "East Sushi & Teppanyaki", cuisine: "Japanese", reservationRequired: true, dressCode: "Casual Elegant", description: "Japanese cuisine with sushi bar and teppanyaki stations." },
  { name: "Overtime Sports Bar", cuisine: "Bar Food", reservationRequired: false, dressCode: "Casual", description: "Sports bar atmosphere with American favorites and beer selection." }
];

const RestaurantComparison: React.FC = () => {
  const [showAllMoonPalace, setShowAllMoonPalace] = useState(false);
  const [showAllPlanetHollywood, setShowAllPlanetHollywood] = useState(false);
  
  return (
    <div className="py-16 px-4">
      <div className="container mx-auto">
        <div className="bg-white/90 rounded-lg shadow-xl p-6 md:p-8 relative">
          <div className="absolute top-0 right-0 bg-orange-400 text-white font-bold px-4 py-2 transform rotate-12 translate-x-2 -translate-y-2 z-10">
            FOOD FIGHT!
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-600 flex items-center justify-center">
            <UtensilsCrossed className="mr-2" size={32} />
            Restaurant Rumble
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-300">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-blue-700">Moon Palace Dining</h3>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">17 Restaurants</span>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="w-full h-36 rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="https://www.voyagesaquaterra.com/the-grand-at-moon-palace-06-fr.jpg" 
                    alt="Moon Palace restaurant interior" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full h-36 rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="https://i.ytimg.com/vi/m4gi2yBE4eM/maxresdefault.jpg" 
                    alt="Moon Palace fine dining" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                {(showAllMoonPalace ? moonPalaceRestaurants : moonPalaceRestaurants.slice(0, 3)).map((restaurant, index) => (
                  <div key={index} className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="flex justify-between">
                      <h4 className="font-bold text-blue-800">{restaurant.name}</h4>
                      <span className="text-sm bg-blue-100 text-blue-800 px-2 py-0.5 rounded">{restaurant.cuisine}</span>
                    </div>
                    <p className="text-sm mt-1">{restaurant.description}</p>
                    <div className="flex items-center mt-2 text-sm">
                      <div className="flex items-center mr-4">
                        {restaurant.reservationRequired ? (
                          <XCircle className="text-red-500 mr-1" size={16} />
                        ) : (
                          <CheckCircle className="text-green-500 mr-1" size={16} />
                        )}
                        <span>{restaurant.reservationRequired ? "Reservation Required" : "No Reservation Needed"}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">{restaurant.dressCode}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {!showAllMoonPalace && (
                <button 
                  onClick={() => setShowAllMoonPalace(true)}
                  className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
                >
                  Show All 17 Restaurants
                </button>
              )}
              
              <ul className="mt-6 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="text-green-600 mr-2" size={18} />
                  <span>No reservations needed at most restaurants</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-600 mr-2" size={18} />
                  <span>Diverse cuisine options (Mexican, Italian, Asian, Brazilian, Indian)</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-600 mr-2" size={18} />
                  <span>24-hour room service included</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-red-50 p-6 rounded-lg border-2 border-red-300">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-red-700">Planet Hollywood Dining</h3>
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">11 Restaurants</span>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="w-full h-36 rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="https://marriott.cdn.tambourine.com/planet-hollywood/media/ph-east-sushi--7-622f7dc09c5b8.jpg" 
                    alt="Planet Hollywood sushi restaurant" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full h-36 rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="https://marriott.cdn.tambourine.com/planet-hollywood/media/overtime-sports-bar-1-622f7e543c2e9.jpg" 
                    alt="Planet Hollywood sports bar" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                {(showAllPlanetHollywood ? planetHollywoodRestaurants : planetHollywoodRestaurants.slice(0, 3)).map((restaurant, index) => (
                  <div key={index} className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="flex justify-between">
                      <h4 className="font-bold text-red-800">{restaurant.name}</h4>
                      <span className="text-sm bg-red-100 text-red-800 px-2 py-0.5 rounded">{restaurant.cuisine}</span>
                    </div>
                    <p className="text-sm mt-1">{restaurant.description}</p>
                    <div className="flex items-center mt-2 text-sm">
                      <div className="flex items-center mr-4">
                        {restaurant.reservationRequired ? (
                          <XCircle className="text-red-500 mr-1" size={16} />
                        ) : (
                          <CheckCircle className="text-green-500 mr-1" size={16} />
                        )}
                        <span>{restaurant.reservationRequired ? "Reservation Required" : "No Reservation Needed"}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">{restaurant.dressCode}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {!showAllPlanetHollywood && (
                <button 
                  onClick={() => setShowAllPlanetHollywood(true)}
                  className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors"
                >
                  Show All 11 Restaurants
                </button>
              )}
              
              <ul className="mt-6 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="text-green-600 mr-2" size={18} />
                  <span>Features Guy Fieri's burger joint</span>
                </li>
                <li className="flex items-center">
                  <XCircle className="text-red-600 mr-2" size={18} />
                  <span>Some restaurants require reservations</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-600 mr-2" size={18} />
                  <span>24-hour room service included</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-xl font-bold text-blue-700 mb-4">Side-by-Side Comparison</h3>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feature</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-500 uppercase tracking-wider">Moon Palace</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-red-500 uppercase tracking-wider">Planet Hollywood</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Number of Restaurants</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-bold text-blue-600">17</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">11</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Reservation Policy</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Most don't require reservations</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Several require reservations</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Cuisine Variety</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Extensive (Mexican, Italian, Asian, Indian, etc.)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Good (American, Italian, Asian, Steakhouse)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Celebrity Chefs</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">No</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-bold text-red-600">Yes (Guy Fieri)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="p-5 bg-yellow-100 rounded-lg border border-yellow-300">
            <p className="font-bold text-center text-xl mb-2">Slight Edge: Moon Palace 👑</p>
            <p className="text-center text-lg">More restaurant options and primarily no-reservation policy means more flexibility for your dining experience!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantComparison;