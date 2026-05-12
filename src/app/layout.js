import Script from "next/script";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";

export const metadata = {
  title: "Get Best Branding Advice From The Best Brand Consultancy in Mumbai | Official Site",
  description: "I am one of the leading brand consultant and branding strategist in Mumbai providing expert branding solutions regarding all the branding needs",
  keywords: "BRAND CONSULTATION,BRAND STRATEGY,BRAND COMMUNICATION,BRAND IDENTITY,BRAND DEVELOPMENT,BRAND EXPERIENCE,REBRANDING",
  openGraph: {
    type: "website",
    title: "Get Best Branding Advice From The Best Brand Consultancy in Mumbai | Official Site",
    description: "I am one of the leading brand consultant and branding strategist in Mumbai providing expert branding solutions regarding all the branding needs",
    url: "https://weaghori.com/contact.html",
    siteName: "Yosant Patel",
    images: ["/images/FAVICON.png"],
  },
  twitter: {
    card: "summary",
    title: "Get Best Branding Advice From The Best Brand Consultancy in Mumbai | Official Site",
    description: "I am one of the leading brand consultant and branding strategist in Mumbai providing expert branding solutions regarding all the branding needs",
    images: ["/images/FAVICON.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,700%7CLato:300,400,700' rel='stylesheet' type='text/css' />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/css/core.min.css" />
        <link rel="stylesheet" href="/css/skin-web-application.css" />
        <link rel="shortcut icon" href="/images/FAVICON.png" type="image/x-icon" />
      </head>
      <body className="shop home-page main-page">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-PSXB8DV" 
            height="0" width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        
        <div id="loader" className="center"></div>

        <div className="wrapper reveal-side-navigation">
          <div className="wrapper-inner">
            <Header />
            {children}
            <Footer />
          </div>
        </div>

        {/* Scripts */}
        <Script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js" strategy="beforeInteractive" />
        <Script src="/js/timber.master.min.js" strategy="afterInteractive" />
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function (w, d, s, l, i) {
              w[l] = w[l] || [];
              w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
              });
              var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
              j.async = true;
              j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
              f.parentNode.insertBefore(j, f);
            })(window, document, 'script', 'dataLayer', 'GTM-PSXB8DV');
          `}
        </Script>
        <Script id="loader-script" strategy="afterInteractive">
          {`
            document.onreadystatechange = function () {
              if (document.readyState !== "complete") {
                document.querySelector("body").style.visibility = "hidden";
                document.querySelector("#loader").style.visibility = "visible";
              } else {
                document.querySelector("#loader").style.display = "none";
                document.querySelector("body").style.visibility = "visible";
              }
            };
          `}
        </Script>
      </body>
    </html>
  );
}
