import Link from "next/link";
import React from "react";

const Reference = () => {
  return (
    <div className="bg-light-gray py-5">
      <div className="max-w-330 mx-auto px-2.5 flex flex-col gap-2">
        <h1 className="text-base font-semibold">References</h1>
        <ul>
          <li className="flex items-start gap-1">
            <span className="size-1 rounded-full bg-black mt-2.5 mr-1 ml-4 "></span>
            <Link href={""} className="text-light-pink text-sm">
              Team France Export
            </Link>
          </li>
          <li className="flex items-start gap-1">
            <span className="size-1 rounded-full bg-black mt-2.5 mr-1 ml-4"></span>
            <Link href={""} className="text-light-pink text-sm">
              Embassy of France
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Reference;
