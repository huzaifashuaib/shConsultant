import Image from "next/image";
import React from "react";
import flag from "../../../public/assets/pakfrance.webp";
const CommonStudyCase = ({ text }) => {
  return (
    <div className="max-w-345 mx-auto md:p-5 w-full max-md:mt-30 min-md:max-lg:mt-22 max-md:mb-15">
      <h1 className="text-3xl md:text-4xl text-slate-800 font-semibold p-2.5 uppercase">
        {text}
      </h1>
      <div className="flex flex-col md:flex-row max-md:px-[2%]">
        <Image
          src={flag}
          alt="flag"
          className="object-cover w-full p-2.5 md:w-1/2"
        />

        <form
          action=""
          className="w-full flex flex-col gap-3 p-2.5  h-full md:w-1/2"
        >
          <select className="py-2 px-4 w-full bg-white border text-slate-600 border-modern-gray rounded-sm outline-none">
            <option value="">what are you looking for?</option>
            <option value="">1</option>
            <option value="">2</option>
          </select>
          <input
            placeholder="Name"
            type="text"
            className="py-2 text-slate-600 px-4 w-full bg-white border border-modern-gray  rounded-sm outline-none"
          />
          <input
            placeholder="Company name"
            type="text"
            className=" py-2 px-4 w-full text-slate-600 bg-white border border-modern-gray  rounded-sm outline-none"
          />
          <input
            placeholder="Email"
            type="email"
            className=" py-2 px-4 w-full text-slate-600 bg-white border border-modern-gray  rounded-sm outline-none"
          />
          <textarea
            name=""
            id=""
            placeholder="Tell us more about your project"
            rows={3}
            className="py-2 text-slate-600 px-4 w-full bg-white border border-modern-gray rounded-sm  outline-none"
          />
          <div className="flex items-center gap-1">
            <label
              htmlFor="customFileInput"
              className="bg-custom-white  py-0.5 px-1.5 text-slate-600  rounded-sm border border-modern-gray  cursor-pointer hover:text-black transition-all duration-150"
            >
              Choose file
            </label>
            <span className="text-gray-600 truncate max-w-50">
              No file Chosen
            </span>
            <input type="file" id="customFileInput" className="hidden" />
          </div>

          <button className="text-white mt-2 block rounded-xs w-full py-2.5 cursor-pointer bg-primary hover:ring-2 hover:ring-customBlue hover:bg-hover-color  hover:shadow-xl transition-all duration-150 ease-in-out shadow-md mb-5">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommonStudyCase;
