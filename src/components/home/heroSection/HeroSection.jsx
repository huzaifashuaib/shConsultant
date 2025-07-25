import Image from "next/image";
import React from "react";
import teamFranceLogo from "../../../../public/assets/teamFrance.png";
import worldLogo from "../../../../public/assets/worldImg.png";
import SlideUpWrapper from "../../../components/SlideUpWrapper";

const HeroSection = () => {
  return (
    <SlideUpWrapper className="px-[4%] flex flex-col justify-center items-center gap-5 h-full pt-23.5 min-sm:max-md:pt-30 min-lg:pt-[3%] min-md:max-lg:pt-34 overflow-hidden">
      <Image
        src={teamFranceLogo}
        alt="heroSectionlogo"
        width={0}
        height={0}
        className="h-full max-md:w-[18%] lg:w-[10%] max-2xl:w-[8%] 2xl:w-[6%]  object-contain lg:mt-35"
      />
      <h1 className="text-3xl md:text-5xl lg:text-[56px] text-slate-800 lg:leading-16 font-bold text-center tracking-tightest">
        Assisting French and other foreign companies explore business
        opportunities in Pakistan
      </h1>
      <div className=" overflow-hidden">
        <Image
          src={worldLogo}
          alt="worldImage"
          width={0}
          height={0}
          className="block object-contain max-lg:mt-6"
        />
      </div>
    </SlideUpWrapper>
  );
};

export default HeroSection;
