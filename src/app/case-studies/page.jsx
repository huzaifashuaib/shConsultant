import React from "react";
import CaseStudy from "../../components/commonCase/CommonStudyCase";
const page = () => {
  return (
    <div className="flex flex-col min-h-[calc(100vh-58px)] w-full">
      <main className="flex-1 flex items-center justify-center">
        <CaseStudy text={"case studies"} />
      </main>
    </div>
  );
};

export default page;
