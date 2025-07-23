import Image from "next/image";
import React from "react";
import flag from "../../../../public/assets/pakfrance.webp";

const CaseStudy = () => {
  return (
    <div className="space-y-3">
      <h1 className="text-3xl md:text-4xl text-slate-800 font-semibold">
        Case Studies
      </h1>
      <div className="flex ">
        <Image
          src={flag}
          alt="flag"
          width={0}
          height={0}
          className="h-full w-full"
        />

        <form action="" className="w-full">
          <input
            placeholder="Name"
            type="text"
            className=" shadow-md py-3 px-2.5 w-full bg-white border border-slate-300 rounded-sm outline-none"
          />
          <input
            placeholder="Company name"
            type="text"
            className=" shadow-md py-3 px-2.5 w-full bg-white border border-slate-300 rounded-sm outline-none"
          />
          <input
            placeholder="Email"
            type="email"
            className=" shadow-md py-3 px-2.5 w-full bg-white border border-slate-300 rounded-sm outline-none"
          />
          <textarea
            name=""
            id=""
            placeholder="Tell us more about your project"
            rows={4}
            className="shadow-sm py-3 px-2.5 w-full bg-white border border-slate-300 rounded-md resize-none outline-none"
          />

          <button className="text-white block rounded-md w-full py-3 cursor-pointer bg-primary hover:ring-2 hover:ring-customBlue hover:bg-hover-color  hover:shadow-xl transition-all duration-150 ease-in-out shadow-sm mb-5">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CaseStudy;
