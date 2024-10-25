import React from "react";
import { useTranslation } from "react-i18next";
import FormSubscribe from "../Layouts/FormSubscribe";
import ScheduleADemo from "../Layouts/ScheduleADemo";
import GetSrtartedNow from "../Layouts/GetStarted";

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="bg-white  py-8">
      <div className="container max-w-5xl mx-auto m-8">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          {t("investorDetailsTitle")}
        </h2>
        <p className="text-gray-800 text-center px-6 mb-5">{t("investorDetailsSubTitle")}</p>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>

        <div className="flex flex-wrap sm:flex-row">
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <img style={{  maxWidth: "100%", maxHeight:"85%"}} src="/images/abstracts/valuationanalysis.png" />
          </div>
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <div className="align-middle mt-16">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                {t("investorDetailsOneTitle")}
              </h3>
              <p className="text-gray-600 mb-8" >{}</p>
              <div
                className="text-gray-600 mb-8 text-justify"
                dangerouslySetInnerHTML={{ __html: t("investorDetailsOneDetails") }}
              />
            </div>
            <ScheduleADemo/>
          </div>
        </div>

        <div className="flex flex-wrap flex-col-reverse sm:flex-row">
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <div className="align-middle">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                {t("investorDetailsTwoTitle")}
              </h3>
              <p className="text-gray-600 mb-8" >{}</p>
              <div
                className="text-gray-600 mb-8 text-justify"
                dangerouslySetInnerHTML={{ __html: t("investorDetailsTwoDetails") }}
              />
            </div>
            {/* <FormSubscribe key={Math.random()} isBanner={false} titleButton={t("subscribeNow")} /> */}
            <GetSrtartedNow />
          </div>
          <div className="w-full sm:w-1/2 p-1 flex justify-center">
            <img style={{ maxWidth: "100%", maxHeight:"85%"  }}src="/images/abstracts/standarddealflow.png" />
          </div>
        </div>

        <div className="flex flex-wrap sm:flex-row">
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <img style={{ maxWidth: "100%", maxHeight:"85%"  }} src="/images/abstracts/howitworks.png" />
          </div>
          <div className="w-full sm:w-1/2 p-6 mt-16">
            <div className="align-middle">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                {t("investorDetailsThreeTitle")}
              </h3>
              <p
                className="text-gray-600 mb-8 text-justify"
                dangerouslySetInnerHTML={{ __html: t("investorDetailsThreeDetails") }}
              />

            <ScheduleADemo/>    
            </div>
          </div>
        </div>
        <div className="flex flex-wrap flex-col-reverse sm:flex-row">
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <div className="align-middle">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                {t("investorDetailsFourTitle")}
              </h3>
              <p className="text-gray-600 mb-8" >{}</p>
              <div
                className="text-gray-600 mb-8 text-justify"
                dangerouslySetInnerHTML={{ __html: t("investorDetailsFourDetails") }}
              />
            </div>
            {/* <FormSubscribe key={Math.random()} isBanner={false} titleButton={t("subscribeNow")} /> */}
            <GetSrtartedNow />
          </div>
          <div className="w-full sm:w-1/2 p-1 flex justify-center">
            <img style={{ maxWidth: "100%", maxHeight:"85%"  }} src="/images/abstracts/benefitsinvstors.png" />
          </div>
        </div>
      </div>
    </section>
  );
}
