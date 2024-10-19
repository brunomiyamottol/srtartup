import React from "react";
import { useTranslation } from "react-i18next";

export default function WhatSetSession() {
  const { t } = useTranslation();

  function handleOpenModal() {
    // Track the event before opening the modal
    window.gtag('event', 'open_modal', {
     event_category: 'User Interaction',
     event_label: 'Video Modal',
     value: 1,
   });
 
     window.open(stateVideoURL, "_blank");
   }


  return (
    <section className="bg-white border-b py-8">
      <div className="container mx-auto flex flex-wrap pt-4 pb-12">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          {t("startupValuationWhyKaariaH2")}
        </h1>
        <p className="text-gray-800 text-base px-6 mb-5">
              {t("startupValuationWhyKaariaText1")}
        </p>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        
        <div class="w-full sm:w-2/2 p-1 flex justify-center">
            <img style={{ height: "30rem", width:"auto" }} src="/images/WhyKaariaSection/img1.png" />
        </div>

        <div  className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
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
      </div>
    </section>
  );
}
