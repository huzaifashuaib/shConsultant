import React from "react";
import ListDistributor from "../../components/commonCase/CommonStudyCase";

export const metadata = {
  title: "List of Distributors - Business Consultants",
};
const page = () => {
  return (
    <div className="flex flex-col min-h-[calc(100vh-58px)] w-full">
      <main className="flex-1 flex items-center justify-center ">
        <ListDistributor text={"List of Distributors"} />
      </main>
    </div>
  );
};

export default page;
