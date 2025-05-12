import React, { useState } from 'react';
import { Sun, ArrowRight } from 'lucide-react';

interface Activity {
  name: string;
  moonPalace: {
    available: boolean;
    included: boolean;
    description: string;
    imageUrl: string;
  };
  planetHollywood: {
    available: boolean;
    included: boolean;
    description: string;
    imageUrl: string;
  };
}

const activities: Activity[] = [
  {
    name: "FlowRider",
    moonPalace: {
      available: true,
      included: true,
      description: "Included in your stay! Unlimited access to the surf simulator for all ages.",
      imageUrl: "https://thegrand.moonpalace.com/assets/img/gallery/activities/flowrider/flowrider-01.jpg"
    },
    planetHollywood: {
      available: true,
      included: false,
      description: "Available for an additional fee of $25 per person per use.",
      imageUrl: "https://www.planethollywoodhotels.com/resorts/cancun/assets/img/gallery/activities/flowrider-01.jpg"
    }
  },
  {
    name: "Water Parks & Pools",
    moonPalace: {
      available: true,
      included: true,
      description: "10+ swimming pools including massive water park with multiple slides and lazy river.",
      imageUrl: "https://thegrand.moonpalace.com/assets/img/gallery/pools/main-pool-01.jpg"
    },
    planetHollywood: {
      available: true,
      included: true,
      description: "Smaller water park with Shipwreck Cove splash zone and lazy river with swim-up bar.",
      imageUrl: "https://www.planethollywoodhotels.com/resorts/cancun/assets/img/gallery/pools/shipwreck-cove-01.jpg"
    }
  },
  {
    name: "Bowling Alley",
    moonPalace: {
      available: true,
      included: true,
      description: "Modern six-lane bowling alley included in your stay!",
      imageUrl: "https://thegrand.moonpalace.com/assets/img/gallery/activities/bowling/bowling-01.jpg"
    },
    planetHollywood: {
      available: false,
      included: false,
      description: "Not available at this resort.",
      imageUrl: ""
    }
  },
  {
    name: "Arcade/Game Room",
    moonPalace: {
      available: true,
      included: true,
      description: "Wired Lounge features the latest video games and arcade classics.",
      imageUrl: "https://thegrand.moonpalace.com/assets/img/gallery/activities/wired-lounge/wired-01.jpg"
    },
    planetHollywood: {
      available: true,
      included: false,
      description: "Small arcade available with game credits for additional fee.",
      imageUrl: "https://www.planethollywoodhotels.com/resorts/cancun/assets/img/gallery/activities/arcade-01.jpg"
    }
  },
  {
    name: "Indoor Trampoline",
    moonPalace: {
      available: false,
      included: false,
      description: "Not available at this resort.",
      imageUrl: ""
    },
    planetHollywood: {
      available: true,
      included: true,
      description: "Indoor trampoline park for kids and teens.",
      imageUrl: "https://www.planethollywoodhotels.com/resorts/cancun/assets/img/gallery/activities/trampoline-01.jpg"
    }
  },
  {
    name: "Movie Theater",
    moonPalace: {
      available: false,
      included: false,
      description: "Not available at this resort.",
      imageUrl: ""
    },
    planetHollywood: {
      available: true,
      included: true,
      description: "On-site movie theater showing recent releases.",
      imageUrl: "https://www.planethollywoodhotels.com/resorts/cancun/assets/img/gallery/activities/theater-01.jpg"
    }
  },
  {
    name: "Golf Course",
    moonPalace: {
      available: true,
      included: false,
      description: "Jack Nicklaus Signature golf course (additional fee, but discounted for guests).",
      imageUrl: "https://thegrand.moonpalace.com/assets/img/gallery/golf/golf-course-01.jpg"
    },
    planetHollywood: {
      available: false,
      included: false,
      description: "Not available at this resort.",
      imageUrl: ""
    }
  }
];

