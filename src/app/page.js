import NavBar from "../components/navBar/NavBar";
import HeroSection from "../components/heroSection/HeroSection";
import IntroSection from "../components/introSection/IntroSection";
import Services from "../components/servicesSection/Services";
import KeyFactor from "../components/keyFactorSection/KeyFactor";
import TeamSection from "../components/team/TeamSection";
import ContactSection from "../components/conatctSection/ContactSection";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <>
      <div className="backgroundImage  lg:pt-[22px] xl:pt-[15px] ">
        <NavBar />
        <HeroSection />
      </div>
      <IntroSection />
      <Services />
      <KeyFactor />
      <TeamSection />
      <ContactSection />
      <Footer />
    </>
  );
}
