"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import logo from "../../../public/assets/logo.png";

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
      <div
        className={`fixed inset-0 bg-black/80 transition-opacity duration-500 z-10  ${
          isOpen ? "opacity-100 visible " : "opacity-0 invisible"
        }`}
        onClick={handleToggle}
      />

      <div className=" px-5 bg-[#EFF4F9] max-w-[1660px]  py-4 md:py-5 lg:py-2 mb-3 xl:mb-5 mx-auto lg:bg-transparent border-b border-slate-300 lg:border-none fixed top-0 right-0 left-0 z-3 lg:z-0 lg:static">
        <nav className="flex justify-between items-center w-full lg:w-auto">
          <div className="w-full lg:w-auto">
            <div className=" w-[33%] sm:w-[20%] md:w-[20%] lg:w-[62%] ">
              <Link href="/">
                <Image
                  src={logo}
                  alt="Site Logo"
                  height={0}
                  width={0}
                  className="h-full object-contain"
                />
              </Link>
            </div>
          </div>

          <div className="navLinks hidden lg:flex ">
            <ul className=" list-none flex items-center flex-wrap justify-center lg:max-w-[600px] xl:max-w-[700px] 2xl:max-w-full ">
              {navLinks.map((nav, index) => (
                <li
                  key={index}
                  className="px-2.5 py-2  font-normal text-[17px] text-[#475569] whitespace-nowrap"
                >
                  <Link href={nav.href}>{nav.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className=" flex flex-row-reverse items-center w-full lg:w-auto gap-8 md:gap-3 lg:gap-2 md:flex-col-reverse lg:flex-col xl:flex-row  ">
            <div className="contact_btn lg:flex hidden">
              <button className="text-base py-2.5 px-6 rounded-md font-medium bg-[#002494] text-white shadow-xs">
                Contact Us
              </button>
            </div>
            <div className=" lg:hidden flex md:justify-end md:w-full lg:w-auto">
              <button onClick={handleToggle}>
                <FaBars size={20} />
              </button>
            </div>
            <div className="flex items-center gap-1 justify-end md:justify-start w-full lg:w-auto">
              <Link href={""}>
                <img
                  src="https://cdn.gtranslate.net/flags/24/en-us.png"
                  alt=""
                  width={24}
                  height={24}
                />
              </Link>
              <Link href={""}>
                <img
                  src="https://cdn.gtranslate.net/flags/24/fr.png"
                  alt=""
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>
        </nav>

        {/* Mobile Nav */}
      </div>

      <div
        className={`fixed top-0 right-0 bottom-0 h-full overflow-auto w-full flex flex-col justify-between gap-10 sm:w-[300px] bg-white px-5 z-10 shadow-xl transform transition-all duration-800 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } `}
      >
        <div>
          <div className="logo_title flex justify-between items-center pb-2.5 border-b border-slate-300">
            <div className="h-14 w-20 relative pt-2.5 ">
              <Image src={logo} alt="logo" className="h-full object-contain" />
            </div>
            <button onClick={handleToggle}>
              <RxCross2 size={18} />
            </button>
          </div>

          <div className="pt-5 ">
            <ul className=" list-none  ">
              {navLinks.map((nav, index) => (
                <li
                  key={index}
                  className="py-1 tracking-tighter text-base text-[#161616] whitespace-nowrap"
                >
                  <Link href={nav.href}>{nav.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-5 mb-10 md:mb-20 ">
          <button className="text-base w-full py-1.5  rounded-lg font-normal bg-[#002494] text-white shadow-xs">
            Contact Us
          </button>
          <button className="text-base w-full py-1.5  rounded-lg font-normal bg-[#002494] text-white shadow-xs">
            Book a Call
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
