import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import TakeAPeak from "./TakeAPeak";
import ScheduleADemo from "./ScheduleADemo";
import GetSrtartedNow from "./GetStarted";

export default function Counter() {
  const { t } = useTranslation();

  const [stateCounter, setStateCounter] = useState({
    days: "",
    hours: "",
    minutes: "",
    seconds: "",
    isOpen: false,
  });

  useEffect(() => {
    let myInterval = setInterval(() => {
      commingSoonTime();
    }, 1000);

    return () => {
      clearInterval(myInterval);
    };
  }, []);

  const commingSoonTime = () => {
    let endTime = new Date("August 30, 2024 12:00:00 PDT");
    let endTimeParse = Date.parse(endTime) / 1000;
    let now = new Date();
    let nowParse = Date.parse(now) / 1000;
    let timeLeft = endTimeParse - nowParse;
    let days = Math.floor(timeLeft / 86400);
    let hours = Math.floor((timeLeft - days * 86400) / 3600);
    let minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    let seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);
    if (hours < "10") {
      hours = "0" + hours;
    }
    if (minutes < "10") {
      minutes = "0" + minutes;
    }
    if (seconds < "10") {
      seconds = "0" + seconds;
    }

    setStateCounter({
      days,
      hours,
      minutes,
      seconds,
    });
  };

  return (
    <section class="bg-gray-100 py-8">
      <div class="container mx-auto px-2 pt-4 pb-12 text-gray-800">
        <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          {t("startupValuationLauchingSoon")}
        </h2>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>

        <div class="flex justify-center pt-12 my-12">
          <div id="timer" class="flex">
            <div
              id="days"
              class="text-2xl md:text-7xl lg:text-9xl flex flex-col items-center mx-6 sm:mx-10 md:mx-12 lg:mx-12"
            >
              <span>{stateCounter.days}</span>
              <span class="text-base mt-2">{t("startupValuationDays")}</span>
            </div>
            <div
              id="hours"
              class="text-2xl md:text-7xl lg:text-9xl flex flex-col items-center mx-6 sm:mx-10 md:mx-12 lg:mx-12"
            >
              <span>{stateCounter.hours}</span>
              <span class="text-base mt-2">{t("startupValuationHours")}</span>
            </div>
            <div
              id="minutes"
              class="text-2xl md:text-7xl lg:text-9xl flex flex-col items-center mx-6 sm:mx-10 md:mx-12 lg:mx-12"
            >
              <span>{stateCounter.minutes}</span>
              <span class="text-base mt-2">{t("startupValuationMinutes")}</span>
            </div>
            <div
              id="seconds"
              class="text-2xl md:text-7xl lg:text-9xl flex flex-col items-center mx-6 sm:mx-10 md:mx-12 lg:mx-12"
            >
              <span>{stateCounter.seconds}</span>
              <span class="text-base mt-2">{t("startupValuationSeconds")}</span>
            </div>
          </div>
        </div>
      </div>

      <GetSrtartedNow />
    </section>
  );
}
