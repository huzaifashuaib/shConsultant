import Image from "next/image";
import React from "react";
import { workData } from "./data";

const WorkUs = () => {
  return (
    <div className="max-w-330 mx-auto py-10">
      <h1 className="p-2.5 md:text-4xl text-3xl font-semibold text-center">
        Why Work With Us?
      </h1>
      <div className="pt-10 grid grid-cols-1 md:grid-cols-4">
        {workData.map(({ text, icons, alt }, index) => (
          <div key={index} className="p-2.5 flex flex-col gap-5 md:gap-9">
            <Image
              src={icons}
              alt={alt}
              width={0}
              height={0}
              className="w-14 md:w-24 mx-auto"
            />
            <h1 className="mb-3.5 text-base text-slate-400 text-center">
              {text}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkUs;
