import Image from "next/image";
import React from "react";
import teamFranceLogo from "../../../public/assets/teamFrance.png";
import worldLogo from "../../../public/assets/worldImg.png";

const HeroSection = () => {
  return (
    <div className="pt-[90.05px] xl:pt-[0]">
      <div className=" pt-[3%] px-[4%] flex flex-col justify-center items-center gap-5 h-full">
        <div className="relative w-[18%] md:w-[10%] lg:w-[6%]">
          <Image
            src={teamFranceLogo}
            alt="heroSectionlogo"
            width={0}
            height={0}
            className="h-full w-full object-contain"
          />
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-[56px] text-[#1E293B] lg:leading-[62px] font-bold  text-center tracking-[-1px]">
          Assisting French and other foreign companies explore business
          opportunities in Pakistan
        </h1>
        <div className="mt-6 lg:mt-0">
          <Image
            src={worldLogo}
            alt="worldImage"
            width={0}
            height={0}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
