import "../../node_modules/react-modal-video/css/modal-video.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
// import "../styles/style.css";
// import "../styles/responsive.css";
import "../styles/custom-styles.css";

import React from "react";
import App from "next/app";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import * as gtag from '../utils/gtag';
import Script from 'next/script';



export default class MyApp extends App {
  
  // Preloader
  state = {
    loading: true,
  };
  componentDidMount() {
    this.timerHandle = setTimeout(() => this.setState({ loading: false }), 2000);
  }
  componentWillUnmount() {
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <link rel="icon" type="image/png" href="/images/favicon.png"></link>

          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <title>Kaaria - Startup Valuation</title>
          <meta
            name="description"
            content="Kaaria an online platform for startup valuation. Our technology enables entrepreneurs and investors to truly understand what drives their valuation, transparently discuss it, and make good equity decisions. "
          />
          <meta name="keywords" content="" />
          <meta name="author" content="" />

          <link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css" />
          <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700" rel="stylesheet" />


          <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TAG}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
              {/* Google Analytics */}
              <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />

      <script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="2ab75663-4215-475a-b69d-46bd34e3c1b4"  type="text/javascript"></script>
      <script id="CookieDeclaration" src="https://consent.cookiebot.com/2ab75663-4215-475a-b69d-46bd34e3c1b4/cd.js" type="text/javascript" async></script>
          {/* <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          ></script> */}
          {/* <script
            async
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');`,
            }}
          /> */}
        </Head>

        <Analytics />

        <Component {...pageProps} />
      </>
    );
  }
}
