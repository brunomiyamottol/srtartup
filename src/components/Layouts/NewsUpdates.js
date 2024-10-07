import React from "react";
import { useTranslation } from "react-i18next";

export default function WhatSetSession() {
  const { t } = useTranslation();

  return (
    <section id="kaariaNews" className="bg-white border-b py-8">
      <div className="container mx-auto flex flex-wrap pt-4 pb-12">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          {t("startupValuationNewsUpdatesTitle")}
        </h2>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>

        <div className="w-full sm:w-full md:w-2/4 lg:w-1/4 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <div className="w-full font-bold text-xl text-gray-800 px-6 mb-3">
              {t("startupValuationNewsUpdatesNews1Title")}
            </div>
            <p className="text-gray-800 text-base px-6 mb-5">
              {t("startupValuationNewsUpdatesNews1")}
            </p>
            <p className="text-gray-800 text-base px-6 mb-5">
              {t("startupValuationNewsUpdatesNews1cont")} 
            </p>
            <div class="w-full sm:w-full lg:w-3/5 py-6 flex flex-wrap justify-center lg:justify-end" style={{ zIndex: 1 }}>
            <img style={{ maxWidth: "75%", maxHeight:"50%" }} src="/images/KaariaJionsNvidiaInceptionProgram.png" /> 
          </div>
          </div>
        </div>

        {/* <div className="w-full sm:w-full md:w-2/4 lg:w-1/4 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <div className="w-full font-bold text-xl text-gray-800 px-6 mb-3">
              {t("startupValuationNewsUpdatesNews2")}
            </div>
            <p className="text-gray-800 text-base px-6 mb-5">{t("startupValuationInstantReportsDescription")}</p>
          </div>
        </div>

        <div className="w-full sm:w-full md:w-2/4 lg:w-1/4 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <div className="w-full font-bold text-xl text-gray-800 px-6 mb-3">{t("startupValuationReliableData")}</div>
            <p className="text-gray-800 text-base px-6 mb-5">{t("startupValuationReliableDataDescription")}</p>
          </div>
        </div> */}
      </div>
    </section>
  );
}
