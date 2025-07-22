import Image from "next/image";
import React from "react";
import teamFranceIcon from "../../../../public/assets/team-france-export-svg.svg";
import Link from "next/link";
import { manrope } from "../../../libs/fonts";
const ExportFrance = () => {
  return (
    <div className="max-w-330 mx-auto px-2.5 max-lg:pt-36 pt-12.5 pb-20 flex flex-col gap-12">
      {/* <div className="max-w-390 mx-auto px-[3%] pt-[3%] max-xl:pt-32"> */}
      <Image
        src={teamFranceIcon}
        alt="teamFranceIcon"
        width={0}
        height={0}
        className="mx-auto"
      />
      <h1
        className={`${manrope.className} text-slate-800 max-md:text-3xl max-md:leading-9 text-6xl font-semibold leading-18 tracking-tightest`}
      >
        With 30+ years of experience, S&H Business Consultants is a trusted name
        in international business expansion, trade facilitation, and strategic
        consulting.
      </h1>
      <div className="text-black max-md:text-base text-lg space-y-3.5 mb-5">
        <p>
          As the{" "}
          <Link href={""} className="text-light-pink">
            official partner
          </Link>{" "}
          of Team France Export in Pakistan, we specialize in helping French
          companies explore, establish, and grow their presence in the Pakistani
          market while also assisting Pakistani businesses in expanding into
          France.
        </p>
        <p>
          Our expertise spans across market research, business matchmaking,
          regulatory compliance, and technology-driven business solutions,
          ensuring seamless international expansion for our clients.
        </p>
      </div>
    </div>
  );
};

export default ExportFrance;
