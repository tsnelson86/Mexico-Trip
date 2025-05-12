import React from 'react';
import { Calendar, DollarSign, Plane } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">¡VAMONOS A MÉXICO!</h3>
            <p className="text-blue-200">August 2-9, 2025 • 7 Nights in Paradise</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4">
            <a href="#resorts" className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full transition-colors text-center">
              Compare Resorts
            </a>
            <a href="#pricing" className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full transition-colors text-center">
              View Pricing
            </a>
            <a href="#decision" className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 px-6 py-2 rounded-full transition-colors text-center">
              See Our Decision
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-6 border-t border-blue-500">
          <div>
            <div className="flex items-center mb-3">
              <Calendar className="mr-2" size={20} />
              <h4 className="font-bold">Trip Details</h4>
            </div>
            <ul className="space-y-2 text-blue-200">
              <li>Dates: August 2-9, 2025</li>
              <li>Duration: 7 nights</li>
              <li>Location: Cancun, Mexico</li>
              <li>Airport: Cancun International (CUN)</li>
            </ul>
          </div>
          
          <div>
            <div className="flex items-center mb-3">
              <DollarSign className="mr-2" size={20} />
              <h4 className="font-bold">Pricing Info</h4>
            </div>
            <ul className="space-y-2 text-blue-200">
              <li>Moon Palace: $25,144 total</li>
              <li>Planet Hollywood: $21,180 total</li>
              <li>Price Difference: $3,964</li>
              <li>Payment Due: May 15, 2025</li>
            </ul>
          </div>
          
          <div>
            <div className="flex items-center mb-3">
              <Plane className="mr-2" size={20} />
              <h4 className="font-bold">Flight Info</h4>
            </div>
            <ul className="space-y-2 text-blue-200">
              <li>Airline: United</li>
              <li>Outbound: 9:40 AM (Aug 2)</li>
              <li>Return: 5:30 PM (Aug 9)</li>
              <li>Travel Time: ~4 hours each way</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-blue-500 text-center text-blue-200 text-sm">
          <p>All prices based on August 2-9, 2025 travel dates.</p>
          <p className="mt-2">Prices and availability subject to change. Contact for more details.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;