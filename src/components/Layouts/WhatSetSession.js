import React from "react";
import { useTranslation } from "react-i18next";

export default function WhatSetSession() {
  const { t } = useTranslation();

  return (
    <section className="bg-white border-b py-8">
      <div className="container mx-auto flex flex-wrap pt-4 pb-12">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          {t("startupValuationWhatSetsKaariaApart")}
        </h2>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>

        <div className="w-full sm:w-full md:w-2/4 lg:w-1/4 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <div className="w-full font-bold text-xl text-gray-800 px-6 mb-3">
              {t("startupValuationComprehensiveValuations")}
            </div>
            <p className="text-gray-800 text-base px-6 mb-5">
              {t("startupValuationComprehensiveValuationsDescription")}
            </p>
          </div>
        </div>

        <div className="w-full sm:w-full md:w-2/4 lg:w-1/4 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <div className="w-full font-bold text-xl text-gray-800 px-6 mb-3">
              {t("startupValuationInstantReports")}
            </div>
            <p className="text-gray-800 text-base px-6 mb-5">{t("startupValuationInstantReportsDescription")}</p>
          </div>
        </div>

        <div className="w-full sm:w-full md:w-2/4 lg:w-1/4 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <div className="w-full font-bold text-xl text-gray-800 px-6 mb-3">{t("startupValuationReliableData")}</div>
            <p className="text-gray-800 text-base px-6 mb-5 text-justify">{t("startupValuationReliableDataDescription")}</p>
          </div>
        </div>

        <div className="w-full sm:w-full md:w-2/4 lg:w-1/4 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <div className="w-full font-bold text-xl text-gray-800 px-6 mb-3">{t("startupValuationBenchmarking")}</div>
            <p className="text-gray-800 text-base px-6 mb-5 text-justify">{t("startupValuationBenchmarkingDescription")}</p>
          </div>
        </div>

        {/* <div className="mt-8">
          <h1 className="my-4 text-3xl font-bold text-black text-center">{t("startupValuationKaariaCommitment")}</h1>
          <p className="text-lg mb-8 text-black text-center">{t("startupValuationKaariaCommitmentDescription")}</p>
        </div> */}

        {/* <div>
          <h1 className="my-4 text-3xl font-bold text-black text-center">{t("startupValuationKaariaMission")}</h1>
          <p className="text-lg mb-8 text-black text-center">{t("startupValuationKaariaMissionDescription")}</p>
        </div> */}
      </div>
    </section>
  );
}
