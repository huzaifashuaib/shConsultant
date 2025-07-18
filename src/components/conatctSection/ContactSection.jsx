import Image from "next/image";
import React from "react";
import footerWorld from "../../../public/assets/footerworld.png";

const ContactSection = () => {
  return (
    <div className="footerBackground">
      <div className="pt-[5%] px-[4%] lg:pt-[2%]">
        <div className="pt-[10%] px-[4%] md:pt-0 md:px-0">
          <h1 className="text-3xl md:text-4xl text-center mb-3 font-semibold md:font-bold text-[#1e293b]">
            Let&apos;s Talk
          </h1>
          <p className="text-[#475569] text-[18px] text-center mb-9 md:mb-10 lg:mb-12 ">
            We&apos;re always happy to hear from anyone interested in working
            with or for us. Please use the dropdown form below to get in touch!
          </p>
        </div>
      </div>

      <div className="w-full flex items-center justify-center px-[4%]">
        <form className="w-full  lg:w-1/2">
          <div className="w-full mb-[25px] flex gap-2 flex-col lg:flex-row">
            <div className="w-full">
              <label
                htmlFor=""
                className="text-base font-bold text-[#333] flex gap-1 pb-[5px]"
              >
                Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                className=" shadow-md py-3 px-2.5 w-full bg-white border border-[#CBD5E1] rounded-sm"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor=""
                className="text-base font-bold text-[#333] flex gap-1 pb-[5px]"
              >
                Email Address <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                className=" shadow-md py-3 px-2.5 w-full bg-white border border-[#CBD5E1] rounded-sm"
              />
            </div>
          </div>
          <div className="mb-7 md:mb-9">
            <label
              htmlFor=""
              className="text-base font-bold text-[#333] flex gap-1 pb-[5px]"
            >
              Message <span className="text-red-600">*</span>
            </label>
            <textarea
              name=""
              id=""
              rows={4}
              className="shadow-sm py-3 px-2.5 w-full bg-white border border-[#CBD5E1] rounded-md resize-none
"
            />
          </div>
          <div className="mb-5">
            <button className="text-white block rounded-md w-full min-h-[40px] bg-[#002494] shadow-sm">
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="flex justify-center">
        <Image src={footerWorld} alt="footerWorldBack" width={0} height={0} />
      </div>
    </div>
  );
};

export default ContactSection;
