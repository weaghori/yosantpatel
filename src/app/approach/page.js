"use client";
import { useEffect } from 'react';

export default function Approach() {
  useEffect(() => {
    window.dispatchEvent(new Event('resize'));
  }, []);

  return (
    <>
      {/* Full Width Slider Section */}
      <section className="section-block featured-media page-intro tm-slider-parallax-container">
        <div className="tm-slider-container full-width-slider" data-parallax data-parallax-fade-out
          data-animation="slide" data-scale-under="1140">
          <ul className="tms-slides">
            <li className="tms-slide" data-image data-as-bkg-image data-force-fit style={{ backgroundImage: "url('/images/slider/Approach-Yosant-Patel.jpg')" }}>
              <div className="tms-content">
                <div className="tms-content-inner left">
                  <div className="row">
                    <div className="column width-12">
                      <h1 className="tms-caption color-white inline"
                        data-animate-in="preset:slideInUpShort;duration:1000ms;delay:100ms;"
                        data-no-scale>
                        Approach
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <img data-src="/images/slider/Approach-Yosant-Patel.jpg" data-retina src="/images/blank.png" alt="" />
            </li>
          </ul>
        </div>
      </section>

      {/* Service Section */}
      <section className="section-block replicable-content approach-ser-section">
        <div className="row">
          <div className="column width-3">
            <h3 className="mb-50">The finest approach caters to brand success</h3>
          </div>
          <div className="column width-8 offset-1">
            <div className="row flex">
              <div className="grid-item no-margin-bottom">
                <p>Aligning business strategy with market trends is the optimum approach for your
                  brand. My approach with brands is quite simple and precise. It includes thorough
                  research, generating innovative ideas, and planning strategies. I like to create
                  ideas and strategies with my clients. Brainstorming together helps to understand
                  each other.
                </p>
                <p>I like to create ideas and strategies with my clients. Brainstorming together
                  helps to understand each other.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach grid Section start */}
      <section className="Approach_grid">
        <div className="section-block hero-5 hero-5-2 show-media-column-on-mobile bkg-ygrey tmh-perspective pt-50 block-content new-block-cont ">
          <div className="media-column width-6 horizon"
            data-animate-in="preset:slideInLeftShort;duration:1000ms;delay:200ms;" data-threshold="0.6">
            <img src="/images/Approach/Brand-Research-01.jpg" className="media-column width-12 center " alt="" />
          </div>
          <div className="row">
            <div className="column width-5 push-7">
              <div className="hero-content split-hero-content new-mobile-split">
                <div className="hero-content-inner left hero-mobile-content">
                  <h2 className="color-black ">BRAND RESEARCH</h2>
                  <div className="color-black" style={{ margin: 0 }}>
                    <p>Research is the first step to building and enriching a
                      brand. I provide solutions, strategies, and innovative ideas with my
                      research methods to establish an identity for your brand.</p>
                    <ul className="color-black">
                      <li>Brand Name</li>
                      <li>Marketing Advice</li>
                      <li>Package Advice</li>
                      <li>Target audience/acquisition strategy</li>
                      <li>Creative Analysis </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-block right hero-5 hero-5-2 show-media-column-on-mobile tmh-perspective pt-50 block-content new-block-cont">
          <div className="media-column width-6 center horizon"
            data-animate-in="preset:slideInRightShort;duration:1000ms;delay:200ms;" data-threshold="0.6">
            <img src="/images/Approach/Brand-Strategy-02.jpg" className="media-column width-12 center " alt="" />
          </div>
          <div className="row">
            <div className="column width-5 ">
              <div className="hero-content split-hero-content new-mobile-split">
                <div className="hero-content-inner left hero-mobile-content">
                  <h2 className=" lead ">BRAND STRATEGY</h2>
                  <p className=" lead ">To confront the growing markets and competitors, your brand
                    needs to stand out and plan a strategy on customers’ needs and expectations. I
                    help you generate ideas and strategies customized to your brand.</p>
                  <ul>
                    <li>Customised Brand Strategy</li>
                    <li>Brand Architecture</li>
                    <li>Brand Construction</li>
                    <li>Brand Vision </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-block hero-5 hero-5-2 show-media-column-on-mobile bkg-ygrey tmh-perspective pt-50 block-content new-block-cont">
          <div className="media-column width-6 horizon"
            data-animate-in="preset:slideInLeftShort;duration:1000ms;delay:200ms;" data-threshold="0.6">
            <img src="/images/Approach/Branding-and-other-Creatives-03.jpg" className="media-column width-12 center " alt="" />
          </div>
          <div className="row">
            <div className="column width-5 push-7">
              <div className="hero-content split-hero-content new-mobile-split">
                <div className="hero-content-inner left hero-mobile-content">
                  <h2 className="color-black lead ">BRANDING AND OTHER CREATIVES</h2>
                  <p className="color-black lead ">
                    With 16+ years of substantial experience in the industry, I have expertise
                    in graphic designing and branding. I help you with creating innovative messages
                    with a vision - relevant to your target audience.</p>
                  <ul className="color-black">
                    <li>Social Media Development</li>
                    <li>Official Launches</li>
                    <li>Brand Visuals</li>
                    <li>Brand Identity</li>
                    <li>Campaigns Executions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-block right hero-5 hero-5-2 show-media-column-on-mobile tmh-perspective pt-50 block-content new-block-cont">
          <div className="media-column width-6 center horizon"
            data-animate-in="preset:slideInRightShort;duration:1000ms;delay:200ms;" data-threshold="0.6">
            <img src="/images/Approach/Brand-Management-04.jpg" className="media-column width-12 center " alt="" />
          </div>
          <div className="row">
            <div className="column width-5 ">
              <div className="hero-content split-hero-content new-mobile-split">
                <div className="hero-content-inner left hero-mobile-content">
                  <h2 className=" lead ">BRAND MANAGEMENT</h2>
                  <p className=" lead ">Brand Management is one of the essential parts for a good
                    image of your brand. Your brand’s identity should be intact in the market. I guide
                    you to build more loyal customers.</p>
                  <ul>
                    <li>Branding Solutions</li>
                    <li>Digital Marketing Strategy</li>
                    <li>Researching Market Trends</li>
                    <li>Brand Awareness</li>
                    <li>Brand Equity</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-block hero-5 hero-5-2 show-media-column-on-mobile bkg-ygrey tmh-perspective pt-50 block-content new-block-cont">
          <div className="media-column width-6 horizon"
            data-animate-in="preset:slideInLeftShort;duration:1000ms;delay:200ms;" data-threshold="0.6">
            <img src="/images/Approach/Envision-05.jpg" className="media-column width-12 center " alt="" />
          </div>
          <div className="row">
            <div className="column width-5 push-7">
              <div className="hero-content split-hero-content new-mobile-split">
                <div className="hero-content-inner left hero-mobile-content">
                  <h2 className="color-black lead ">ENVISION</h2>
                  <p className="color-black lead ">Turning your brand research data into your brand
                    vision strategy is ideally a brand envision. By envisioning your brand, I help you
                    create effective communication closer to your brand’s core value.</p>
                  <ul className="color-black">
                    <li>Business Strategy</li>
                    <li>Market Trend Analysis</li>
                    <li>Core Message Development</li>
                    <li>Professional Brand Experience</li>
                    <li>Appealing Packaging design </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-block right hero-5 hero-5-2 show-media-column-on-mobile tmh-perspective pt-50 block-content new-block-cont">
          <div className="media-column width-6 center horizon"
            data-animate-in="preset:slideInRightShort;duration:1000ms;delay:200ms;" data-threshold="0.6">
            <img src="/images/Approach/Explore-06.jpg" className="media-column width-12 center " alt="" />
          </div>
          <div className="row">
            <div className="column width-5 ">
              <div className="hero-content split-hero-content new-mobile-split">
                <div className="hero-content-inner left hero-mobile-content">
                  <h2 className=" lead ">EXPLORE</h2>
                  <p className=" lead "> Customer feedback and perception is an essential factor for
                    any brand. I help you to get customer reactions and maintain a good brand
                    experience.</p>
                  <ul>
                    <li>Customer Feedback Research</li>
                    <li>Brand Assessment</li>
                    <li>Brand Image Review</li>
                    <li>Consumer Insight Research</li>
                    <li>Brand’s Market Rank Assessment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-block hero-5 hero-5-2 show-media-column-on-mobile bkg-ygrey tmh-perspective pt-50 block-content new-block-cont">
          <div className="media-column width-6 horizon"
            data-animate-in="preset:slideInLeftShort;duration:1000ms;delay:200ms;" data-threshold="0.6">
            <img src="/images/Approach/Execute-07.jpg" className="media-column width-12 center " alt="" />
          </div>
          <div className="row">
            <div className="column width-5 push-7">
              <div className="hero-content split-hero-content new-mobile-split">
                <div className="hero-content-inner left hero-mobile-content">
                  <h2 className="color-black lead ">EXECUTE</h2>
                  <p className="color-black lead ">
                    Execution is taking all the planning into action. With my consultation, I
                    help you throughout the process to make your experience smooth and hassle-free.</p>
                  <ul className="color-black">
                    <li>Unique Brand Identity</li>
                    <li>Product Design</li>
                    <li>Website Construction</li>
                    <li>Corporate Identity</li>
                    <li>Marketing Execution</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-block right hero-5 hero-5-2 show-media-column-on-mobile tmh-perspective pt-50 block-content new-block-cont">
          <div className="media-column width-6 center horizon"
            data-animate-in="preset:slideInRightShort;duration:1000ms;delay:200ms;" data-threshold="0.6">
            <img src="/images/Approach/Evaluate-08.jpg" className="media-column width-12 center " alt="" />
          </div>
          <div className="row">
            <div className="column width-5 ">
              <div className="hero-content split-hero-content new-mobile-split">
                <div className="hero-content-inner left hero-mobile-content">
                  <h2 className=" lead ">EVALUATE</h2>
                  <p className=" lead ">Analyzing the impact of your brand on the audience is the
                    essential step. With the evaluation, I guide you with solutions for your
                    brand to generate more sales and build a better identity.</p>
                  <ul>
                    <li>Clear Road Map</li>
                    <li>Lead Generation Strategy</li>
                    <li>Social Media Strategy</li>
                    <li>Brand Solutions</li>
                    <li>Core Message Research</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="approach-footer"
        className="section-block hero-5 hero-5-1 window-height right show-media-column-on-mobile bkg-ygrey color-black">
        <div className="row">
          <div className="column width-12">
            <div className="hero-content split-hero-content new-mobile-split">
              <div className="hero-content-inner left horizon"
                data-animate-in="preset:slideInRightShort;duration:1000ms;" data-threshold="0.5">
                <h2 className="mb-30">Are you looking for a brand strategy? I am here to help you with
                  the best results.</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
