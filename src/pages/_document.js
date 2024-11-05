import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";
import { GA_TRACKING_ID } from "../utils/gtag";


class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" type="image/png" href="/images/favicon.png"></link>
          <link
            rel="stylesheet"
            href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700"
          />
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
          <script
            id="gtag-consent-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                function allConsentGranted() {
                  gtag('consent', 'update', {
                    'ad_user_data': 'granted',
                    'ad_personalization': 'granted',
                    'ad_storage': 'granted',
                    'analytics_storage': 'granted'
                  });
                }
              `,
            }}
          />      
          <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TAG}`}
        />
        <script
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
          {/* Global Site Tag (gtag.js) - Google Analytics */}
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
                gtag('config', '${process.env.GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){ s1=document.createElement("script"); s0=document.getElementsByTagName("script")[0]; s1.async=true; s1.src='https://embed.tawk.to/6435b3cc4247f20fefeb1214/1gtoug2an'; s1.charset='UTF-8'; s1.setAttribute('crossorigin','*'); s0.parentNode.insertBefore(s1,s0) })();                    
          `,
            }}
          ></script>
          {/* Cookiebot Script */}
          <script id="CookieDeclaration" src="https://consent.cookiebot.com/2ab75663-4215-475a-b69d-46bd34e3c1b4/cd.js" type="text/javascript" async></script>
          <script
          async
          src={`https://consent.cookiebot.com/uc.js?cbid=2ab75663-4215-475a-b69d-46bd34e3c1b4&f=sync&lang=en`}
          type="text/javascript"
        ></script>
          <script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="2ab75663-4215-475a-b69d-46bd34e3c1b4" data-blockingmode="auto" type="text/javascript"></script>
        
          <script
                id="clarity-script"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `(function(c,l,a,r,i,t,y){
                        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                    })(window, document, "clarity", "script", "otlsxosvgu");`
                }}
            />
        </Head>
        <body
          className="leading-normal tracking-normal text-white gradient"
          style={{ fontFamily: "Source Sans Pro, sans-serif" }}
        >
          {/* GTM body noscript */}
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}"
                      height="0" width="0" style="display:none;visibility:hidden"></iframe>`, // replace 'YOUR_GTM_ID' with your actual GTM ID
            }}
          />

          <Main />
          <NextScript />

          <footer>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
          </footer>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
