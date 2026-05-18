'use client';
import { usePathname } from 'next/navigation';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

export default function RootLayoutShell({ children }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  
  // Dynamic body class
  const bodyClass = `shop home-page ${isHomePage ? 'main-page' : ''}`;

  return (
    <body className={bodyClass}>
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
          {/* Conditionally wrap content based on page type to match HTML project structure */}
          {isHomePage ? children : (
            <div className="content clearfix">
              {children}
            </div>
          )}
          <Footer />
        </div>
      </div>

      {/* Scripts */}
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
          (function() {
            var loader = document.querySelector("#loader");
            var body = document.body;
            
            function hideLoader() {
              if (loader) loader.style.display = "none";
              body.style.visibility = "visible";
            }

            if (document.readyState === "complete") {
              hideLoader();
            } else {
              body.style.visibility = "hidden";
              if (loader) loader.style.visibility = "visible";
              window.addEventListener('load', hideLoader);
              setTimeout(hideLoader, 5000);
            }
            
            document.onreadystatechange = function () {
              if (document.readyState === "complete") {
                hideLoader();
              }
            };
          })();
        `}
      </Script>

      <Script id="swiper-init" strategy="afterInteractive">
        {`
          (function() {
            function initSwiper() {
              if (typeof Swiper !== 'undefined' && document.querySelector(".mySwiper")) {
                new Swiper(".mySwiper", {
                  slidesPerView: "auto",
                  loop: true,
                  speed: 3000,
                  autoplay: {
                    delay: 0,
                    disableOnInteraction: false,
                  },
                  allowTouchMove: false,
                  grabCursor: false,
                });
              }
            }
            // Use both immediate check and DOMContentLoaded
            if (document.readyState === "complete") {
              initSwiper();
            } else {
              window.addEventListener('load', initSwiper);
            }
          })();
        `}
      </Script>

      <Script id="bottom-to-top" strategy="afterInteractive">
        {`
          (function() {
            function initBottomToTop() {
              var btn = document.querySelector("#bottom_top");
              if (btn) {
                window.addEventListener('scroll', function() {
                  if (window.scrollY > 300) {
                    btn.classList.add("show");
                  } else {
                    btn.classList.remove("show");
                  }
                });
                btn.addEventListener('click', function(e) {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                });
              }
            }
            if (document.readyState === "complete") {
              initBottomToTop();
            } else {
              window.addEventListener('load', initBottomToTop);
            }
          })();
        `}
      </Script>
    </body>
  );
}
