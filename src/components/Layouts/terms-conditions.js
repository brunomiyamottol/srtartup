import React, { useEffect, useState } from "react";
import "../../translate/i18n";

import axios from "axios";
import baseUrl from "../../utils/baseUrl";
import { TermTypeEnum } from "../../utils/TermTypeEnum";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Banner from "./Banner";
import FooterSession from "./FooterSession";
import BannerFooterSvg from "../svgs/BannerFooterSvg";

export default function TermsConditions() {
  const [termsAndConditions, setTermsAndConditions] = useState("");

  useEffect(() => {
    axios
      .get(`${baseUrl}/term/get-by-type`, {
        params: {
          termType: TermTypeEnum.TermsOfUse,
          culture: getLanguageNavigator(),
        },
      })
      .then((response) => {
        setTermsAndConditions(response.data.result.content);
      });
  }, []);

  function getLanguageNavigator() {
    const language = navigator.language.substring(0, 2).toLowerCase();

    switch (language) {
      case "en":
        return "en-US";

      case "es":
        return "es-MX";

      case "pt":
        return "pt-BR";

      default:
        return "en-US";
    }
  }

  return (
    <>
      <Navbar />
      <Banner />

      <div
        className="px-24 py-10 bg-white text-black"
        dangerouslySetInnerHTML={{
          __html: termsAndConditions,
        }}
      />

      <BannerFooterSvg />
      <FooterSession />
      <Footer />
    </>
  );
}
