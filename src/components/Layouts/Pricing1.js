import React from "react";
import { useTranslation } from "react-i18next";
import FormSubscribe from "./FormSubscribe";
import ScheduleADemo from "./ScheduleADemo";
import GetSrtartedNow from "./GetStarted";


const stateVideoURL = "https://app.kaaria.ai/login?createAccount=true"


export default function About() {
  const { t } = useTranslation();

  function handleOpenModal() {
    // Track the event before opening the modal
    window.gtag('event', 'open_modal', {
     event_category: 'User Interaction',
     event_label: 'Video Modal',
     value: 2,
   });
 
     window.open(stateVideoURL, "_blank");
   }
 

  return (
    <section class="bg-white border-b py-8">
      <div id="GetValuation" class="container max-w-5xl mx-auto m-8">
        <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          {t("startupValuationDetailsTitle")}
        </h2>
        <p className="text-gray-800 text-center px-6 mb-5">{t("startupValuationDetailsSubtitle")}</p>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>

        <div class="flex flex-wrap flex-col-reverse sm:flex-row">
        <div class="w-full sm:w-2/2 p-1 flex justify-center">
            <img style={{ height: "auto", width:"auto" }} src="/images/pricing_v1.png" />
          </div>

          {/* <div class="w-full sm:w-1/2 p-6 mt-6">
            <div class="align-middle">
              <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
                {t("startupValuationDetailsMessageBeAhead")}
              </h3>
              <div
                class="text-gray-600 mb-8"
                dangerouslySetInnerHTML={{ __html: t("startupValuationDetailsMessageBeAheadDescription") }}
              />
            </div>
            <FormSubscribe key={Math.random()} isBanner={false} titleButton={t("subscribeNow")} />
            <GetSrtartedNow />
          </div> */}

        </div>
        <div>
          <h3 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          <div className="mt-5 mb-6 flex justify-center">
              <button
                onClick={handleOpenModal}
                class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
              >
                {"Start Your Free Trial."}
              </button>
            </div>
         </h3>
        </div> 


        <div class="flex flex-wrap sm:flex-row">
          <div class="w-full sm:w-1/2 p-6 mt-6">
              <h2 class="text-3xl text-center text-gray-800 font-bold leading-none mb-3">
                {t("startupValuationYourVsMarket")}
              </h2>
            <img style={{  maxWidth: "100%", maxHeight:"auto"}} src="/images/YourValuation.png" />
          </div>
          <div class="w-full sm:w-1/2 p-6 mt-6">
              <h2 class="text-3xl text-center text-gray-800 font-bold leading-none mb-3">
                {t("startupValuationYourVsCompetitors")}
              </h2>
            <img style={{  maxWidth: "100%", maxHeight:"auto"}} src="/images/GetAvgValBands.png" />
          </div>
          <div class="w-full sm:w-2/2 p-6 mt-6">
            <div class="align-middle">
            <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                {t("startupValuationDetailsMessageInnovation")}
              </h2>
              {/* <p class="text-gray-600 mb-8" >{t("startupValuationDetailsMessageInnovationDescription")}</p> */}
              <div
                class="text-3xl text-gray-600 mb-8"
                dangerouslySetInnerHTML={{ __html: t("startupValuationDetailsMessageInnovationDescription") }}
              />
            </div>
            <div>
          <h3 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          <div className="mt-5 mb-6 flex justify-center">
              <button
                onClick={handleOpenModal}
                class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
              >
                {"Start Your Free Trial"}
              </button>
            </div>
         </h3>
          </div> 
          </div>
        </div>



        {/* <div class="flex flex-wrap sm:flex-row">
          <div class="w-full sm:w-1/2 p-6 mt-6">
            <img style={{ maxWidth: "100%", maxHeight:"85%"  }} src="/images/methodologiesPyramid0.png" />
          </div>
          <div class="w-full sm:w-1/2 p-6 mt-6">
            <div class="align-middle">
              <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
                {t("startupValuationDetailsMessageSuccess")}
              </h3>
              <p
                class="text-gray-600 mb-8"
                dangerouslySetInnerHTML={{ __html: t("startupValuationDetailsMessageSuccessDescription") }}
              />

            <ScheduleADemo/>    
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
