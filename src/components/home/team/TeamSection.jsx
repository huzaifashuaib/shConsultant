import Link from "next/link";
import React from "react";
import Image from "next/image";
import { members } from "./teamData";
import SlideUpWrapper from "../../SlideUpWrapper";

const TeamSection = () => {
  return (
    <div id="team" className="my-15 px-[4%] pt-[5%] md:max-w-390 mx-auto">
      <h1 className="max-md:text-3xl text-4xl font-semibold uppercase text-slate-800 mb-5">
        Meet the Core Team
      </h1>

      <div className="flex md:flex-row flex-col w-full pt-7.5 max-md:gap-10">
        {members.map((member, index) => (
          <SlideUpWrapper
            className="mx-0 md:mx-2.5 w-full md:w-1/2 flex flex-col"
            key={index}
          >
            <div className="mx-auto -mb-12.5 max-2xl:h-62.5 w-[89%] min-md:max-2xl:w-[65%] 2xl:w-1/2 2xl:h-100 relative rounded-xl overflow-hidden">
              <Image
                src={member.image}
                alt={member.alt}
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="flex-1 flex-col px-5 pb-5 pt-16.5 rounded-3xl custom-shadow flex h-full">
              <h2 className="text-xl text-slate-800 font-medium text-center mt-2">
                {member.name}
              </h2>
              <p className="text-lg text-primary text-center font-medium mb-4">
                {member.title}
              </p>

              <p className="text-center text-base md:text-lg font-light text-slate-600">
                {member.description}
              </p>
            </div>
          </SlideUpWrapper>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
