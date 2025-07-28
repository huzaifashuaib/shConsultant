"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import logo from "../../../public/assets/logo.png";
import usaFlag from "../../../public/assets/en-us.png";
import frFlag from "../../../public/assets/fr-flag.png";

const NavBar = () => {
  const navLinks = [
    { href: "/#about", name: "About Us" },
    { href: "/#services", name: "Our Services" },
    { href: "/team-france-export", name: "Team France Export" },
    { href: "/#factorSection", name: "Key Factors" },
    { href: "/#team", name: "Our Team" },
    { href: "/technology-services", name: "Technology Services" },
    { href: "/case-studies", name: "Case Study" },
    { href: "/list-distributors", name: "List of Distributors" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");
  const handleToggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const changeLanguage = (lang) => {
    const tryChange = () => {
      const select = document.querySelector(".goog-te-combo");

      console.log(select);
      if (select) {
        select.value = lang;
        select.dispatchEvent(new Event("change"));
        setCurrentLang(lang);
        setTimeout(() => {
          select.dispatchEvent(new Event("change"));
          setCurrentLang(lang);
        }, 200);
      } else {
        setTimeout(tryChange, 100);
      }
    };
    tryChange();
  };

  useEffect(() => {
    const detectLanguage = () => {
      const select = document.querySelector(".goog-te-combo");
      if (select && select.value) {
        setCurrentLang(select.value);
      } else {
        setTimeout(detectLanguage, 100);
      }
    };
    detectLanguage();
  }, [setCurrentLang]);
  return (
    <>
      {/*Transparency  */}
      <div
        className={`fixed inset-0 bg-black/80 transition-opacity duration-500 z-10  ${
          isOpen ? "opacity-100 " : "opacity-0 invisible"
        }`}
        onClick={handleToggle}
      />
      <nav className="w-full absolute z-20 px-5 bg-[#EFF4F9] py-4 md:py-2 lg:py-5 lg:bg-transparent max-lg:border-b border-slate-300 max-lg:fixed top-0 inset-x-0 max-lg:z-3 ">
        <div className="hidden md:flex lg:hidden justify-center gap-3 w-full">
          <button
            className={` transform hover:scale-110 rounded-sm transition-all duration-200 ease-in-out cursor-pointer ${
              currentLang === "en" ? "ring-2 ring-blue-500 scale-125" : ""
            }`}
            onClick={() => changeLanguage("en")}
          >
            <Image src={usaFlag} alt="us-flag" width={24} height={24} />
          </button>
          <button
            className={` transform hover:scale-110 rounded-sm transition-all duration-200 ease-in-out cursor-pointer ${
              currentLang === "fr" ? "ring-2 ring-blue-500 scale-125" : ""
            }`}
            onClick={() => changeLanguage("fr")}
          >
            <Image src={frFlag} alt="fr-flag" width={24} height={24} />
          </button>
        </div>
        <div className="flex justify-around items-center">
          <Link href="/">
            <Image
              src={logo}
              alt="Site Logo"
              height={0}
              width={0}
              className=" object-contain max-md:w-[54%] md:max-lg:w-[40%] w-[62%] mx-auto"
            />
          </Link>
          {/* <GoogleTranslate /> */}
          <ul className=" list-none items-center flex-wrap justify-center lg:max-w-150 xl:max-w-200 2xl:max-w-full hidden lg:flex">
            {navLinks.map((nav, index) => (
              <li
                key={index}
                className="px-2.5 py-2 font-normal text-base whitespace-nowrap "
              >
                <Link href={nav.href} className="relative group text-slate-600">
                  {nav.name}
                  <span className="absolute left-0 -bottom-2 h-0.5 w-0 bg-slate-400 transition-all duration-700 ease-in-out group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>

          <div className=" flex flex-row-reverse items-center max-lg:w-full gap-8 md:gap-3 lg:gap-4 md:flex-col-reverse lg:flex-col xl:flex-row  ">
            <Link
              href={"/#contactSection"}
              className="text-base py-2.5 px-6 cursor-pointer transition-all duration-200 ease-in-out rounded-md font-medium bg-primary hover:ring-2 hover:ring-customBlue hover:bg-hover-color text-white shadow-xs lg:flex hidden whitespace-nowrap"
            >
              Contact Us
            </Link>

            <button
              onClick={handleToggle}
              className=" lg:hidden flex md:justify-end md:w-full lg:w-auto"
            >
              <FaBars size={20} />
            </button>

            <div className="flex items-center gap-3 justify-end md:hidden lg:flex max-lg:w-full ">
              <button
                className={` transform hover:scale-110 rounded-sm transition-all duration-200 ease-in-out cursor-pointer ${
                  currentLang === "en" ? "ring-2 ring-blue-500 scale-125" : ""
                }`}
                onClick={() => changeLanguage("en")}
              >
                <Image src={usaFlag} alt="us-flag" width={24} height={24} />
              </button>
              <button
                className={` transform hover:scale-110 rounded-sm transition-all duration-200 ease-in-out cursor-pointer ${
                  currentLang === "fr" ? "ring-2 ring-blue-500 scale-125" : ""
                }`}
                onClick={() => changeLanguage("fr")}
              >
                <Image src={frFlag} alt="fr-flag" width={24} height={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile Nav */}
      <div
        className={`fixed top-0 right-0 bottom-0 h-full overflow-auto w-full flex flex-col justify-between gap-10 sm:w-75 bg-white px-5 z-50 shadow-xl transform transition-all duration-800 ease-in-out ${
          isOpen ? "translate-x-0 " : "translate-x-full"
        } `}
      >
        <div>
          <div className="flex justify-between items-center pb-2.5 border-b border-slate-300">
            <Image
              src={logo}
              alt="logo"
              width={0}
              height={0}
              className="object-contain h-14 w-20 relative pt-2.5"
            />
            <button onClick={handleToggle} className="cursor-pointer">
              <RxCross2 size={20} />
            </button>
          </div>
          <ul className=" list-none pt-5  ">
            {navLinks.map((nav, index) => (
              <li
                key={index}
                onClick={handleToggle}
                className="py-1 tracking-tighter text-base text-[#161616] whitespace-nowrap "
              >
                <Link href={nav.href}>{nav.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-5 mb-10 md:mb-20">
          <Link
            onClick={handleToggle}
            href={"/#contactSection"}
            className="text-base w-full py-1.5 text-center  rounded-lg font-normal hover:ring-2 bg-primary hover:ring-customBlue hover:bg-hover-color  text-white shadow-xs"
          >
            Contact Us
          </Link>
          <Link
            onClick={handleToggle}
            href={"https://calendly.com/saadmahmud/into-call"}
            target="_blank"
            className="text-base text-center w-full py-1.5  rounded-lg font-normal hover:ring-2 bg-primary hover:ring-customBlue hover:bg-hover-color  text-white shadow-xs"
          >
            Book a Call
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
