import Image from "next/image";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { serviceData } from "./serivceData";

const Services = () => {
  return (
    <div className="pt-[55px] pb-[50px] md:py-[50px] h-full">
      <section className="px-[4%] pb-[4%]">
        <h1 className="text-center text-xl text-black mb-[34.4px] font-bold">
          An overview of what we do
        </h1>

        <section className="hidden md:flex flex-col items-center space-y-4">
          <h1 className="text-[40px] text-black font-bold tracking-wide">
            OUR SERVICES
          </h1>
          <p className="text-center text-base text-black">
            Services to French companies willing to outsource to their
            products/services to Pakistan (textile made- <br /> ups & apparel,
            sports equipment & accessories, leather products, and surgical
            instruments etc) Contact Us
          </p>
          <button className="flex  w-fit py-[15px] px-5 font-bold rounded-lg bg-[#002494] items-center gap-2 text-white shadow-md">
            Contact Us
            <span>
              <FaLongArrowAltRight />
            </span>
          </button>
        </section>
      </section>
      <section className=" px-[4%] pt-[5%] md:max-w-[1560px] mx-auto  ">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-y-[41px] lg:gap-y-[52px] xl:gap-y-[61px] 2xl:gap-y-[100px]   ">
          {serviceData.map((data, index) => (
            <div
              key={index}
              className="mb-[40px] md:mt-0 md:mb-0 px-[4%] md:px-5 flex flex-col items-center last:pb-[4%] h-full"
            >
              <div className="pb-3">
                <Image src={data.icon} alt="" width={0} height={0} />
              </div>

              <h1 className="text-xl md:text-2xl mt-2 md:mb-4 mb-0 text-black font-bold text-center">
                {data.title}
              </h1>
              <p className="text-base text-black text-center ">{data.text}</p>
            </div>
          ))}
        </div>
        <div className="block md:hidden mb-[40px] pb-[5%] ">
          <button className="flex w-full py-[15px] px-5 font-bold rounded-lg bg-[#002494] items-center justify-center gap-2 text-white shadow-md">
            Contact Us
            <span>
              <FaLongArrowAltRight />
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;
