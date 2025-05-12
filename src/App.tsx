import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ResortIntro from './components/ResortIntro';
import PriceComparison from './components/PriceComparison';
import DiamondMembership from './components/DiamondMembership';
import KidsClubComparison from './components/KidsClubComparison';
import RestaurantComparison from './components/RestaurantComparison';
import ActivitiesComparison from './components/ActivitiesComparison';
import FinalDecision from './components/FinalDecision';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col" style={{
      background: `
        radial-gradient(circle at 20% 20%, rgba(255, 105, 180, 0.15) 0%, transparent 30%),
        radial-gradient(circle at 75% 40%, rgba(0, 255, 255, 0.15) 0%, transparent 30%),
        radial-gradient(circle at 40% 60%, rgba(255, 255, 0, 0.15) 0%, transparent 30%),
        radial-gradient(circle at 80% 80%, rgba(127, 255, 212, 0.15) 0%, transparent 30%),
        #f0f9ff
      `,
      backgroundAttachment: 'fixed'
    }}>
      <Header />
      <Hero />
      <ResortIntro />
      <PriceComparison />
      <DiamondMembership />
      <KidsClubComparison />
      <RestaurantComparison />
      <ActivitiesComparison />
      <FinalDecision />
      <Footer />
    </div>
  );
}

export default App;