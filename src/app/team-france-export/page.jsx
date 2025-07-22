import React from "react";
import NavBar from "../../components/navBar/NavBar";
import ContactSection from "../../components/home/conatctSection/ContactSection";
import Footer from "../../components/footer/Footer";
import ExportSection from "../../components/team-france/teamHeroSection/ExportFrance";
import TeamFrance from "../../components/team-france/teamFrance/TeamFrance";
import TeamPartner from "../../components/team-france/teamPartnerSection/TeamPartner";
import OurMission from "../../components/team-france/mission/OurMission";
import Reference from "../../components/team-france/reference/Reference";
import Work from "../../components/team-france/work/WorkUs";

const page = () => {
  return (
    <div className="lg:pt-5.5 xl:pt-3.75">
      <NavBar />
      <ExportSection />
      <TeamFrance />
      <TeamPartner />
      <OurMission />
      <Work />
      <ContactSection />
      <Reference />
      <Footer />
    </div>
  );
};

export default page;
