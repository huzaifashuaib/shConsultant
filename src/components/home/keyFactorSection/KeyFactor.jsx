import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { keyFactorData } from "./keyFactorData";

const KeyFactor = () => {
  return (
    <div className="md:pt-[10%] md:px-[5%] px-[4%] md:max-w-390 mx-auto flex md:flex-row flex-col relative">
      <div className="md:px-5 w-full md:sticky md:top-1/5 md:self-start md:pb-40">
        <h1 className="text-3xl md:text-4xl font-semibold text-slate-800 pb-4">
          KEY FACTORS
        </h1>
        <p className="text-[18px] text-slate-600 mb-8.5">
          French Companies Exploring Business Opportunities in Pakistan
        </p>
        <button className="group hidden cursor-pointer md:flex py-3.75 px-5 font-medium text-base rounded-lg bg-primary hover:ring-2 hover:ring-[#a1b2e7] hover:bg-hover-color  hover:shadow-xl transition-all duration-150 ease-in-out items-center justify-center gap-2 text-white shadow-md">
          Contact Us
          <FaLongArrowAltRight className="transform group-hover:translate-x-2 transition-all duration-150 ease-in-out " />
        </button>
      </div>

      <div className="w-full pt-[20%] px-[4%] md:pt-22.5 md:pr-22.5 md:pb-12.5 md:pl-18 md:border-l md:border-[#555555]">
        {keyFactorData.map((data, index) => (
          <div className="flex gap-5 md:gap-10 mb-22.5 last:mb-0" key={index}>
            <h1 className="mt-2.75 text-3xl text-slate-800 font-medium">
              0{index + 1}
            </h1>

            <div>
              <h1 className="text-slate-800 text-xl md:text-3xl font-medium mb-2">
                {data.title}
              </h1>
              <p className="text-base md:text-[18px] font-light text-slate-600 md:mb-3.5">
                {data.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyFactor;
