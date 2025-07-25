import React from "react";
import ContactSection from "../../components/home/conatctSection/ContactSection";
import ExportSection from "../../components/team-france/teamHeroSection/ExportFrance";
import TeamFrance from "../../components/team-france/teamFrance/TeamFrance";
import TeamPartner from "../../components/team-france/teamPartnerSection/TeamPartner";
import OurMission from "../../components/team-france/mission/OurMission";
import Reference from "../../components/team-france/reference/Reference";
import Work from "../../components/team-france/work/WorkUs";

export const metadata = {
  title: "Team France Expoet - Business Consultants",
};
const page = () => {
  return (
    <div className="lg:pt-5.5 xl:pt-3.75">
      <ExportSection />
      <TeamFrance />
      <TeamPartner />
      <OurMission />
      <Work />
      <ContactSection />
      <Reference />
    </div>
  );
};

export default page;
