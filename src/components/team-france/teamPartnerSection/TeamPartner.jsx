import Image from "next/image";
import React from "react";
import partnerTem from "../../../../public/assets/team-partner-png.webp";
import Link from "next/link";
import SlideUpWrapper from "../../SlideUpWrapper";

const partnerText = [
  "Market Entry Support - Helping French companies understand the Pakistani market, its regulatory landscape, and key business opportunities.",
  "B2B Matchmaking - Connecting French businesses with reliable distributors, suppliers, and business partners in Pakistan. Regulatory & Compliance Assistance - Ensuring that French businesses meet local standards, certifications, and operational requirements.",
  "Trade & Investment Support - Identifying high-potential investment opportunities and facilitating bilateral trade partnerships.",
  "Technology & Business Transformation - Offering AI-driven insights, digital solutions, and market intelligence for effective decision-making.",
];

const TeamPartner = () => {
  return (
    <SlideUpWrapper className="max-w-330 flex flex-col md:flex-row items-center md:max-lg:items-start md:gap-2 mx-auto py-10 md:pb-20 ">
      <div className="md:w-[70%] p-2.5">
        <h1 className="md:text-4xl text-3xl font-semibold mb-3">
          Our Partnership with Team France Export
        </h1>
        <p className="mb-3.5 text-base md:text-lg text-slate-400 ">
          As the{" "}
          <Link
            href={""}
            className="text-light-pink hover:text-slate-700 transition-all ease-in-out duration-200"
          >
            official partner
          </Link>{" "}
          of Team France Export in Pakistan, S&H Business Consultants acts as
          the local bridge between France and Pakistan, facilitating:
        </p>
        <ul className="mb-8">
          {partnerText.map((text, index) => (
            <li
              key={index}
              className="text-slate-400 text-base md:text-lg leading-relaxed list-disc list-outside ml-6"
            >
              {text}
            </li>
          ))}
        </ul>
        <p className="text-slate-400 mb-3.5 text-base md:text-lg">
          This partnership ensures that French companies can confidently expand
          into Pakistan with expert local support, while Pakistani businesses
          gain access to the French market through trusted channels.
        </p>
      </div>

      <Image
        src={partnerTem}
        alt="partner"
        className="md:w-[30%]"
        width={0}
        height={0}
      />
    </SlideUpWrapper>
  );
};

export default TeamPartner;
