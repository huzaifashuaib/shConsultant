import React from "react";
import NavBar from "../../components/navBar/NavBar";
import ContactSection from "../../components/home/conatctSection/ContactSection";
import Footer from "../../components/footer/Footer";
import HeroSection from "../../components/technology-service/technologyHero/HeroSectionTechnology";
import TechServices from "../../components/technology-service/techServices/TechServices";

const page = () => {
  return (
    <div>
      <NavBar />
      <div className="technologyBackground pt-26.25 md:pt-35 lg:pt-20 custom-drop-shadow">
        {/* <div className="technologyBackground pt-36.25 md:pt-75 lg:pt-50 custom-drop-shadow"> */}
        <HeroSection />
        <TechServices />
      </div>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default page;
