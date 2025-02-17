import React from "react";
import Navigation from "./pages/navbar/navbar";
import HeroSection from "./pages/heroSection/HeroSection";
import OurClient from "./pages/ourClient/OurClient";
import BusinessRecord from "./pages/businessTransformation/BusinessRecord";
import DesignProcess from "./pages/footerDesignProcess/designProcess";
import AssociationBanner from "./pages/boatRacingAssociationBanner/AssociationBanner";

const MiddlewareComponents = () => {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <OurClient />
      <BusinessRecord />
      <DesignProcess />
      <AssociationBanner />
    </div>
  );
};

export default MiddlewareComponents;
