import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

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

          {/* GTM Head script */}
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                      })(window,document,'script','dataLayer', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS});`,
            }}
          /> */}

          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){ s1=document.createElement("script"); s0=document.getElementsByTagName("script")[0]; s1.async=true; s1.src='https://embed.tawk.to/6435b3cc4247f20fefeb1214/1gtoug2an'; s1.charset='UTF-8'; s1.setAttribute('crossorigin','*'); s0.parentNode.insertBefore(s1,s0) })();
          
          
          `,
            }}
          ></script>
        </Head>
        <body
          className="leading-normal tracking-normal text-white gradient"
          style={{ fontFamily: "Source Sans Pro, sans-serif" }}
        >
          {/* GTM body noscript */}
          {/* <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}"
                      height="0" width="0" style="display:none;visibility:hidden"></iframe>`, // replace 'YOUR_GTM_ID' with your actual GTM ID
            }}
          /> */}

          <Main />
          <NextScript />

          <footer>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

            {/* <script
              dangerouslySetInnerHTML={{
                __html: `_linkedin_partner_id = "${process.env.NEXT_PUBLIC_LINKEDIN_INSIGHT_TAG}";
                    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
                    window._linkedin_data_partner_ids.push(_linkedin_partner_id);`,
              }}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `(function(l) {
                      if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
                      window.lintrk.q=[]}
                      var s = document.getElementsByTagName("script")[0];
                      var b = document.createElement("script");
                      b.type = "text/javascript";b.async = true;
                      b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                      s.parentNode.insertBefore(b, s);})(window.lintrk);`,
              }}
            />
            <noscript
              dangerouslySetInnerHTML={{
                __html: `<img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=${process.env.NEXT_PUBLIC_LINKEDIN_INSIGHT_TAG}&fmt=gif" />`,
              }}
            /> */}
          </footer>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
