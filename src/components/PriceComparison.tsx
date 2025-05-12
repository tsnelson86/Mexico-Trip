import React, { useState } from 'react';
import { DollarSign, Calculator } from 'lucide-react';

type Family = {
  name: string;
  moonPalacePrice: number;
  planetHollywoodPrice: number;
};

const families: Family[] = [
  { name: "Nelson", moonPalacePrice: 10048, planetHollywoodPrice: 7060 },
  { name: "Schaefer", moonPalacePrice: 7548, planetHollywoodPrice: 7060 },
  { name: "Carson", moonPalacePrice: 5157, planetHollywoodPrice: 4659 },
  { name: "Nammari", moonPalacePrice: 2335, planetHollywoodPrice: 2329 }
];

const PriceComparison: React.FC = () => {
  const [activeFamily, setActiveFamily] = useState<string | null>(null);
  
  const getSavings = (moonPrice: number, planetPrice: number) => {
    return moonPrice - planetPrice;
  };
  
  return (
    <div id="pricing" className="py-16 px-4 bg-blue-50">
      <div className="container mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-yellow-400 text-black font-bold px-4 py-2 transform rotate-12 translate-x-2 -translate-y-2 z-10">
            PRICE CHECK!
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-600 flex items-center justify-center">
            <DollarSign className="mr-2" size={32} />
            The Bottom Line
          </h2>
          
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full divide-y divide-blue-200">
              <thead className="bg-blue-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Resort</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Trip Dates</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Airline</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Flights</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Total Cost</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-blue-100">
                <tr className="hover:bg-blue-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-blue-700">Moon Palace Grand</td>
                  <td className="px-6 py-4 whitespace-nowrap">Aug 2-9, 2025</td>
                  <td className="px-6 py-4 whitespace-nowrap">United</td>
                  <td className="px-6 py-4 whitespace-nowrap">9:40am / 5:30pm</td>
                  <td className="px-6 py-4 whitespace-nowrap font-bold">$25,144</td>
                </tr>
                <tr className="hover:bg-red-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-red-700">Planet Hollywood (Costco)</td>
                  <td className="px-6 py-4 whitespace-nowrap">Aug 2-9, 2025</td>
                  <td className="px-6 py-4 whitespace-nowrap">United</td>
                  <td className="px-6 py-4 whitespace-nowrap">11:45am / 7:10pm</td>
                  <td className="px-6 py-4 whitespace-nowrap font-bold">$21,180</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-blue-600 flex items-center">
              <Calculator className="mr-2" size={24} />
              Family Savings Calculator
            </h3>
            <div className="flex flex-wrap gap-4 mb-6">
              {families.map((family) => (
                <button
                  key={family.name}
                  onClick={() => setActiveFamily(family.name)}
                  className={`px-4 py-2 rounded-full text-sm md:text-base font-semibold transition-colors ${
                    activeFamily === family.name
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                  }`}
                >
                  {family.name} Family
                </button>
              ))}
            </div>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
              {families.map((family) => (
                <div 
                  key={family.name}
                  className={`p-4 border rounded-lg text-center transition-all duration-300 transform ${
                    activeFamily === family.name
                      ? 'border-blue-500 bg-blue-50 scale-105 shadow-lg'
                      : 'border-blue-100 bg-blue-50/50'
                  }`}
                >
                  <h3 className="text-lg font-semibold mb-2 text-blue-700">{family.name}</h3>
                  <p className="text-xl font-bold text-blue-600">
                    ${family.moonPalacePrice.toLocaleString()} vs ${family.planetHollywoodPrice.toLocaleString()}
                  </p>
                  <p className={`font-bold ${getSavings(family.moonPalacePrice, family.planetHollywoodPrice) > 0 ? 'text-green-600' : 'text-yellow-600'}`}>
                    Save ${getSavings(family.moonPalacePrice, family.planetHollywoodPrice).toLocaleString()}!
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="p-4 bg-yellow-100 rounded-lg border border-yellow-300 text-center">
            <p className="font-bold text-lg mb-1">The Price Difference</p>
            <p>While Moon Palace is more expensive, we'll explore if the additional amenities and features justify the cost difference!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceComparison;