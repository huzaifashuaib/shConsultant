"use client";
import Image from "next/image";
import React, { useState } from "react";
import footerWorld from "../../../../public/assets/footerworld.png";
import SlideUpWrapper from "../../SlideUpWrapper";
import { FaSpinner } from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isloading, setIsLoading] = useState(false);
  const handleFieldChange = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setIsLoading(false);
  };

  return (
    <div id="contactSection" className="footerBackground">
      <SlideUpWrapper className="pt-[10%] max-md:px-[6%] px-[3%] lg:pt-[5%] xl:pt-[4%]">
        <h1 className="text-3xl md:text-4xl text-center mb-3 font-semibold md:font-bold text-slate-800">
          Let&apos;s Talk
        </h1>
        <p className="text-slate-600 text-lg text-center mb-9 md:mb-10 lg:mb-12 ">
          We&apos;re always happy to hear from anyone interested in working with
          or for us. Please use the dropdown form below to get in touch!
        </p>
      </SlideUpWrapper>

      <form
        onSubmit={handleSubmit}
        className="w-full lg:max-w-257 mx-auto px-[4%]"
      >
        <div className="w-full mb-6 flex gap-2 flex-col lg:flex-row">
          <div className="w-full">
            <label
              htmlFor=""
              className="text-base font-bold text-dark-brown flex gap-1 pb-1.5"
            >
              Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleFieldChange}
              className=" py-3 px-2.5 w-full bg-white border border-slate-300 rounded-sm outline-none"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor=""
              className="text-base font-bold text-dark-brown flex gap-1 pb-1.5"
            >
              Email Address <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleFieldChange}
              className=" py-3 px-2.5 w-full bg-white border border-slate-300 rounded-sm outline-none"
            />
          </div>
        </div>
        <div className="mb-7 md:mb-9">
          <label
            htmlFor=""
            className="text-base font-bold text-dark-brown flex gap-1 pb-1.5"
          >
            Message <span className="text-red-600">*</span>
          </label>
          <textarea
            value={formData.message}
            name="message"
            onChange={handleFieldChange}
            rows={4}
            className=" py-3 px-2.5 w-full bg-white border border-slate-300 rounded-md resize-none outline-none"
          />
        </div>

        <button
          type="submit"
          className="text-white block rounded-md w-full py-3 cursor-pointer bg-primary hover:ring-2 hover:ring-customBlue hover:bg-hover-color   transition-all duration-150 ease-in-out  mb-5"
        >
          {isloading ? (
            <span className="flex items-center justify-center gap-4">
              <FaSpinner className="animate-spin h-6 w-6 text-light-gray" />
            </span>
          ) : (
            "Submit"
          )}
        </button>
      </form>

      <Image
        src={footerWorld}
        alt="World Image"
        width={0}
        height={0}
        className="mx-auto"
      />
    </div>
  );
};

export default ContactSection;
