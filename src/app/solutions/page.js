"use client";
import { useEffect } from 'react';

export default function Solutions() {
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
            <li className="tms-slide" data-image data-as-bkg-image data-force-fit>
              <div className="tms-content">
                <div className="tms-content-inner left">
                  <div className="row">
                    <div className="column width-12">
                      <h1 className="tms-caption color-white inline"
                        data-animate-in="preset:slideInUpShort;duration:1000ms;delay:100ms;"
                        data-no-scale>
                        Solutions
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <img data-src="/images/slider/Solutions-Yosant-Patel.jpg" data-retina src="/images/blank.png" alt="" />
            </li>
          </ul>
        </div>
      </section>

      {/* Hero Section 5 */}
      <section id="about"
        className="section-block hero-5 hero-5-1 window-height right show-media-column-on-mobile bkg-white color-charcoal">
        <div className="row">
          <div className="column width-12">
            <div className="hero-content split-hero-content">
              <div className="hero-content-inner left horizon"
                data-animate-in="preset:slideInRightShort;duration:1000ms;" data-threshold="0.5">
                <h2 className="mb-30">Focus on the right strategy for your brand can lead you ahead from
                  competitors, generate sales and develop brand equity in the market. I provide
                  the best solutions to your problems effectively with my vision, knowledge, and
                  approach.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-block hero-5 hero-5-2 show-media-column-on-mobile bkg-ygrey tmh-perspective">
        <div className="media-column width-6 horizon"
          data-animate-in="preset:slideInLeftShort;duration:1000ms;delay:200ms;" data-threshold="0.6">
          <img src="/images/solution/Solution-01.jpg" className="media-column width-12 center " alt="" />
        </div>
        <div className="row">
          <div className="column width-5 push-7">
            <div className="hero-content split-hero-content">
              <div className="hero-content-inner left">
                <p className="color-black lead ">I try to understand where your brand stands right now
                  and help position it better with the facts, insights, and research. I try to
                  fill in the gaps where your brand is lacking behind. </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-block right hero-5 hero-5-2 show-media-column-on-mobile tmh-perspective">
        <div className="media-column width-6 center horizon"
          data-animate-in="preset:slideInRightShort;duration:1000ms;delay:200ms;" data-threshold="0.6">
          <img src="/images/solution/Solution-02.jpg" className="media-column width-12 center " alt="" />
        </div>
        <div className="row">
          <div className="column width-5 ">
            <div className="hero-content split-hero-content">
              <div className="hero-content-inner left">
                <p className="lead">To create an impact on the audience’s mind, generating creative
                  messages are essential for your brand. I help you create innovative and
                  impactful messages that reach your target audience and attract new customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-block hero-5 hero-5-2 show-media-column-on-mobile bkg-ygrey tmh-perspective">
        <div className="media-column width-6 horizon"
          data-animate-in="preset:slideInLeftShort;duration:1000ms;delay:200ms;" data-threshold="0.6">
          <img src="/images/solution/Solution-03.jpg" className="media-column width-12 center " alt="" />
        </div>
        <div className="row">
          <div className="column width-5 push-7">
            <div className="hero-content split-hero-content">
              <div className="hero-content-inner left">
                <p className="color-black lead ">A Brand needs its voice, tone, identity, and
                  personality to make your brand unique and relevant to the audience. I help you
                  to build a voice for your brand and connect with your target audience.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-block right hero-5 hero-5-2 show-media-column-on-mobile tmh-perspective">
        <div className="media-column width-6 center horizon"
          data-animate-in="preset:slideInRightShort;duration:1000ms;delay:200ms;" data-threshold="0.6">
          <img src="/images/solution/Solution-04.jpg" className="media-column width-12 center " alt="" />
        </div>
        <div className="row">
          <div className="column width-5 ">
            <div className="hero-content split-hero-content">
              <div className="hero-content-inner left">
                <p className="lead">Branding can get intimidating as it is a long-term process. Through
                  my guidance, the right approach, and perseverance will make this journey easy
                  and effective.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-block hero-5 hero-5-2 show-media-column-on-mobile bkg-ygrey tmh-perspective">
        <div className="media-column width-6 horizon"
          data-animate-in="preset:slideInLeftShort;duration:1000ms;delay:200ms;" data-threshold="0.6">
          <img src="/images/solution/Solution-05.jpg" className="media-column width-12 center " alt="" />
        </div>
        <div className="row">
          <div className="column width-5 push-7">
            <div className="hero-content split-hero-content">
              <div className="hero-content-inner left">
                <p className="color-black lead ">It is essential to build strong communication to stand
                  out in the market. By understanding the market situation, your audience needs,
                  and expectations, I give you solutions for your potential growth.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-block right hero-5 hero-5-2 show-media-column-on-mobile tmh-perspective">
        <div className="media-column width-6 center horizon"
          data-animate-in="preset:slideInRightShort;duration:1000ms;delay:200ms;" data-threshold="0.6">
          <img src="/images/solution/Solution-06.jpg" className="media-column width-12 center " alt="" />
        </div>
        <div className="row">
          <div className="column width-5 ">
            <div className="hero-content split-hero-content">
              <div className="hero-content-inner left">
                <p className="lead">Rebranding can get challenging as there is a constant fear of your
                  brand’s position. It is a long process of changing strategies, visuals,
                  communication, products. I assure you to bring desired results.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="about-footer"
        className="section-block hero-5 hero-5-1 window-height right show-media-column-on-mobile bkg-ygrey color-black">
        <div className="row">
          <div className="column width-12">
            <div className="hero-content split-hero-content">
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
