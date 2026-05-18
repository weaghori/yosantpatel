"use client";
import Link from 'next/link';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Trigger resize to help legacy scripts calculate layout
    window.dispatchEvent(new Event('resize'));
  }, []);
  return (
    <>
      {/* Fullscreen Slider Section */}
      <section className="section-block featured-media window-height tm-slider-parallax-container">
        <div className="tm-slider-container full-width-slider pagination-top" data-featured-slider data-parallax
          data-parallax-fade-out data-animation="slide" data-scale-under="960" style={{ width: '100%' }}>
          <ul className="tms-slides">
            <li className="tms-slide" data-image data-as-bkg-image data-force-fit>
              <div className="tms-content">
                <div className="tms-content-inner left v-align-middle">
                  <div className="row">
                    <div className="column width-12">
                      <h1 className="tms-caption title-large color-white lspacing-small no-margin-bottom text-uppercase"
                        data-animate-in="preset:slideInRightShort;duration:1000ms;"
                        data-no-scale>
                        I Am <strong>Yosant Patel</strong>
                      </h1>
                      <div className="clear"></div>
                      <div className="tms-caption lead color-white lspacing-medium"
                        data-animate-in="preset:slideInRightShort;duration:1000ms;delay:200ms;"
                        data-no-scale>
                        A Brand Consulting Visionary,<br />Owner of a Digital Media Marketing
                        Firm, <br />and Founder of a Graphic Design Academy.
                        <br />
                        <Link href="/consultation">
                          <button 
                            className="button medium text-uppercase weight-bold custom-blue-text"
                            style={{ 
                              marginTop: '30px', 
                              backgroundColor: '#ffffff',
                              border: 'none',
                              padding: '12px 30px',
                              borderRadius: '4px',
                              fontSize: '14px',
                              letterSpacing: '1px',
                              display: 'inline-block'
                            }}
                          >
                            Grow Your Business
                          </button>
                        </Link>
                      </div><br />
                    </div>
                  </div>
                </div>
              </div>
              <img data-src="/images/Yosant_Branding_Logo_Design.jpg" data-retina src="/images/blank.png" alt="" />
            </li>
          </ul>
        </div>
      </section>
      {/* Fullscreen Slider Section End */}

      <div className="section-block bkg-ygrey color-black With_16">
        <div className="row">
          <div className="column width-5 horizon" data-animate-in="preset:slideInRightShort;duration:1000ms;"
            data-threshold="0.5">
            <h2 className="number-16 ">18 </h2>
          </div>
          <div className="column width-7 horizon"
            data-animate-in="preset:slideInRightShort;duration:1000ms;delay:200ms;" data-threshold="0.5">
            <h2 className="color-black description-16">With 18+ years of experience, I have learned and
              explored various ways to build and enrich a brand. I am keen to help you reach your goal.
            </h2>
          </div>
        </div>
      </div>

      {/* Hero Section 5 */}
      <section id="about"
        className="section-block hero-5 hero-5-1 window-height right show-media-column-on-mobile bkg-white color-charcoal"
        style={{ paddingBottom: '0px' }}>
        <div className="row">
          <div className="column width-9">
            <div className="hero-content split-hero-content">
              <div className="hero-content-inner left horizon"
                data-animate-in="preset:slideInRightShort;duration:1000ms;" data-threshold="0.5">
                <h2 className="mb-30">Why Hire Me?</h2>
                <p className="lead">Having a focused approach is always beneficial; meanwhile, developing a
                  good foundation for your brand is essential. With my expert research, aligning your
                  brand needs to market trends, and through my constant guidance, you are closer to
                  success.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section 5 End */}

      {/* Feature Column Section */}
      <div className="section-block replicable-content">
        <div className="row flex boxes">
          <div className="column width-6">
            <div className="box xlarge bkg-ygrey">
              <div className="feature-column medium left center-on-mobile">
                <span className="feature-icon icon-note color-theme"></span>
                <div className="feature-text">
                  <h3><img src="/images/icons/market-analysis.png" alt="" className="home-icon" />Market
                    Insights</h3>
                  <p className="mb-70 mb-mobile-30">While building a brand, knowing market insights is
                    essential. I help you find different possible touchpoints to reach your target
                    audience and assure you to make this process easy and effective. </p>
                </div>
              </div>
            </div>
          </div>
          <div className="column width-6">
            <div className="box xlarge">
              <div className="feature-column medium left center-on-mobile">
                <span className="feature-icon icon-play color-theme"></span>
                <div className="feature-text">
                  <h3><img src="/images/icons/guidance.png" alt="" className="home-icon" />Expert Guidance
                  </h3>
                  <p>I have gained knowledge about brands with 18+ years of experience in the
                    industry. Through my guidance with wisdom will help you to grow in your
                    business. I try to align business and marketing strategies that will fill the
                    gaps in your brand. </p>
                </div>
              </div>
            </div>
          </div>
          <div className="column width-6">
            <div className="box xlarge">
              <div className="feature-column medium left center-on-mobile">
                <span className="feature-icon icon-list color-theme"></span>
                <div className="feature-text">
                  <h3><img src="/images/icons/expert.png" alt="" className="home-icon" />Creative Expert
                  </h3>
                  <p>I have expertise in graphic design. I help you create appealing and effective
                    creative messages with a strategy to reach your target audience and generate
                    leads. I assure you to get your desired results. </p>
                </div>
              </div>
            </div>
          </div>
          <div className="column width-6">
            <div className="box xlarge bkg-ygrey">
              <div className="feature-column medium left center-on-mobile">
                <span className="feature-icon icon-share color-theme"></span>
                <div className="feature-text">
                  <h3><img src="/images/icons/analyst.png" alt="" className="home-icon" />Brand Analyst</h3>
                  <p>It is essential to know competitors’ moves and consumers’ perspectives on your
                    product and brand. I help you collect data and analyze the results
                    post-campaign.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Feature Column Section End */}

      {/* Content Section */}
      <div className="section-block replicable-content bkg-ygrey color-black">
        <div className="row">
          <div className="column width-12 horizon" data-animate-in="preset:slideInRightShort;duration:1000ms;"
            data-threshold="0.5">
            <h2 className="mb-30">Work</h2>
          </div>
          <div className="column width-5 offset-2 horizon"
            data-animate-in="preset:slideInRightShort;duration:1000ms;delay:200ms;" data-threshold="0.5">
            <p>With a passion for uplifting a brand, I have transformed various brands from scratch. In
              these 18+ years of experience, I have explored different ways to mold brands into accurate
              strategies aligned with creative messages. I have provided the best results from brand
              research to audit the outcome.</p>
          </div>
          <div className="column width-4 horizon">
            <div className="stats-1 left">
              <div className="stat box large bkg-white">
                <div className="stat-inner">
                  <p className="counter"><span className="stat-counter" data-count-from="1"
                    data-count-to="207"></span>+ Projects</p>
                  <p className="description">Worked on projects in 18 years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Content Section End */}

      {/* Portfolio Grid */}
      <div className="section-block grid-container fade-in-progressively full-width no-margins no-padding"
        data-layout-mode="masonry" data-grid-ratio="1.5" data-animate-filter-duration="700" data-set-dimensions
        data-animate-resize data-animate-resize-duration="0" data-as-bkg-image>
        <div className="row">
          <div className="column width-12">
            <div className="row grid content-grid-3">
              <div className="grid-item grid-sizer">
                <div className="thumbnail img-scale-in" data-hover-easing="easeInOut" data-hover-speed="500"
                  data-hover-bkg-color="#ffffff" data-hover-bkg-opacity="1">
                  <Link className="overlay-link" href="/work/mitraas">
                    <img src="/images/work/Mitraas-Yosant-Patel.jpg" alt="" />
                    <span className="overlay-info">
                      <span>
                        <span>
                          <span className="project-title">Mitraa's</span>
                          <span className="project-description">Identity</span>
                        </span>
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="grid-item portrait">
                <div className="thumbnail showreel img-scale-in" data-hover-easing="easeInOut"
                  data-hover-speed="500" data-hover-bkg-color="#ffffff" data-hover-bkg-opacity="1">
                  <img src="/images/SHOWREEL.jpg" alt="" />
                </div>
                <div className="content-outer">
                  <div className="content-inner color-white">
                    <div className="row">
                      <div className="column width-4 offset-4 center">
                        <a className="lightbox-link icon-play icon-circled border-white bkg-hover-theme color-white color-hover-white circled medium"
                          data-toolbar="zoom" data-group="gallery-1" data-caption="Showreel"
                          href="https://www.youtube.com/embed/e9Pvxf8OjM4?autoplay=1"></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-item">
                <div className="thumbnail img-scale-in" data-hover-easing="easeInOut" data-hover-speed="500"
                  data-hover-bkg-color="#ffffff" data-hover-bkg-opacity="1">
                  <Link className="overlay-link" href="/work/chandan">
                    <img src="/images/work/Chandan-jewellry-Yosant-Patel.jpg" alt="" />
                    <span className="overlay-info">
                      <span>
                        <span>
                          <span className="project-title">Chandan</span>
                          <span className="project-description">Re-branding, Identity</span>
                        </span>
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="grid-item">
                <div className="thumbnail img-scale-in" data-hover-easing="easeInOut" data-hover-speed="500"
                  data-hover-bkg-color="#ffffff" data-hover-bkg-opacity="1">
                  <Link className="overlay-link" href="/work/elegant-classes">
                    <img src="/images/work/Elegant-Classes-School-Yosant-Patel.jpg" alt="" />
                    <span className="overlay-info">
                      <span>
                        <span>
                          <span className="project-title">ELEGANT CLASSES</span>
                          <span className="project-description">Design, Brand Strategy</span>
                        </span>
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="grid-item">
                <div className="thumbnail img-scale-in" data-hover-easing="easeInOut" data-hover-speed="500"
                  data-hover-bkg-color="#ffffff" data-hover-bkg-opacity="1">
                  <Link className="overlay-link" href="/work/kiya">
                    <img src="/images/work/Kia-Solar-Panel-Yosant-Patel.jpg" alt="" />
                    <span className="overlay-info">
                      <span>
                        <span>
                          <span className="project-title">Kiya</span>
                          <span className="project-description">Identity</span>
                        </span>
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Portfolio Grid End */}

      {/* Team Grid */}
      <div className="section-block team-2 bkg-ygrey">
        <div className="row horizon" data-animate-in="preset:slideInRightShort;duration:1000ms;"
          data-threshold="0.2">
          <div className="column width-6 color-black">
            <h2 className="mb-50">Explore Branding Insights and Beyond.</h2>
          </div>
          <div className="column width-12">
            <div className="row content-grid-3">
              <div className="grid-item">
                <div className="team-content">
                  <div className="thumbnail no-margin-bottom img-scale-in" data-hover-easing="easeInOut"
                    data-hover-speed="500" data-hover-bkg-color="#ffffff"
                    data-hover-bkg-opacity="0.9">
                    <Link className="overlay-link fade-location"
                      href="/blogs/why_brand_development_is_important">
                      <img src="/images/yosantPatelSite/brand_dev.jpg"
                        alt="BRAND DEVELOPMENT" width="760" height="500" />
                      <span className="overlay-info">
                        <span>
                          <span>
                            <span>BRAND DEVELOPMENT </span>
                          </span>
                        </span>
                      </span>
                    </Link>
                  </div>
                  <div className="team-content-info">
                    <h5 className="mb-5">WHY BRAND DEVELOPMENT IS IMPORTANT?</h5>
                    <p>Effective marketing is mandatory for an organization that desires to reach a
                      larger audience. Marketing is not a one-stop solution, </p>
                    <ul className="social-list list-horizontal">
                      <li><a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//yosantpatel.com/blogs/why_brand_development_is_important"
                        className="icon-facebook small" target="_blank"></a></li>
                      <li><a href="https://twitter.com/intent/tweet?text=https%3A//yosantpatel.com/blogs/why_brand_development_is_important"
                        className="icon-twitter small" target="_blank"></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="grid-item">
                <div className="team-content">
                  <div className="thumbnail no-margin-bottom img-scale-in" data-hover-easing="easeInOut"
                    data-hover-speed="500" data-hover-bkg-color="#ffffff"
                    data-hover-bkg-opacity="0.9">
                    <Link className="overlay-link fade-location"
                      href="/blogs/building_a_successfulbrand_strategy">
                      <img src="/images/yosantPatelSite/brand_stra.jpg"
                        alt="BRAND STRATEGY" width="760" height="500" />
                      <span className="overlay-info">
                        <span>
                          <span>
                            <span>BRAND STRATEGY</span>
                          </span>
                        </span>
                      </span>
                    </Link>
                  </div>
                  <div className="team-content-info">
                    <h5 className="mb-5">BUILDING A SUCCESSFUL BRAND STRATEGY</h5>
                    <p>A branding strategy is a long-term blueprint for the development of a brand
                      in order to achieve specific relevant goals...</p>
                    <ul className="social-list list-horizontal">
                      <li><a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//yosantpatel.com/blogs/building_a_successfulbrand_strategy"
                        className="icon-facebook small" target="_blank"></a></li>
                      <li><a href="https://twitter.com/intent/tweet?text=https%3A//yosantpatel.com/blogs/building_a_successfulbrand_strategy"
                        className="icon-twitter small" target="_blank"></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="grid-item">
                <div className="team-content">
                  <div className="thumbnail no-margin-bottom img-scale-in" data-hover-easing="easeInOut"
                    data-hover-speed="500" data-hover-bkg-color="#ffffff"
                    data-hover-bkg-opacity="0.9">
                    <Link className="overlay-link fade-location"
                      href="/blogs/why_you_need_brand_consultation">
                      <img src="/images/yosantPatelSite/brand_con.jpg"
                        alt="BRAND CONSULTATION" width="760" height="500" />
                      <span className="overlay-info">
                        <span>
                          <span>
                            <span>BRAND CONSULTATION</span>
                          </span>
                        </span>
                      </span>
                    </Link>
                  </div>
                  <div className="team-content-info">
                    <h5 className="mb-5">WHY YOU NEED BRAND CONSULTATION?</h5>
                    <p>Brand Consultation is one of the most crucial elements of branding services.
                      This blog will impart a brief on Brand consultancy...</p>
                    <ul className="social-list list-horizontal">
                      <li><a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//yosantpatel.com/blogs/why_you_need_brand_consultation"
                        className="icon-facebook small" target="_blank"></a></li>
                      <li><a href="https://twitter.com/intent/tweet?text=https%3A//yosantpatel.com/blogs/why_you_need_brand_consultation"
                        className="icon-twitter small" target="_blank"></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team Grid End */}

      {/* Sign Up Section 2 */}
      <section className="section-block signup-2 signup-2-1 pt-150 pb-150">
        <div className="row">
          <div className="column width-5 left">
            <div className="signup-form-container">
              <h2 className="color-white">Get a Personalized 101 Branding Consultation Now!</h2>
              <p className="mb-30 color-white">Want to increase your brand's visibility? Share your business details and get 360° branding solutions today!</p>
              <div className="">
                <Link href="/consultation" className="button small no-margin-bottom">
                  <span>Consult Now</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signup Lightbox */}
      <div id="signup-lightbox" className="pt-50 pb-10 hide">
        <div className="row">
          <div className="column width-10 offset-1 left">
            <div className="login-form-container">
              <div className="thumbnail mb-30">
                <img src="/images/YOSANT BLACK LOGO.svg" width="125" alt="" />
              </div>
              <p className="mb-20">FILL OUT THE FORM AND WE'LL BE IN TOUCH SOON!</p>
              <h2 className="mb-30">LET'S TALK</h2>
              <hr style={{ width: '140px', borderTop: '4px solid #000' }} />
              <form className="login-form" action="popup.php" method="post" noValidate>
                <div className="row">
                  <div className="column width-12">
                    <div className="field-wrapper">
                      <input type="text" name="name" className="form-email form-element large" placeholder="Name" tabIndex="2" required />
                    </div>
                  </div>
                  <div className="column width-12">
                    <div className="field-wrapper">
                      <input type="tel" maxLength="13" name="phone" className="form-email form-element large" placeholder="Phone" tabIndex="2" required />
                    </div>
                  </div>
                  <div className="column width-12">
                    <div className="field-wrapper">
                      <input type="text" name="email" className="form-name form-element large" placeholder="E-mail" tabIndex="1" required />
                    </div>
                  </div>
                  <div className="column width-6">
                    <button type="submit" name="send" value="Submit" className="button small btn-curve btn-curve-2 btn-wit popup-btn">
                      <span>Submit</span>
                    </button>
                  </div>
                  <div className="column width-12 mt-20">
                    <p className="copyright pull-left ">
                      &copy; 2025 Yosant Patel. All Rights Reserved.
                    </p>
                  </div>
                </div>
                <input type="text" name="honeypot" className="form-honeypot form-element" />
              </form>
              <div className="form-response"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Consultation Lightbox */}
      <div id="consultaion-lightbox" className="pt-50 pb-10 hide">
        <div className="row">
          <div className="column width-10 offset-1 left">
            <div className="consultaion-form-container">
              <div className="thumbnail mb-30">
                <img src="/images/YOSANT BLACK LOGO.svg" width="125" alt="" />
              </div>
              <h2 className="mb-10">Branding Consultation</h2>
              <hr style={{ width: '140px', borderTop: '4px solid #000' }} />
              <form className="login-form" action="consultaion.php" method="post" noValidate>
                <div className="row">
                  <div className="column width-12">
                    <p className="mb-5"><b>Are you requesting as an individual, or on behalf of your company?</b></p>
                    <div className="checkBox">
                      <div className="checkboxDiv">
                        <input type="checkbox" value="personally" name="indi_com[]" />
                        <label>I personally need consulting.</label>
                      </div>
                      <div className="checkboxDiv">
                        <input type="checkbox" value="my-company" name="indi_com[]" />
                        <label>My company needs consulting.</label>
                      </div>
                    </div>
                  </div>
                  {/* ... other fields ... */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
