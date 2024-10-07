import React from "react";
import { useTranslation } from "react-i18next";
import FormSubscribe from "./FormSubscribe";
import GetSrtartedNow from "./GetStarted";
import ScheduleADemo from "./ScheduleADemo";
import TakeAPeak from "./TakeAPeak";

export default function FooterSession() {
  const { t } = useTranslation();

  const handleClickRedirectProjectFinance = () => {
    window.open("https://profin.kaaria.ai/", "_blank");
  };

  return (
    <section class="container mx-auto text-center py-6 mb-12">
      <h2 class="w-full my-2 text-2xl md:text-5xl font-bold leading-tight text-center text-white">
        {t("startupValuationKaariaMessage")}
      </h2>
      <div class="w-full mb-4">
        <div class="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
      </div>

      <div className="flex justify-center">
        <div className="w-full md:w-4/5 flex justify-center">
          <h3 class="my-4 text-md md:text-3xl leading-tight">{t("startupValuationKaariaMessageDescription")}</h3>
        </div>
      </div>

      {/* <div className="flex justify-center">
        <div className="md:w-3/5 w-full flex justify-center">
          <FormSubscribe key={Math.random()} isBanner titleButton={t("subscribeNow")} />
        </div>
      </div> */}
      <TakeAPeak />

      {/* <div className="flex justify-center">
        <div className="w-full md:w-4/5 flex justify-center">
          <h3 class="my-4 text-2xl md:text-3xl leading-tight">{t("lookingForProjectFinance")}</h3>
        </div>
      </div> */}

      {/* <div className="flex justify-center">
        <button
          onClick={handleClickRedirectProjectFinance}
          class="mx-auto w-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
        >
          {t("projectFinance")}
        </button>
      </div> */}
      {/* <ScheduleADemo /> */}
    </section>
  );
}
