import Link from "next/link";
import React from "react";
import Image from "next/image";
import { members } from "./teamData";
import SlideUpWrapper from "../../SlideUpWrapper";

const TeamSection = () => {
  return (
    <div id="team" className="my-15 px-[4%] pt-[5%] md:max-w-390 mx-auto">
      <h1 className="text-4xl font-semibold uppercase text-slate-800 mb-5">
        Meet the Core Team
      </h1>

      <div className="flex md:flex-row flex-col w-full pt-7.5 max-md:gap-10">
        {members.map((member, index) => (
          <SlideUpWrapper
            className="mx-0 md:mx-2.5 w-full md:w-1/2 flex flex-col"
            key={index}
          >
            <div className="mx-auto -mb-12.5 max-2xl:h-62.5 w-[89%] min-md:max-2xl:w-[65%] 2xl:w-1/2 2xl:h-100 relative rounded-xl overflow-hidden">
              {/* <div className="mx-auto -mb-12.5 max-xl:h-62.5 w-[89%] max-lg:w-[65%] xl:w-1/2 xl:h-100 relative rounded-xl overflow-hidden"> */}
              <Image
                src={member.image}
                alt={member.alt}
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="flex-1 flex-col px-5 pb-5 pt-16.5 rounded-3xl custom-shadow flex h-full">
              <h1 className="text-lg md:text-xl text-slate-800 font-medium text-center mt-2">
                {member.name}
              </h1>
              <p className="text-lg text-primary text-center font-medium">
                {member.title}
              </p>

              <Link
                href={""}
                className="mt-2 mb-4 flex gap-1 w-fit mx-auto justify-center items-center leading-0 text-xs py-1 px-1.5 border border-primary rounded-xl cursor-pointer hover:bg-primary hover:text-white transition-all duration-150 ease-in-out transform hover:scale-105 hover:shadow-2xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                </svg>
                {member.email}
              </Link>

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
