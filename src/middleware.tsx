import React from "react";
import Navigation from "./pages/navbar/navbar";
import HeroSection from "./pages/heroSection/HeroSection";
import OurClient from "./pages/ourClient/OurClient";
const MiddlewareComponents = () => {
  return (
    <div>
      <Navigation /> <HeroSection />
      <OurClient />
    </div>
  );
};

export default MiddlewareComponents;
