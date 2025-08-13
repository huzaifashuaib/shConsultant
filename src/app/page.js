import HeroSection from "../components/home/heroSection/HeroSection";
import IntroSection from "../components/home/introSection/IntroSection";
import ServicesSection from "../components/home/servicesSection/Services";
import KeyFactorSection from "../components/home/keyFactorSection/KeyFactor";
import TeamSection from "../components/home/team/TeamSection";
import ContactSection from "../components/home/conatctSection/ContactSection";
export default function Home() {
  return (
    <>
      <div className="backgroundImage overflow-hidden ">
        <HeroSection />
      </div>
      <IntroSection />
      <ServicesSection />
      <KeyFactorSection />
      <TeamSection />
      <ContactSection contactId={"contactSection"} />
    </>
  );
}
