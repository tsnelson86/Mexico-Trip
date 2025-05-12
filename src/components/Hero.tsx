import React from 'react';
import { Calendar, Sun } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative">
      {/* Hero Image */}
      <div className="relative h-screen max-h-[600px] overflow-hidden">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/70 to-cyan-500/70 z-10" />
        
        {/* Background Image */}
        <img 
          src="https://images.pexels.com/photos/1021068/pexels-photo-1021068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Beautiful Cancun beach" 
          className="object-cover w-full h-full"
        />
        
        {/* Hero Content */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg text-center animate-pulse">
            ¡VAMONOS A MÉXICO!
          </h1>
          <h2 className="text-xl md:text-3xl font-semibold mb-6 drop-shadow-md text-center">
            The Ultimate Cancun Showdown
          </h2>
          <div className="flex items-center bg-blue-500/70 px-4 py-2 rounded-full mb-8">
            <Calendar className="mr-2" size={20} />
            <p className="text-lg">August 2-9, 2025 • 7 Nights of Paradise</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-4">
            <a href="#resorts" className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-3 px-8 rounded-full text-lg transition-colors flex items-center justify-center">
              <Sun className="mr-2" size={20} />
              Compare Resorts
            </a>
            <a href="#decision" className="bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors flex items-center justify-center backdrop-blur-sm">
              Skip to Decision
            </a>
          </div>
        </div>
      </div>
      
      {/* Daiquiri Girls Section */}
      <div className="bg-gradient-to-r from-pink-100 to-blue-100 p-6 md:p-10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/5382445/pexels-photo-5382445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Friends enjoying strawberry daiquiris" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-pink-600 mb-4">Picture This...</h2>
              <p className="text-lg mb-4">
                You and your besties, sipping strawberry daiquiris by the pool, the warm Cancun sun kissing your skin, and a week of pure relaxation ahead of you.
              </p>
              <p className="text-lg mb-4">
                This August, we're heading to paradise, and we want you with us!
              </p>
              <p className="text-lg font-bold text-blue-700">
                The only question is: Which resort will give us the ultimate vacation experience?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;