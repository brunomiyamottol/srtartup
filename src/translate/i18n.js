import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ptbr from "./ptbr.json";
import enus from "./enus.json";
import esmx from "./esmx.json";
import detector from "i18next-browser-languagedetector";

const resources = {
  pt: {
    translation: ptbr,
  },
  en: {
    translation: enus,
  },
  es: {
    translation: esmx,
  },
};

const DETECTION_OPTIONS = {
  order: ["navigator"],
};

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    detection: DETECTION_OPTIONS,
    resources,
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    fallbackLng: "en",
  });

export default i18n;
