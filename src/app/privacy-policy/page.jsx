import React from "react";
import Privacy from "../../components/footer/privacy/Privacy";
const page = () => {
  return (
    <div className="flex flex-col min-h-[calc(100vh-58px)] w-full">
      <main className="flex-1 flex ">
        <Privacy />
      </main>
    </div>
  );
};

export default page;
