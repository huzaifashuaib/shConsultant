import React from "react";
import ContactSection from "../../components/home/conatctSection/ContactSection";
import HeroSection from "../../components/technology-service/technologyHero/HeroSectionTechnology";
import TechServices from "../../components/technology-service/techServices/TechServices";

export const metadata = {
  title: "Technology Service - Business Consultants",
  description:
    "We help businesses transform through cutting-edge technology services, strategic consulting, and customized digital solutions.",
};
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
