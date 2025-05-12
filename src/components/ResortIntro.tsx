import React from 'react';

const ResortIntro: React.FC = () => {
  return (
    <div id="resorts" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="bg-white/90 rounded-lg shadow-xl p-6 md:p-8 border-4 border-blue-500">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-600">
            Resort Showdown: Who Will Win?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-300 flex flex-col items-center transform transition-transform hover:scale-105 duration-300">
              <div className="w-full h-64 rounded-lg mb-6 overflow-hidden shadow-md">
                <img 
                  src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Moon Palace Grand resort exterior" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-2">Moon Palace Grand</h3>
              <p className="text-center italic mb-4">"Luxury meets family fun!"</p>
              <ul className="space-y-2 w-full">
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Diamond-level members get exclusive perks</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Massive resort with multiple waterparks & pools</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>17 restaurants across the property</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-red-50 p-6 rounded-lg border-2 border-red-300 flex flex-col items-center transform transition-transform hover:scale-105 duration-300">
              <div className="w-full h-64 rounded-lg mb-6 overflow-hidden shadow-md">
                <img 
                  src="https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Planet Hollywood resort exterior" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-red-600 mb-2">Planet Hollywood</h3>
              <p className="text-center italic mb-4">"Vacation Like a Star™"</p>
              <ul className="space-y-2 w-full">
                <li className="flex items-center">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Hollywood-themed entertainment & decor</span>
                </li>
                <li className="flex items-center">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Slightly lower price point</span>
                </li>
                <li className="flex items-center">
                  <span className="text-red-600 mr-2">•</span>
                  <span>11 restaurants including Guy Fieri's burger joint</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResortIntro;