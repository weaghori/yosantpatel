'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

export default function RootLayoutShell({ children }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  // Scroll to top and wake up lazy loaders/reveals on every client-side page navigation
  useEffect(() => {
    window.scrollTo(0, 0);
    
    let timer;
    let script;
    let checkJQuery;

    const injectTimber = () => {
      // Clear previous jQuery listeners on window/document to avoid cumulative scroll/resize overhead
      if (typeof window !== 'undefined' && window.jQuery) {
        window.jQuery(window).off();
        window.jQuery(document).off();
      }

      // Dispatch scroll & resize events after DOM content renders
      timer = setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
        window.dispatchEvent(new Event('scroll'));
        
        // If legacy jQuery components exist on page, fire their scroll & resize handlers
        if (typeof window !== 'undefined' && window.jQuery) {
          window.jQuery(window).trigger('resize');
          window.jQuery(window).trigger('scroll');
        }
      }, 150);

      // Inject timber.master.min.js dynamically so it re-evaluates on route change
      // without busting the browser cache, ensuring sliders/animations initialize.
      script = document.createElement('script');
      script.src = '/js/timber.master.min.js';
      script.async = false;
      document.body.appendChild(script);
    };

    // Check if jQuery is loaded. If not, poll until it is.
    if (typeof window !== 'undefined' && window.jQuery) {
      injectTimber();
    } else {
      checkJQuery = setInterval(() => {
        if (typeof window !== 'undefined' && window.jQuery) {
          clearInterval(checkJQuery);
          injectTimber();
        }
      }, 50);
    }

    return () => {
      if (checkJQuery) clearInterval(checkJQuery);
      if (timer) clearTimeout(timer);
      if (script && document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [pathname]);
  
  // Dynamic body class
  const bodyClass = `shop home-page ${isHomePage ? 'main-page' : ''}`.trim();

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
      
      {/* Timber master script is injected via useEffect to ensure re-evaluation */}
    </body>
  );
}
