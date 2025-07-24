"use client";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { manrope } from "../../../libs/fonts";
import { swipeIcons } from "./data.js";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSectionTechnology = () => {
  return (
    <div className="max-w-345 mx-auto pt-12.5  px-5 overflow-x-hidden">
      {/* <div className="max-w-345 mx-auto pt-12.5 p-2.5 overflow-x-hidden"> */}
      <div className="flex flex-col gap-2.5 ">
        <h5
          className={` ${manrope.className} text-sm md:text-xl font-light text-white`}
        >
          YOUR TECHNOLOGY PARTNER
        </h5>
        <h1
          className={`text-2xl md:text-6xl text-white md:leading-16 font-semibold tracking-tightest ${manrope.className} mb-4`}
        >
          We transform ideas into <br /> outcomes with a white- <br /> glove
          approach to cater to <br /> each businesses' unique <br /> needs
        </h1>
        <Link
          href={"/#contactSection"}
          className="group md:w-fit cursor-pointer text-primary flex py-3.75 px-5 font-medium text-sm rounded-lg bg-white hover:ring-2 hover:ring-customBlue hover:bg-hover-color  hover:shadow-xl transition-all duration-150 ease-in-out items-center justify-center gap-2 hover:text-white shadow-md"
        >
          Contact Us
          <FaLongArrowAltRight className="transform group-hover:translate-x-2 transition-all duration-150 ease-in-out " />
        </Link>
      </div>
      <div className=" mt-12 md:mt-33.75 md:mb-22.5">
        <div className="marquee-Gradient">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex"
          >
            {swipeIcons.map((icon, index) => (
              <Image
                key={index}
                src={icon}
                alt="icon"
                width={0}
                height={0}
                className="w-24 h-full shrink-0 mr-16"
              />
            ))}
          </motion.div>
        </div>
        <div className="marquee-Gradient">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex mt-2 md:mt-8"
          >
            {swipeIcons.map((icon, index) => (
              <Image
                key={index}
                src={icon}
                alt="icon"
                width={0}
                height={0}
                className="w-24 h-full shrink-0 mr-16"
              />
            ))}
          </motion.div>
        </div>
      </div>
      <hr className="text-slate-800 text-xs" />
    </div>
  );
};

export default HeroSectionTechnology;
