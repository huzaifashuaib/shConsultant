import Image from "next/image";
import React from "react";
import teamFranceLogo from "../../../../public/assets/teamFrance.png";
import worldLogo from "../../../../public/assets/worldImg.png";

const HeroSection = () => {
  return (
    <div className="pt-[3%] px-[4%] flex flex-col justify-center items-center gap-5 h-full max-xl:pt-32">
      <Image
        src={teamFranceLogo}
        alt="heroSectionlogo"
        width={0}
        height={0}
        className="h-full w-[18%] md:w-[10%] lg:w-[6%] object-contain"
      />
      <h1 className="text-3xl md:text-5xl lg:text-[56px] text-slate-800 lg:leading-16 font-bold text-center tracking-[-1px]">
        Assisting French and other foreign companies explore business
        opportunities in Pakistan
      </h1>
      <Image
        src={worldLogo}
        alt="worldImage"
        width={0}
        height={0}
        className="block object-contain max-lg:mt-6"
      />
    </div>
  );
};

export default HeroSection;
