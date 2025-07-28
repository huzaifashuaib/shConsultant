"use client";

import Image from "next/image";
import React, { useState } from "react";
import flag from "../../../public/assets/pakfrance.webp";
import SlideUpWrapper from "../SlideUpWrapper";
import { FaSpinner } from "react-icons/fa";
const sectors = [
  { name: "what are you looking for?", value: "" },
  { name: "Aeronautical", value: "aeronautical" },
  { name: "Agriculture", value: "agriculture" },
  { name: "Communication", value: "communication" },
  { name: "Construction", value: "construction" },
  { name: "Cosmetics", value: "cosmetics" },
  { name: "Energy", value: "energy" },
  {
    name: "Extraction of raw materials",
    value: "extraction-of-raw-materials",
  },
  { name: "Farming/fishing", value: "farming-fishing" },
  { name: "Financial Services", value: "financial-services" },
  { name: "Healthcare", value: "healthcare" },
  { name: "Hospitality and Leisure", value: "hospitality-and-leisure" },
  { name: "Import and Export", value: "import-and-export" },
  { name: "Information Technology", value: "information-technology" },
  { name: "Manufacturing", value: "manufacturing" },
  { name: "Public Sector", value: "public-sector" },
  { name: "Real Estate", value: "real-estate" },
  { name: "Research and Development", value: "research-and-development" },
  { name: "Retail", value: "retail" },
  { name: "Social Services", value: "social-services" },
  { name: "Software Development", value: "software-development" },
  { name: "Transport", value: "transport" },
  { name: "Wholesale and Retail", value: "wholesale-and-retail" },
];

const CommonStudyCase = ({ text }) => {
  const [formData, setFormData] = useState({
    about: "",
    name: "",
    companyName: "",
    email: "",
    describe: "",
    fileName: "",
  });
  const [isloading, setIsLoading] = useState(false);

  const handleFieldChange = (e) => {
    setIsLoading(true);
    const fieldName = e.target.name;
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
    setIsLoading(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        fileName: file.name,
      }));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      about: "",
      name: "",
      companyName: "",
      email: "",
      describe: "",
      fileName: "",
    });
  };

  return (
    <SlideUpWrapper className="max-w-345 mx-auto md:p-5 w-full max-md:mt-30 min-md:max-lg:mt-22 max-md:mb-15 lg:mt-35">
      <h1 className="text-3xl md:text-4xl text-slate-800 font-semibold p-2.5 uppercase">
        {text}
      </h1>
      <div className="flex flex-col md:flex-row max-md:px-[2%]">
        <Image
          src={flag}
          alt="flag"
          width={0}
          height={0}
          className="object-cover w-full p-2.5 md:w-1/2"
        />

        <form
          action=""
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-3 p-2.5  h-full md:w-1/2"
        >
          <select
            name="about"
            value={formData.about}
            onChange={handleFieldChange}
            className="py-2 px-4 w-full bg-white border text-slate-600 border-modern-gray rounded-sm outline-none"
          >
            {sectors.map(({ name, value }, index) => (
              <option key={index} value={value}>
                {name}
              </option>
            ))}
          </select>
          <input
            value={formData.name}
            placeholder="Name"
            type="text"
            name="name"
            onChange={handleFieldChange}
            className="py-2 text-slate-600 px-4 w-full bg-white border border-modern-gray  rounded-sm outline-none"
          />
          <input
            value={formData.companyName}
            name="companyName"
            placeholder="Company name"
            type="text"
            onChange={handleFieldChange}
            className=" py-2 px-4 w-full text-slate-600 bg-white border border-modern-gray  rounded-sm outline-none"
          />
          <input
            value={formData.email}
            name="email"
            placeholder="Email"
            type="email"
            onChange={handleFieldChange}
            className=" py-2 px-4 w-full text-slate-600 bg-white border border-modern-gray  rounded-sm outline-none"
          />
          <textarea
            value={formData.describe}
            name="describe"
            onChange={handleFieldChange}
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
              {formData.fileName || "No file Chosen"}
            </span>
            <input
              type="file"
              id="customFileInput"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>

          <button
            type="submit"
            className="text-white mt-2 block rounded-xs w-full py-2.5 cursor-pointer bg-primary hover:ring-2 hover:ring-customBlue hover:bg-hover-color  hover:shadow-xl transition-all duration-150 ease-in-out shadow-md mb-5"
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
      </div>
    </SlideUpWrapper>
  );
};

export default CommonStudyCase;
