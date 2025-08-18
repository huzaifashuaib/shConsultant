import React from "react";
import CaseStudy from "../../components/commonCase/CommonStudyCase";

export const metadata = {
  title: "Case Study - Business Consultants",
  description:
    "Explore detailed case studies demonstrating the impact of our consulting services on client success across various industries.",
};
const page = () => {
  return (
    <div className="flex flex-col min-h-[calc(100vh-32px)] w-full">
      <main className="flex-1 flex items-center justify-center">
        <CaseStudy text={"case studies"} />
      </main>
    </div>
  );
};

export default page;
