import React from "react";
import Navigation from "./pages/navbar/navbar";
import HeroSection from "./pages/heroSection/HeroSection";
import OurClient from "./pages/ourClient/OurClient";
import BusinessRecord from "./pages/businessTransformation/BusinessRecord";
const MiddlewareComponents = () => {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <OurClient />
      <BusinessRecord />
    </div>
  );
};

export default MiddlewareComponents;
