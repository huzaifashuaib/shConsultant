"use client";
import Link from "next/link";
import React from "react";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="flex flex-col md:flex-row items-center py-2.5 md:max-w-390 gap-2 mx-auto  px-2.5 md:px-10">
        <p className="text-slate-800 text-base w-full max-md:text-center ">
          Copyright © {year} S&H Business Consultants &{" "}
          <Link
            href={""}
            className="text-light-pink cursor-pointer hover:text-slate-700 transition-all ease-in-out duration-200 "
          >
            Privacy Policy
          </Link>
        </p>
        <Link
          href={""}
          className="p-2.5 bg-primary cursor-pointer hover:ring-2 hover:ring-customBlue hover:bg-hover-color hover:shadow-sm transition-all duration-150 ease-in-out text-white rounded-sm"
        >
          <MdEmail size={18} />
        </Link>
      </div>
      <button className=" fixed bottom-3.75 cursor-pointer right-5 hover:ring-2 hover:ring-customBlue hover:bg-hover-color  bg-primary hover:shadow-xl transition-all duration-150 ease-in-out text-white font-bold text-sm px-7 py-3 rounded-3xl z-40">
        Book Now
      </button>
    </>
  );
};

export default Footer;
