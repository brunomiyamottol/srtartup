import React from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <footer style={{ backgroundColor: "#2d2a2a" }}>
        <div className="container mx-auto px-8">
          <div className="w-full flex flex-col lg:flex-row py-6">
            <div className="flex-1 mb-6 text-black">
              <a className="text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
                <img
                  className="fill-current inline"
                  height="50px"
                  width="50px"
                  src="/images/brands/KAARIA-Brandmark-RGB-Small.png"
                  alt="logo"
                />
                KAARIA
              </a>
            </div>
            <div className="flex-1">
              <p className="uppercase text-white-500 md:mb-6">{t("links")}</p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="https://app.kaaria.ai/"
                    target="_blank"
                    className="no-underline hover:underline"
                    style={{ color: "#3DE8FF" }}
                  >
                    {t("login")}
                  </a>
                </li>
              </ul>
              
            </div>
            <div className="flex-1">
              <p className="uppercase text-white-500 md:mb-6">{t("legal")}</p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="https://app.kaaria.ai/#/terms-conditions"
                    target="_blank"
                    className="no-underline hover:underline text-white-800 hover:text-pink-500"
                  >
                    {t("termsConditionsOfUse")}
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="https://app.kaaria.ai/#/privacy/"
                    target="_blank"
                    className="no-underline hover:underline text-white-800 hover:text-pink-500"
                  >
                    {t("privacyPolicy")}
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <p className="uppercase text-white-500 md:mb-6 w-4/5">{t("kaariaSocialMedia")}</p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <div className="flex">
                    <a
                      href="https://www.instagram.com/kaaria__net/"
                      target="_blank"
                      className="no-underline hover:underline text-white-800 hover:text-pink-500 mx-1"
                    >
                      <img src="/images/instagram_svg.svg" style={{ height: 30 }} />
                    </a>

                    <a
                      href="https://www.linkedin.com/company/kaarias/"
                      target="_blank"
                      className="no-underline hover:underline text-white-800 hover:text-pink-500 mx-1"
                    >
                      <img src="/images/linkedin_svg.svg" style={{ height: 30 }} />
                    </a>

                    <a
                      href="https://twitter.com/KaariaAi"
                      target="_blank"
                      className="no-underline hover:underline text-white-800 hover:text-pink-500 mx-1"
                    >
                      <img src="/images/twitterx_svg.svg" style={{ height: 30, color: "white" }} />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              {/* <p className="uppercase text-white-500 md:mb-6">{t("company")}</p> */}
              <ul className="list-reset mb-6">
              <span className="mr-2">{t("kognitNorthAmerica") }</span>
                {/* <li className="inline-block mr-2 md:block md:mr-0">
                  <a
                    href=""
                    target="_blank"
                    className="no-underline hover:underline text-white-800 hover:text-pink-500"
                  >
                    {t("Kaaria Corp. Kent County, Delaware, Dover, DE 19901")}
                  </a>
                </li> */}
                <li className="mt-8 inline-block mr-2 md:block md:mr-0">
                  <div className="flex items-center">
                    {/* <span className="mr-2">{t("talkToUs")}</span>
                    <a
                      href="https://api.whatsapp.com/send?phone=525580033038"
                      target="_blank"
                      className="no-underline hover:underline text-white-800 hover:text-pink-500"
                    >
                      <img src="/images/whatsapp.svg" style={{ height: 50 }} />
                    </a> */}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-4 mt-4">
          <div
            className="text-white-800"
            dangerouslySetInnerHTML={{ __html: t("copyright", { year: new Date().getFullYear() }) }}
          />
        </div>
      </footer>
    </>
  );
}