const ActivitiesComparison: React.FC = () => {
  const [selectedActivity, setSelectedActivity] = useState<string>("FlowRider");
  
  const activity = activities.find(a => a.name === selectedActivity);
  
  return (
    <div id="activities" className="py-16 px-4 bg-blue-50">
      <div className="container mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 relative">
          <div className="absolute top-0 right-0 bg-blue-400 text-white font-bold px-4 py-2 transform rotate-12 translate-x-2 -translate-y-2 z-10">
            FUN FACTOR!
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-600 flex items-center justify-center">
            <Sun className="mr-2" size={32} />
            Activities & Amenities
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 mb-8">
            {activities.map((a) => (
              <button
                key={a.name}
                onClick={() => setSelectedActivity(a.name)}
                className={`px-3 py-2 text-sm md:text-base rounded-lg transition-colors ${
                  selectedActivity === a.name
                    ? 'bg-blue-600 text-white font-bold'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`}
              >
                {a.name}
              </button>
            ))}
          </div>
          
          {activity && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 animate-fadeIn">
              <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-300">
                <h3 className="text-xl font-bold text-blue-700 mb-4">Moon Palace: {activity.name}</h3>
                
                {activity.moonPalace.available ? (
                  <>
                    <div className="w-full h-56 rounded-lg mb-6 overflow-hidden shadow-md">
                      {activity.moonPalace.imageUrl && (
                        <img 
                          src={activity.moonPalace.imageUrl} 
                          alt={`Moon Palace ${activity.name}`} 
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                        activity.moonPalace.included ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {activity.moonPalace.included ? 'Included' : 'Extra Cost'}
                      </span>
                    </div>
                    
                    <p>{activity.moonPalace.description}</p>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center h-64">
                    <p className="text-lg font-semibold text-gray-500">Not Available</p>
                  </div>
                )}
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg border-2 border-red-300">
                <h3 className="text-xl font-bold text-red-700 mb-4">Planet Hollywood: {activity.name}</h3>
                
                {activity.planetHollywood.available ? (
                  <>
                    <div className="w-full h-56 rounded-lg mb-6 overflow-hidden shadow-md">
                      {activity.planetHollywood.imageUrl && (
                        <img 
                          src={activity.planetHollywood.imageUrl} 
                          alt={`Planet Hollywood ${activity.name}`} 
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                        activity.planetHollywood.included ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {activity.planetHollywood.included ? 'Included' : 'Extra Cost'}
                      </span>
                    </div>
                    
                    <p>{activity.planetHollywood.description}</p>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center h-64">
                    <p className="text-lg font-semibold text-gray-500">Not Available</p>
                  </div>
                )}
              </div>
            </div>
          )}
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-xl font-bold text-blue-700 mb-4">Activities Summary</h3>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Activity</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-blue-500 uppercase tracking-wider">Moon Palace</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-red-500 uppercase tracking-wider">Planet Hollywood</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Winner</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {activities.map((activity) => (
                    <tr key={activity.name} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{activity.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                        {activity.moonPalace.available ? (
                          <span className={activity.moonPalace.included ? 'text-green-600 font-bold' : 'text-yellow-600'}>
                            {activity.moonPalace.included ? 'Included ✓' : 'Extra Cost $'}
                          </span>
                        ) : (
                          <span className="text-red-600">✗</span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                        {activity.planetHollywood.available ? (
                          <span className={activity.planetHollywood.included ? 'text-green-600 font-bold' : 'text-yellow-600'}>
                            {activity.planetHollywood.included ? 'Included ✓' : 'Extra Cost $'}
                          </span>
                        ) : (
                          <span className="text-red-600">✗</span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                        {!activity.moonPalace.available && activity.planetHollywood.available ? (
                          <span className="text-red-600 font-bold">Planet Hollywood</span>
                        ) : !activity.planetHollywood.available && activity.moonPalace.available ? (
                          <span className="text-blue-600 font-bold">Moon Palace</span>
                        ) : activity.moonPalace.included && !activity.planetHollywood.included ? (
                          <span className="text-blue-600 font-bold">Moon Palace</span>
                        ) : !activity.moonPalace.included && activity.planetHollywood.included ? (
                          <span className="text-red-600 font-bold">Planet Hollywood</span>
                        ) : (
                          <span className="text-gray-600">Tie</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="p-5 bg-yellow-100 rounded-lg border border-yellow-300">
            <p className="font-bold text-center text-xl mb-2">Edge: Moon Palace 👑</p>
            <p className="text-center text-lg">More inclusive activities without extra fees, including the popular FlowRider surf simulator!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesComparison;