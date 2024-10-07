import React from "react";
import { useTranslation } from "react-i18next";
import GetSrtartedNow from "../Layouts/GetStarted";

export default function GetFundedStartups() {
  const { t } = useTranslation();

  return (
    <section id="startupsheader" className="bg-white border-b py-8">
      <a href="https://app.kaaria.ai/#/login?createAccount=true" target="blank">
      <div className="container mx-auto flex flex-wrap pt-4 pb-12">
        {/* <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div> */}
        <div className="w-full sm:w-full md:w-2/4 lg:w-1/4 p-6 flex flex-col flex-grow flex-shrink">
          <img style={{ maxWidth: "100%", maxHeight:"auto" }} src="/images/startups/getfundedstartups.png" /> 
        </div>
       
      </div>
      </a>
    </section>
  );
}
