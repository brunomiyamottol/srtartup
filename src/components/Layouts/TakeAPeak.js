import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import dynamic from "next/dynamic";

const ModalVideo = dynamic(() => import("react-modal-video"), {
  ssr: false,
});

const VideoUrl = {
  ["en"]: "https://kaaria-files.s3.amazonaws.com/KaariaImages/kaaria_startup_valuation_platform.png",
  ["es"]: "https://kaaria-files.s3.amazonaws.com/KaariaImages/kaaria_startup_valuation_platform_es-MX.png",
  ["pt"]: "https://kaaria-files.s3.amazonaws.com/KaariaImages/kaaria_startup_valuation_platform_pt-BR.png",
};

export default function TakeAPeak() {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const [stateVideoURL, setStateVideoURL] = useState("");

  useEffect(() => {
    const browserShortLanguage = navigator?.language?.substring(0, 2)?.toLowerCase();
    const video = VideoUrl[browserShortLanguage ?? "en"] ?? VideoUrl["en"];

    setStateVideoURL(video);
  }, []);

  function handleOpenModal() {
    // setIsOpen(true);

    window.open(stateVideoURL, "_blank");
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="mt-5 flex justify-center">
        {/* <button
          onClick={handleOpenModal}
          style={{ marginRight: 10 }}
          class="gradient mx-auto lg:mx-0 hover:underline text-white font-bold rounded-full lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
        >
          {t("startupValuationTakeAPeak")}
        </button> */}
        <button
          onClick={handleOpenModal}
          class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
        >
          {t("talkToUs")}
        </button>
      </div>

      {/* <ModalVideo channel="custom" isOpen={isOpen} url={stateVideoURL} onClose={handleCloseModal} />; */}
    </>
  );
}
