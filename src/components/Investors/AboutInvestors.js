import React from "react";
import { useTranslation } from "react-i18next";
import FormSubscribe from "../Layouts/FormSubscribe";
import ScheduleADemo from "../Layouts/ScheduleADemo";
import GetSrtartedNow from "../Layouts/GetStarted";

export default function About() {
  const { t } = useTranslation();

  return (
    <section class="bg-white  py-8">
      <div class="container max-w-5xl mx-auto m-8">
        <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          {t("investorDetailsTitle")}
        </h2>
        <p className="text-gray-800 text-center px-6 mb-5">{t("investorDetailsSubTitle")}</p>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>

        <div class="flex flex-wrap sm:flex-row">
          <div class="w-full sm:w-1/2 p-6 mt-6">
            <img style={{  maxWidth: "100%", maxHeight:"85%"}} src="/images/abstracts/valuationanalysis.png" />
          </div>
          <div class="w-full sm:w-1/2 p-6 mt-6">
            <div class="align-middle mt-16">
              <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
                {t("investorDetailsOneTitle")}
              </h3>
              <p class="text-gray-600 mb-8" >{}</p>
              <div
                class="text-gray-600 mb-8 text-justify"
                dangerouslySetInnerHTML={{ __html: t("investorDetailsOneDetails") }}
              />
            </div>
            <ScheduleADemo/>
          </div>
        </div>

        <div class="flex flex-wrap flex-col-reverse sm:flex-row">
          <div class="w-full sm:w-1/2 p-6 mt-6">
            <div class="align-middle">
              <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
                {t("investorDetailsTwoTitle")}
              </h3>
              <p class="text-gray-600 mb-8" >{}</p>
              <div
                class="text-gray-600 mb-8 text-justify"
                dangerouslySetInnerHTML={{ __html: t("investorDetailsTwoDetails") }}
              />
            </div>
            {/* <FormSubscribe key={Math.random()} isBanner={false} titleButton={t("subscribeNow")} /> */}
            <GetSrtartedNow />
          </div>
          <div class="w-full sm:w-1/2 p-1 flex justify-center">
            <img style={{ maxWidth: "100%", maxHeight:"85%"  }}src="/images/abstracts/standarddealflow.png" />
          </div>
        </div>

        <div class="flex flex-wrap sm:flex-row">
          <div class="w-full sm:w-1/2 p-6 mt-6">
            <img style={{ maxWidth: "100%", maxHeight:"85%"  }} src="/images/abstracts/howitworks.png" />
          </div>
          <div class="w-full sm:w-1/2 p-6 mt-16">
            <div class="align-middle">
              <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
                {t("investorDetailsThreeTitle")}
              </h3>
              <p
                class="text-gray-600 mb-8 text-justify"
                dangerouslySetInnerHTML={{ __html: t("investorDetailsThreeDetails") }}
              />

            <ScheduleADemo/>    
            </div>
          </div>
        </div>
        <div class="flex flex-wrap flex-col-reverse sm:flex-row">
          <div class="w-full sm:w-1/2 p-6 mt-6">
            <div class="align-middle">
              <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
                {t("investorDetailsFourTitle")}
              </h3>
              <p class="text-gray-600 mb-8" >{}</p>
              <div
                class="text-gray-600 mb-8 text-justify"
                dangerouslySetInnerHTML={{ __html: t("investorDetailsFourDetails") }}
              />
            </div>
            {/* <FormSubscribe key={Math.random()} isBanner={false} titleButton={t("subscribeNow")} /> */}
            <GetSrtartedNow />
          </div>
          <div class="w-full sm:w-1/2 p-1 flex justify-center">
            <img style={{ maxWidth: "100%", maxHeight:"85%"  }} src="/images/abstracts/benefitsinvstors.png" />
          </div>
        </div>
      </div>
    </section>
  );
}
