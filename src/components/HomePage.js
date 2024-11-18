import React from 'react';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import TestimonialsSection from './TestimonialsSection';
import PartnersSection from './PartnersSection';
import ProgramsPage from './Progaram';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ProgramsPage/>
      <TestimonialsSection />
      <FeaturesSection />
      <PartnersSection />
      
    </>
  );
};

export default HomePage;
