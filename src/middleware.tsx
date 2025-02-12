import React from "react";
import Navigation from "./pages/navbar/navbar.tsx";
import HeroSection from "./pages/heroSection/HeroSection.tsx";
import OurClient from "./pages/ourClient/OurClient.tsx";
const MiddlewareComponents = () => {
  return (
    <div>
      <Navigation /> <HeroSection />
      <OurClient />
    </div>
  );
};

export default MiddlewareComponents;
