import NavBar from "../components/navBar/NavBar";
import HeroSection from "../components/home/heroSection/HeroSection";
import IntroSection from "../components/home/introSection/IntroSection";
import ServicesSection from "../components/home/servicesSection/Services";
import KeyFactorSection from "../components/home/keyFactorSection/KeyFactor";
import TeamSection from "../components/home/team/TeamSection";
import ContactSection from "../components/home/conatctSection/ContactSection";
import Footer from "../components/footer/Footer";
export default function Home() {
  return (
    <>
      <div className="backgroundImage lg:pt-5.5 xl:pt-3.75 ">
        <NavBar />
        <HeroSection />
      </div>
      <IntroSection />
      <ServicesSection />
      <KeyFactorSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </>
  );
}
