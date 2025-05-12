import React, { useState } from 'react';
import { Star, ThumbsUp, ThumbsDown } from 'lucide-react';

const KidsClubComparison: React.FC = () => {
  const [activeTab, setActiveTab] = useState('playroom');
  
  return (
    <div id="kids" className="py-16 px-4 bg-blue-50">
      <div className="container mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 relative">
          <div className="absolute top-0 right-0 bg-pink-400 text-white font-bold px-4 py-2 transform rotate-12 translate-x-2 -translate-y-2 z-10">
            KIDS PARADISE!
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-600 flex items-center justify-center">
            <Star className="mr-2" size={32} />
            Kids Club Smackdown
          </h2>
          
          <div className="flex flex-wrap border-b border-gray-200 mb-6">
            <button
              onClick={() => setActiveTab('playroom')}
              className={`${
                activeTab === 'playroom' 
                  ? 'border-blue-500 text-blue-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } flex-1 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm sm:text-base text-center`}
            >
              Playrooms
            </button>
            <button
              onClick={() => setActiveTab('pools')}
              className={`${
                activeTab === 'pools' 
                  ? 'border-blue-500 text-blue-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } flex-1 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm sm:text-base text-center`}
            >
              Pools & Water Features
            </button>
            <button
              onClick={() => setActiveTab('hours')}
              className={`${
                activeTab === 'hours' 
                  ? 'border-blue-500 text-blue-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } flex-1 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm sm:text-base text-center`}
            >
              Hours & Services
            </button>
          </div>
          
          {activeTab === 'playroom' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
              <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-300">
                <h3 className="text-xl font-bold text-blue-700 mb-4">Moon Palace Playroom</h3>
                <div className="w-full h-64 rounded-lg mb-6 overflow-hidden shadow-md">
                  <img 
                    src="https://itsalovelylife.com/wp-content/uploads/2019/02/DSC04760.jpg" 
                    alt="Moon Palace Playroom" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <ThumbsUp className="text-green-600 mr-2" size={20} />
                    <span>Massive indoor play structures</span>
                  </li>
                  <li className="flex items-center">
                    <ThumbsUp className="text-green-600 mr-2" size={20} />
                    <span>Multiple themed play zones</span>
                  </li>
                  <li className="flex items-center">
                    <ThumbsUp className="text-green-600 mr-2" size={20} />
                    <span>Arts & crafts stations</span>
                  </li>
                  <li className="flex items-center">
                    <ThumbsUp className="text-green-600 mr-2" size={20} />
                    <span>Video game area for older kids</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg border-2 border-red-300">
                <h3 className="text-xl font-bold text-red-700 mb-4">Planet Hollywood Stars Kids Club</h3>
                <div className="w-full h-64 rounded-lg mb-6 overflow-hidden shadow-md">
                  <img 
                    src="https://media-cdn.tripadvisor.com/media/photo-m/1280/1c/e3/fa/af/stars-kids-club.jpg" 
                    alt="Planet Hollywood Stars Kids Club" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <ThumbsUp className="text-green-600 mr-2" size={20} />
                    <span>Hollywood-themed activities</span>
                  </li>
                  <li className="flex items-center">
                    <ThumbsUp className="text-green-600 mr-2" size={20} />
                    <span>Acting workshops and performances</span>
                  </li>
                  <li className="flex items-center">
                    <ThumbsDown className="text-red-600 mr-2" size={20} />
                    <span>Smaller indoor play area</span>
                  </li>
                  <li className="flex items-center">
                    <ThumbsUp className="text-green-600 mr-2" size={20} />
                    <span>Costume dress-up area</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
          
          {activeTab === 'pools' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
              <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-300">
                <h3 className="text-xl font-bold text-blue-700 mb-4">Moon Palace Water Features</h3>
                <div className="w-full h-64 rounded-lg mb-6 overflow-hidden shadow-md">
                  <img 
                    src="https://d2azgexewbdl23.cloudfront.net/content/thg_Water_Park_03_gallery_grid_1620x990_9288ad0226.jpg" 
                    alt="Moon Palace Water Park" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <ThumbsUp className="text-green-600 mr-2" size={20} />
                    <span>Massive water park with multiple slides</span>
                  </li>
                  <li className="flex items-center">
                    <ThumbsUp className="text-green-600 mr-2" size={20} />
                    <span>FlowRider surf simulator (included)</span>
                  </li>
                  <li className="flex items-center">
                    <ThumbsUp className="text-green-600 mr-2" size={20} />
                    <span>10+ family-friendly pools</span>
                  </li>
                  <li className="flex items-center">
                    <ThumbsUp className="text-green-600 mr-2" size={20} />
                    <span>Dedicated kids' splash zones</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg border-2 border-red-300">
                <h3 className="text-xl font-bold text-red-700 mb-4">Planet Hollywood Water Features</h3>
                <div className="w-full h-64 rounded-lg mb-6 overflow-hidden shadow-md">
                  <img 
                    src="https://media-cdn.tripadvisor.com/media/photo-m/1280/1e/94/52/84/planet-hollywood-beach.jpg" 
                    alt="Planet Hollywood pool" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <ThumbsUp className="text-green-600 mr-2" size={20} />
                    <span>Pirate-themed Shipwreck Cove splash park</span>
                  </li>
                  <li className="flex items-center">
                    <ThumbsDown className="text-red-600 mr-2" size={20} />
                    <span>FlowRider costs extra ($)</span>
                  </li>
                  <li className="flex items-center">
                    <ThumbsUp className="text-green-600 mr-2" size={20} />
                    <span>Lazy river with swim-up bar</span>
                  </li>
                  <li className="flex items-center">
                    <ThumbsDown className="text-red-600 mr-2" size={20} />
                    <span>Fewer total pools than Moon Palace</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
          
          {activeTab === 'hours' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
              <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-300">
                <h3 className="text-xl font-bold text-blue-700 mb-4">Moon Palace Kids Club Hours</h3>
                <div className="bg-white p-5 rounded-lg shadow-sm mb-6">
                  <ul className="space-y-4">
                    <li className="flex justify-between items-center border-b pb-2">
                      <span className="font-semibold">Hours:</span>
                      <span className="text-green-600 font-bold">8:00 AM - 10:00 PM</span>
                    </li>
                    <li className="flex justify-between items-center border-b pb-2">
                      <span className="font-semibold">Evening Activities:</span>
                      <span className="text-green-600 font-bold">Yes (dinner included)</span>
                    </li>
                    <li className="flex justify-between items-center border-b pb-2">
                      <span className="font-semibold">Age Range:</span>
                      <span>4-12 years (teens lounge separate)</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="font-semibold">Extra Cost:</span>
                      <span className="text-green-600 font-bold">No (included)</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-green-100 p-4 rounded-lg border border-green-300">
                  <h4 className="font-bold text-green-800 mb-2">Parent Benefit:</h4>
                  <p>With 14 hours of daily operation and evening activities, parents can enjoy date nights while kids have fun in a supervised environment!</p>
                </div>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg border-2 border-red-300">
                <h3 className="text-xl font-bold text-red-700 mb-4">Planet Hollywood Kids Club Hours</h3>
                <div className="bg-white p-5 rounded-lg shadow-sm mb-6">
                  <ul className="space-y-4">
                    <li className="flex justify-between items-center border-b pb-2">
                      <span className="font-semibold">Hours:</span>
                      <span className="text-red-600 font-bold">10:00 AM - 5:00 PM only</span>
                    </li>
                    <li className="flex justify-between items-center border-b pb-2">
                      <span className="font-semibold">Evening Activities:</span>
                      <span className="text-red-600 font-bold">No</span>
                    </li>
                    <li className="flex justify-between items-center border-b pb-2">
                      <span className="font-semibold">Age Range:</span>
                      <span>4-12 years</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="font-semibold">Extra Cost:</span>
                      <span className="text-green-600 font-bold">No (included)</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-red-100 p-4 rounded-lg border border-red-300">
                  <h4 className="font-bold text-red-800 mb-2">Limitation:</h4>
                  <p>With limited hours and no evening activities, parents will need to arrange childcare or include children in evening plans.</p>
                </div>
              </div>
            </div>
          )}
          
          <div className="mt-8 p-5 bg-yellow-100 rounded-lg border border-yellow-300">
            <p className="font-bold text-center text-xl mb-2">Winner: Moon Palace 👑</p>
            <p className="text-center text-lg">The extended hours, larger playroom, and included FlowRider make Moon Palace the clear winner for families with kids!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KidsClubComparison;