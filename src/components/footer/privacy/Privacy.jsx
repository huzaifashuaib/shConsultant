"use client";
import React from "react";
import { privacyPolicy } from "./privacyData";

const PrivacyPolicyPage = () => {
  const { effectiveDate, sections } = privacyPolicy;

  return (
    <div className="max-w-345 mx-auto p-2.5 w-full max-md:mt-30 min-md:max-lg:mt-22 max-md:mb-15 lg:mt-35 mb-8">
      <h1 className="text-4xl text-custom-black font-semibold text-center">
        Privacy Policy
      </h1>
      <p className="text-[28px] text-black font-semibold mt-2 mb-4">
        Effective Date: {effectiveDate}
      </p>

      {/* Sections */}
      {sections.map((section, index) => (
        <div key={index} className="mb-3.5">
          <h2 className="text-base font-bold mb-3.5">{section.title}</h2>
          {section.subTitle && (
            <h2 className="text-base mb-3.5">{section.subTitle}</h2>
          )}

          {section.content && (
            <p className="text-base mb-3.5">{section.content}</p>
          )}

          {section.list && (
            <ul className="list-none space-y-3.5">
              {section.list.map((item, idx) => {
                const parts = item.split(":");
                return (
                  <li key={idx} className="before:content-['–'] before:mr-1 ">
                    {parts.length > 1 && parts[1].trim() ? (
                      <span>
                        <span className="text-base font-bold">{parts[0]}:</span>{" "}
                        {parts.slice(1).join(":")}
                      </span>
                    ) : (
                      <span className="text-base">{item}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
          {section.contact && (
            <div className="space-y-3.5">
              <p className="text-base">{section.contact.company}</p>
              <p className="text-base">[{section.contact.address}]</p>
              <p>Email: [{section.contact.email}]</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PrivacyPolicyPage;
