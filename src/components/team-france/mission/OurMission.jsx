import React from "react";
import SlideUpWrapper from "../../SlideUpWrapper";

const OurMission = () => {
  const supportPoints = [
    "Strengthen France-Pakistan Business Relations - Encouraging collaboration between French and Pakistani enterprises.",
    "Facilitate Trade & Investment - Creating opportunities for sustainable economic growth.",
    "Support Business Expansion - Providing companies with the tools, strategies, and connections they need to succeed in a competitive international market.",
    "Promote Innovation & Digital Transformation - Helping businesses leverage technology, AI, and digital strategies to enhance their global reach.",
  ];

  return (
    <div className="bg-dark-blue shadow-bg py-10 overflow-hidden">
      <SlideUpWrapper className="max-w-330 mx-auto p-2.5">
        <h1 className="md:text-4xl max-md:text-3xl text-white font-semibold mb-3.5">
          Our Missions & Objectives
        </h1>
        <p className="text-base md:text-lg text-slate-400 mb-3.5">
          Through our partnership with Team France Export, our mission is to:
        </p>
        <ul>
          {supportPoints.map((text, index) => (
            <li
              key={index}
              className="text-base md:text-lg text-slate-400 list-disc list-outside ml-6"
            >
              {text}
            </li>
          ))}
        </ul>
      </SlideUpWrapper>
    </div>
  );
};

export default OurMission;
