import React from "react";
import { useTranslation } from "react-i18next";
import FormSubscribe from "./FormSubscribe";
import ScheduleADemo from "./ScheduleADemo";
import GetSrtartedNow from "./GetStarted";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id='startups' class="bg-white py-8">
      <div class="container max-w-5xl mx-auto m-8">
        <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          {t("startupValuationForStartupsTitle")}
        </h2>
        <p className="text-gray-800 text-center px-6 mb-5">{t("startupValuationForStartupsSubTitle")}</p>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>

        <div class="flex flex-wrap   sm:flex-row">
          <div class="w-full sm:w-1/2 p-6 mt-6">
            <img style={{  maxWidth: "100%", maxHeight:"100%"}} src="/images/HighValuationStartups.png" />
          </div>
          <div class="w-full sm:w-1/2 p-6 mt-6">
            <div class="align-middle">
              <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
                {t("startupValuationForStartupsValuationTitleHigh")}
              </h3>
              {/* <p class="text-gray-600 mb-8" >{t("startupValuationDetailsMessageInnovationDescription")}</p> */}
              <div
                class="text-gray-600 mb-8"
                dangerouslySetInnerHTML={{ __html: t("startupValuationForStartupsValuationContentsHigh") }}
              />
            </div>
            <ScheduleADemo/>
          </div>
        </div>

        <div class="flex flex-wrap flex-col-reverse sm:flex-row">
          <div class="w-full sm:w-1/2 p-6 mt-6">
            <div class="align-middle">
              <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
                {t("startupValuationForStartupsValuationIntangiblesTitle")}
              </h3>
              <div
                class="text-gray-600 mb-8"
                dangerouslySetInnerHTML={{ __html: t("startupValuationForStartupsValuationIntangiblesContents") }}
              />
            </div>
            {/* <FormSubscribe key={Math.random()} isBanner={false} titleButton={t("subscribeNow")} /> */}
            <GetSrtartedNow />
          </div>
          <div class="w-full sm:w-1/2 p-6 mt-6">
            <img style={{  maxWidth: "100%", maxHeight:"100%"}} src="/images/Intangibles.png" />
          </div>
        </div>

        <div class="flex flex-wrap sm:flex-row">
          <div class="w-full sm:w-1/2 p-6 mt-6">
            <img style={{ maxWidth: "100%", maxHeight:"100%"  }} src="/images/FinancialsCalc.png" />
          </div>
          <div class="w-full sm:w-1/2 p-6 mt-6">
            <div class="align-middle">
              <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
                {t("startupValuationForStartupsValuationTransparentFiancialCalculationsTitle")}
              </h3>
              <p
                class="text-gray-600 mb-8"
                dangerouslySetInnerHTML={{ __html: t("startupValuationForStartupsValuationTransparentFiancialCalculationsContents") }}
              />
              <p
                class="text-gray-600 mb-8"
                dangerouslySetInnerHTML={{ __html: t("startupValuationForStartupsValuationTransparentFiancialCalculationsContents1") }}
              />

            <ScheduleADemo/>    
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
