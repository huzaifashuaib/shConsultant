"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdEmail } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const Footer = () => {
  const year = new Date().getFullYear();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);

  const handleBookNowClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row items-center py-2.5 md:max-w-390 gap-2 mx-auto md:px-15 md:py-4">
        <p className="text-slate-800 text-sm w-full max-md:text-center max-md:p-2.5 max-lg:mt-[4%] ">
          {/* <p className="text-slate-800 text-sm 2xl:w-full max-2xl:w-5/6 max-md:text-center max-md:p-2.5 max-lg:mt-[4%] "> */}
          Copyright © {year} S&H Business Consultants &{" "}
          <Link
            href={""}
            className="text-light-pink cursor-pointer hover:text-slate-700 transition-all ease-in-out duration-200 "
          >
            Privacy Policy
          </Link>
        </p>

        {/* <Link
          href={"#main"}
          className="p-2.5 font-bold bg-primary cursor-pointer hover:ring-2 hover:ring-customBlue hover:bg-hover-color hover:shadow-sm transition-all duration-150 ease-in-out text-white rounded-sm"
        >
          <MdEmail size={15} />
        </Link> */}
      </div>

      <button
        onClick={handleBookNowClick}
        className=" fixed bottom-3.75 cursor-pointer right-5 hover:ring-2 hover:ring-customBlue hover:bg-hover-color  bg-primary hover:shadow-xl transition-all duration-150 ease-in-out text-white font-bold text-sm px-7 py-3 rounded-3xl z-40"
      >
        Book a call
      </button>

      {showModal && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]"
          onClick={handleCloseModal}
        >
          <div className="relative w-full max-md:mx-2 max-w-2xl h-[80%] bg-white rounded-xl shadow-xl p-4 pt-15">
            <button
              className="absolute top-3 right-4 text-gray-500 hover:text-red-500 cursor-pointer"
              onClick={handleCloseModal}
            >
              <RxCross2 size={24} />
            </button>
            <iframe
              src="https://calendly.com/saadmahmud/into-call?embed_domain=localhost&embed_type=Inline"
              width="100%"
              height="100%"
              className="rounded-lg "
              title="Calendly Inline Embed"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
