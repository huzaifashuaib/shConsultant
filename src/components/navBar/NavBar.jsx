"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import logo from "../../../public/assets/logo.png";
import usaFlag from "../../../public/assets/en-us.png";
import frFlag from "../../../public/assets/fr-flag.png";

const NavBar = () => {
  const navLinks = [
    { href: "", name: "About Us" },
    { href: "", name: "Our Services" },
    { href: "", name: "Team France Export" },
    { href: "", name: "Key Factors" },
    { href: "", name: "Our Team" },
    { href: "", name: "Technology Services" },
    { href: "", name: "Case Study" },
    { href: "", name: "List of Distributors" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);
  return (
    <>
      {/*Transparency  */}
      <div
        className={`fixed inset-0 bg-black/80 transition-opacity duration-500 z-10  ${
          isOpen ? "opacity-100 " : "opacity-0 invisible"
        }`}
        onClick={handleToggle}
      />
      <nav className=" max-lg:w-full px-5 bg-[#EFF4F9] max-w-415 py-4 md:py-2 lg:py-2 mb-3 xl:mb-5 mx-auto lg:bg-transparent max-lg:border-b border-slate-300 max-lg:fixed top-0 right-0 left-0 z-3 lg:z-0 ">
        <div className="hidden md:flex lg:hidden justify-center gap-3 w-full">
          <Link href={""}>
            <Image src={usaFlag} alt="us-flag" width={24} height={24} />
          </Link>
          <Link href={""}>
            <Image src={frFlag} alt="fr-flag" width={24} height={24} />
          </Link>
        </div>
        <div className="flex justify-between items-center">
          <Link href="/" className="max-lg:w-full">
            <Image
              src={logo}
              alt="Site Logo"
              height={0}
              width={0}
              className="h-full object-contain w-[33%] sm:w-[20%] md:w-[20%] lg:w-[62%]"
            />
          </Link>

          <ul className=" list-none items-center flex-wrap justify-center lg:max-w-150 xl:max-w-200 2xl:max-w-full hidden lg:flex relative ">
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

          <div className=" flex flex-row-reverse items-center max-lg:w-full gap-8 md:gap-3 lg:gap-2 md:flex-col-reverse lg:flex-col xl:flex-row  ">
            <button className="text-base py-2.5 px-6 cursor-pointer rounded-md font-medium bg-primary bg-hover:ring-2 hover:ring-[#a1b2e7] hover:bg-hover-color  text-white shadow-xs lg:flex hidden">
              Contact Us
            </button>

            <button
              onClick={handleToggle}
              className=" lg:hidden flex md:justify-end md:w-full lg:w-auto"
            >
              <FaBars size={20} />
            </button>

            <div className="flex items-center gap-1 justify-end md:hidden lg:flex max-lg:w-full ">
              <Link href={""}>
                <Image src={usaFlag} alt="us-flag" width={24} height={24} />
              </Link>
              <Link href={""}>
                <Image src={frFlag} alt="fr-flag" width={24} height={24} />
              </Link>
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
              className="object-contain h-14 w-20 relative pt-2.5"
            />
            <button onClick={handleToggle} className="cursor-pointer">
              <RxCross2 size={13} />
            </button>
          </div>
          <ul className=" list-none pt-5  ">
            {navLinks.map((nav, index) => (
              <li
                key={index}
                className="py-1 tracking-tighter group text-base text-[#161616] whitespace-nowrap relative"
              >
                <Link href={nav.href}>{nav.name}</Link>
                <span className="absolute left-0 -bottom-0.25 h-0.5 w-0 bg-[#7a7a7a] transition-all duration-700 ease-in-out group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-5 mb-10 md:mb-20">
          <button className="text-base w-full py-1.5  rounded-lg font-normal hover:ring-2 bg-primary hover:ring-[#a1b2e7] hover:bg-hover-color  text-white shadow-xs">
            Contact Us
          </button>
          <button className="text-base w-full py-1.5  rounded-lg font-normal hover:ring-2 bg-primary hover:ring-[#a1b2e7] hover:bg-hover-color  text-white shadow-xs">
            Book a Call
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
