"use client";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { keyFactorData } from "./keyFactorData";
import Link from "next/link";
import SlideUpWrapper from "../../SlideUpWrapper";
import { motion } from "framer-motion";

const KeyFactor = () => {
  return (
    <div
      id="factorSection"
      className="md:pt-[10%] md:px-[4%]  md:max-w-390 mx-auto flex md:flex-row flex-col relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0 }}
        className="max-md:px-5 w-full md:w-1/2 md:sticky md:top-1/5 md:self-start md:pb-40"
      >
        <h1 className="text-3xl md:text-4xl font-semibold text-slate-800 pb-4">
          KEY FACTORS
        </h1>
        <p className="text-lg text-slate-600 md:mb-8.5">
          French Companies Exploring Business Opportunities in Pakistan
        </p>
        <Link
          href={"/#contactSection"}
          className="group hidden w-fit cursor-pointer md:flex py-3.75 px-5 font-medium text-base rounded-lg bg-primary hover:ring-2 hover:ring-customBlue hover:bg-hover-color  hover:shadow-xl transition-all duration-150 ease-in-out items-center justify-center gap-2 text-white shadow-md"
        >
          Contact Us
          <FaLongArrowAltRight className="transform group-hover:translate-x-2 transition-all duration-150 ease-in-out " />
        </Link>
      </motion.div>

      <div className="w-full md:w-1/2 pt-[20%] px-[4%] md:pt-22.5 md:pr-12.5 md:pb-12.5 md:pl-25 md:border-l md:border-[#555555]">
        {/* <div className="w-1/2 pt-[20%] px-[4%] md:pt-22.5 md:pr-22.5 md:pb-12.5 md:pl-18 md:border-l md:border-[#555555]"> */}
        {keyFactorData.map((data, index) => (
          <SlideUpWrapper
            className="flex gap-5 lg:gap-8 mb-6 md:mb-22.5 last:mb-0"
            key={index}
          >
            <h4 className="mt-2.75 text-3xl text-slate-800 font-medium flex">
              0{index + 1}
            </h4>

            <div className="md:mb-3.5 space-y-2">
              <h5 className="text-slate-800 text-xl md:text-[28px] font-medium">
                {data.title}
              </h5>
              <p className="text-base md:text-lg font-light text-slate-600">
                {data.text}
              </p>
            </div>
          </SlideUpWrapper>
        ))}
      </div>
    </div>
  );
};

export default KeyFactor;
