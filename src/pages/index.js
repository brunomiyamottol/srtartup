import React, { useEffect } from "react";
import "../translate/i18n";
import { SideBarEffect } from "../utils/SideBarEffect";

import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import Banner from "../components/Layouts/Banner";
import About from "../components/Layouts/About";
import WhyKaariaSection from "../components/Layouts/WhyKaariaSection"; 
import Counter from "../components/Layouts/Counter";
import ForStartups from "../components/Layouts/ForStartups";
import NewsUpdates from "../components/Layouts/NewsUpdates";
import FooterSession from "../components/Layouts/FooterSession";
import WhatSetSession from "../components/Layouts/WhatSetSession";
import Pricing from "../components/Layouts/Pricing1"
import HeaderStartups from "../components/StartUps/HeaderStartups";
import GetFundedStartups from "../components/StartUps/GetFundedStartups";
import HeaderInvestors from "../components/Investors/HeaderInvestors";
import AboutInvestors from "../components/Investors/AboutInvestors";
import StartInvestingInvestors from "../components/Investors/StartInvestingInvestors";
import BannerFooterSvg from "../components/svgs/BannerFooterSvg";
import { ImportExport } from "@material-ui/icons";

export default function Index() {
  useEffect(() => {
    SideBarEffect();
  }, []);

  return (
    <>
      <Navbar />
      <Banner />
      <WhyKaariaSection />
      <About />

      <WhatSetSession />
      <Pricing />
      {/* <Counter /> */}
      {/* <HeaderStartups /> */}
      {/* <ForStartups /> */}
      {/* <GetFundedStartups/>
      <HeaderInvestors /> */}
      {/* <AboutInvestors /> */}
      {/* <StartInvestingInvestors /> */}
      {/* <NewsUpdates /> */}
      {/* <BannerFooterSvg /> */}
      {/* <FooterSession /> */}
      <Footer />
    </>
  );
}
