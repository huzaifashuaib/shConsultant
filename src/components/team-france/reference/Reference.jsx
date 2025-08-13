import Link from "next/link";
import React from "react";

const Reference = () => {
  return (
    <div className="bg-light-gray py-5" id="reference">
      <div className="max-w-330 mx-auto px-2.5 flex flex-col gap-2">
        <h1 className="text-base font-semibold">References</h1>
        <ul>
          <li className="list-disc list-inside ml-4 text-sm">
            <Link
              href={
                "https://www.teamfrance-export.fr/services-etranger/prospecter-snh-business-consultants-pakistan"
              }
              className="text-light-pink hover:text-slate-700 transition-all ease-in-out duration-200"
            >
              Team France Export
            </Link>
          </li>
          <li className="list-disc list-inside ml-4 text-sm">
            <Link
              href={"https://pk.ambafrance.org/Partenaire-Team-France-Export"}
              className="text-light-pink hover:text-slate-700 transition-all ease-in-out duration-200"
            >
              Embassy of France
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Reference;
