import Image from "next/image";
import React from "react";
import { introData } from "./introData";
import SlideUpWrapper from "../../SlideUpWrapper";

const IntroSection = () => {
  return (
    <section id="about" className="introBackground pt-13.75 pb-12.5 md:py-12.5">
      <SlideUpWrapper>
        <div className="max-md:px-[7%] px-[4%] sm:pb-[4%] md:pb[6%] md:max-w-390 mx-auto ">
          <h1 className="mb-5 text-3xl md:text-4xl font-semibold text-white">
            WHO ARE WE?
          </h1>
          <p className="mb-3.5 font-normal text-base md:text-lg text-slate-400">
            At <strong>S&H Business Consultants</strong>, we specialize in
            guiding French companies eager to explore, expand and capitalize on
            business opportunities in Pakistan. Our expertise are tailored to
            navigate the complexities of this dynamic market, ensuring
            successful outcomes for our clients.
          </p>
        </div>
        <hr className="text-slate-800 text-xs" />
      </SlideUpWrapper>
      <div className="grid grid-cols-1 md:grid-cols-3 px-[4%] pt-[5%] md:max-w-390 mx-auto">
        {introData.map((data, index) => (
          <SlideUpWrapper
            key={index}
            className="max-md:mt-7.5 max-md:mb-10 max-md:px-[4%] first:md:pl-0 md:px-10 last:md:pr-0"
          >
            <Image
              src={data.image}
              alt={data.alt}
              className="pb-2"
              width={0}
              height={0}
            />
            <h1 className="text-xl md:text-2xl mt-2 mb-4 text-white font-bold ">
              {data.title}
            </h1>
            <p className="text-base font-normal text-slate-400">{data.text}</p>
          </SlideUpWrapper>
        ))}
      </div>
    </section>
  );
};

export default IntroSection;
