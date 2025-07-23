import Navbar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";
import React from "react";
import CaseStudy from "../../components/case-study/caseSection/CaseStudy";
const page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 ">
        <CaseStudy />
      </main>
      <Footer />
    </div>
  );
};

export default page;
