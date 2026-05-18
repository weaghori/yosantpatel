"use client";
import { useEffect } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function About() {
  useEffect(() => {
    window.dispatchEvent(new Event('resize'));
    
    // Initialize Swiper if it exists (for the logos slider)
    if (typeof Swiper !== 'undefined') {
      new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        breakpoints: {
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        },
      });
    }
  }, []);

  return (
    <>


      <>
        {/* Full Width Slider Section */}
        <section className="section-block featured-media page-intro tm-slider-parallax-container">
          <div className="tm-slider-container full-width-slider" data-parallax data-parallax-fade-out
            data-animation="slide" data-scale-under="1140">
            <ul className="tms-slides">
              <li className="tms-slide" data-image data-as-bkg-image data-force-fit style={{ backgroundImage: "url('/images/slider/About-Kahani-Yosant-Patel.jpg')" }}>
                <div className="tms-content">
                  <div className="tms-content-inner left">
                    <div className="row">
                      <div className="column width-12">
                        <h1 className="tms-caption color-white inline"
                          data-animate-in="preset:slideInUpShort;duration:1000ms;delay:100ms;"
                          data-no-scale>
                          About Yosant Patel
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
                <img data-src="/images/slider/About-Kahani-Yosant-Patel.jpg" data-retina src="/images/blank.png" alt="" />
              </li>
            </ul>
          </div>
        </section>

        {/* Service Section */}
        <section className="section-block replicable-content about-ser-section">
          <div className="row">
            <div className="column width-3">
              <h3 className="mb-50">I transform brands for lasting success</h3>
            </div>
            <div className="column width-8 offset-1">
              <div className="row flex">
                <div className="grid-item no-margin-bottom">
                  <p>With 18+ years of extensive experience in the industry, I have built a focused
                    approach and clear vision to uplift brands. As a brand strategist and creative
                    director of a media agency, I have an inspiration to develop the brand.
                  </p>
                  <p>
                    I aim to establish your brand with market research to analyze the campaign and
                    provide solutions for your brand. Having expertise in graphic designing helps me
                    in crafting creative messages for better brand communication.
                  </p>
                  <p>
                    A brand consultant is like a coach, would guide brands through every phase and
                    provide solutions if it is a change in marketing strategy or rebranding. As a
                    brand strategist, it is my responsibility to help build and establish your brand
                    while understanding your brand’s core value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-block logos-1 small bkg-ygrey about-logos-section">
          <div className="row">
            <div className="column width-12">
              <img src="/images/Yosant_Patel_Branding_Design_Creativity_Boost_Your_Brand_Artist.jpg" alt="Descriptive Alt Text" />
            </div>
            <div className="column width-12" style={{ paddingTop: '40px' }}>
              <h2 className="lead color-black">My journey began in Rajkot Gujarat in 2004 with exploring and designing with a curiosity to create.</h2>
              <p className="color-black">From 2004 to 2016, I have gained experience in various jobs related to branding. In these years, I have built excellent skills for designing and transforming ideas into the best creative designs has been my forte.</p>
              <p className="color-black">While curiosity turned into a passion for developing brands, In 2017 began with a media agency, Aghori Media House. We build and connect with brands through creativity. Being a brand consultant, I strive to transform brands with the right approach, strategy, and thorough research. I provide the best results by finding the gaps within your brand.</p>
            </div>
          </div>
        </div>

        {/* Swiper Container */}
        <div className="section-block logos-1 small bkg-grey-ultralight about-logos-section">  
          <div className="row">
            <div className="column width-12">
              <div className="row">
                <div className="column">
                  <h6 className="weight-bold">Excellence via collaboration</h6>
                </div>
                <div className="column width-12">
                  <div className="swiper mySwiper">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide"><img src="/images/logos/Hina Gautam-Yosantpatel.svg" alt="Logo 1" /></div>
                      <div className="swiper-slide"><img src="/images/logos/Color-Yellow-Yosant-Patel-Logo.svg" alt="Logo 2" /></div>
                      <div className="swiper-slide"><img src="/images/logos/Noso-Funding-Yosant-Patel-Logo.svg" alt="Logo 3" /></div>
                      <div className="swiper-slide"><img src="/images/logos/Home-Decor-Expo-Exhibition-Yosant-Patel-Logo.svg" alt="Logo 4" /></div>
                      <div className="swiper-slide"><img src="/images/logos/DJ-Akki-Music-Yosant-Patel-Logo.svg" alt="Logo 5" /></div>
                      <div className="swiper-slide"><img src="/images/logos/My-Mobile-Smart-Yosant-Patel-Logo.svg" alt="Logo 6" /></div>
                      <div className="swiper-slide"><img src="/images/logos/Grandma's-Recipe-Yosant-Patel-Logo.svg" alt="Logo 7" /></div>
                      <div className="swiper-slide"><img src="/images/logos/The-Wine-Leaf-Resturant-Food-Yosant-Patel-Logo.svg" alt="Logo 8" /></div>
                      <div className="swiper-slide"><img src="/images/logos/Rajendra-Soda-Center-Cool-Yosant-Patel-Logo.svg" alt="Logo 9" /></div>
                      <div className="swiper-slide"><img src="/images/logos/Twins-Ansh-Aashi-Yosant-Patel-Logo.svg" alt="Logo 10" /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
