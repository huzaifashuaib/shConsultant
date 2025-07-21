import Image from "next/image";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { serviceData } from "./serivceData";

const Services = () => {
  return (
    <section className="pt-13.75 pb-12.5 md:py-12.5 h-full">
      <div className="px-[4%] pb-[4%]">
        <h1 className="text-center text-2xl md:text-xl text-black mb-8.5 font-bold">
          An overview of what we do
        </h1>

        <div className="hidden md:flex flex-col items-center space-y-4">
          <h1 className="text-4xl text-black font-bold tracking-wide">
            OUR SERVICES
          </h1>
          <p className="text-center text-base text-black">
            Services to French companies willing to outsource to their
            products/services to Pakistan (textile made- <br /> ups & apparel,
            sports equipment & accessories, leather products, and surgical
            instruments etc) Contact Us
          </p>
          <button className="group flex cursor-pointer w-fit py-3.75 px-5 font-bold rounded-lg bg-primary hover:ring-2 hover:ring-[#a1b2e7] hover:bg-hover-color  hover:shadow-xl transition-all duration-150 ease-in-out items-center gap-2 text-white shadow-md">
            Contact Us
            <FaLongArrowAltRight className=" transform group-hover:translate-x-2 transition-all duration-150 ease-in-out " />
          </button>
        </div>
      </div>
      <div className=" px-[4%] pt-[5%] md:max-w-390 mx-auto  ">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-y-10.25 lg:gap-y-13 xl:gap-y-15.25 2xl:gap-y-25">
          {serviceData.map((data, index) => (
            <div
              key={index}
              className="max-md:mb-10 md:mt-0 px-[4%] md:px-5 flex flex-col items-center last:pb-[4%] h-full"
            >
              <Image
                src={data.icon}
                alt={data.alt}
                width={0}
                height={0}
                className="pb-3"
              />

              <h1 className="text-xl md:text-2xl mt-2 max-md:md:mb-4 text-black font-bold text-center">
                {data.title}
              </h1>
              <p className="text-base text-black text-center">{data.text}</p>
            </div>
          ))}
        </div>

        <button className="group md:hidden mb-10 flex w-full py-3.75 px-5 font-bold rounded-lg bg-primary hover:ring-2 hover:ring-[#a1b2e7] hover:bg-hover-color hover:shadow-xl transition-all duration-150 ease-in-out items-center justify-center gap-2 text-white shadow-md">
          Contact Us
          <FaLongArrowAltRight className="transform group-hover:translate-x-2 transition-all duration-150 ease-in-out " />
        </button>
      </div>
    </section>
  );
};

export default Services;
