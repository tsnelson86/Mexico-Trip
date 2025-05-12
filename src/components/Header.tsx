import React from 'react';
import { Martini, Sun, Calendar, Plane } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Sun className="text-yellow-300" size={28} />
            <span className="font-bold text-xl md:text-2xl">¡VAMONOS A MÉXICO!</span>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <a href="#resorts" className="flex items-center hover:text-yellow-200 transition-colors">
              <Plane className="mr-1" size={18} />
              <span>Resorts</span>
            </a>
            <a href="#pricing" className="flex items-center hover:text-yellow-200 transition-colors">
              <Calendar className="mr-1" size={18} />
              <span>Pricing</span>
            </a>
            <a href="#kids" className="flex items-center hover:text-yellow-200 transition-colors">
              <span>Kids Clubs</span>
            </a>
            <a href="#activities" className="flex items-center hover:text-yellow-200 transition-colors">
              <Martini className="mr-1" size={18} />
              <span>Activities</span>
            </a>
          </nav>
          
          <div className="md:hidden">
            <button className="flex items-center text-white focus:outline-none">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;