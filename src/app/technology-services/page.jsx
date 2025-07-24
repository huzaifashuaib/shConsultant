import React from "react";
import ContactSection from "../../components/home/conatctSection/ContactSection";
import HeroSection from "../../components/technology-service/technologyHero/HeroSectionTechnology";
import TechServices from "../../components/technology-service/techServices/TechServices";

const page = () => {
  return (
    <>
      <div className="md:pt-28 hidden md:flex"></div>
      <div className="technologyBackground pt-26.25 md:pt-35 lg:pt-20 custom-drop-shadow">
        <HeroSection />
        <TechServices />
      </div>
      <ContactSection />
    </>
  );
};

export default page;
