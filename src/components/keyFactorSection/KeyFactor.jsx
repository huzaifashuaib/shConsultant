import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { keyFactorData } from "./keyFactorData";

const KeyFactor = () => {
  return (
    <div className="md:pt-[10%] md:px-[5%] px-[4%] md:max-w-[1560px] mx-auto">
      <div className="flex md:flex-row flex-col relative">
        <div className="md:px-5 w-full md:sticky md:top-1/5 md:self-start md:pb-[160px] ">
          <h1 className="text-3xl md:text-4xl font-semibold text-[#1e293b] pb-4">
            KEY FACTORS
          </h1>
          <p className="text-[18px] text-[#475569]  mb-[34.4px]">
            French Companies Exploring Business Opportunities in Pakistan
          </p>

          <div className="hidden md:block">
            <button className="flex py-[15px] px-5 font-medium text-base rounded-lg bg-[#002494] items-center justify-center gap-2 text-white shadow-md">
              Contact Us
              <span>
                <FaLongArrowAltRight />
              </span>
            </button>
          </div>
        </div>
        <div className="w-full ">
          <div className="pt-[20%] px-[4%] md:pt-[90px] md:pr-[90px] md:pb-[50px] md:pl-[72px] md:border-l md:border-[#555555]">
            {keyFactorData.map((data, index) => (
              <div
                className="flex gap-5 md:gap-10 mb-[90px] last:mb-0 "
                key={index}
              >
                <h1 className=" mt-[11px] text-[28px] text-[#1e293b] font-medium">
                  0{index + 1}
                </h1>

                <div className="point">
                  <h1 className="text-[#1e293b] text-xl md:text-[28px] font-medium mb-2">
                    {data.title}
                  </h1>
                  <p className="text-[16px] md:text-[18px] font-light text-[#475569] md:mb-[14.4px] ">
                    {data.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFactor;
