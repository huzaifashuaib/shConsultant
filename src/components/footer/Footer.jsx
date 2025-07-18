import Link from "next/link";
import React from "react";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="pt-[15px] pb-[10px] md:pt-[1px]">
      <div className="flex flex-col md:flex-row items-center ">
        <p className="text-[#1e293b] text-[14px] md:pt-[1%] p-2.5 md:p-0 mt-[4%] md:mt-[2%] md:px-[4%] xl:mt-[15px] w-full text-center ">
          Copyright © {year} S&H Business Consultants &{" "}
          <Link href={""} className="text-[#c36]">
            Privacy Policy
          </Link>
        </p>

        <div className="btn flex justify-center md:justify-end pt-[2%] px-[10%] md:pt-[1%] md:px-[4%] w-full ">
          <Link href={""} className="p-2.5 bg-[#002494] text-white rounded-sm ">
            <MdEmail size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
