import React from "react";
import { useTranslation } from "react-i18next";

export default function StartupHeder() {
  const { t } = useTranslation();

  return (
    <section id="investorsheader" className="bg-white  py-10">
      <div className="container mx-auto flex flex-wrap pt-4 pb-12">
      <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
      FOR INVESTORS
      </h2>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="w-full sm:w-full md:w-2/4 lg:w-1/4 p-6 flex flex-col flex-grow flex-shrink">
          <img style={{ maxWidth: "100%", maxHeight:"100%" }} src="/images/investors/investorsheader1.png" /> 
        </div>
      </div>
    </section>
  );
}
