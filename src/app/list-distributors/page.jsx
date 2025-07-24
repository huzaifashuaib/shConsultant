import Navbar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";
import React from "react";
import ListDistributor from "../../components/commonCase/CommonStudyCase";

const page = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <main className="flex-1 flex items-center justify-center ">
        <ListDistributor text={"List of Distributors"} />
      </main>
      <Footer />
    </div>
  );
};

export default page;
