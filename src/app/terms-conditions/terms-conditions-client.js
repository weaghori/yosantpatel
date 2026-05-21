"use client";
import { useEffect } from 'react';

export default function TermsConditionsClient() {
  useEffect(() => {
    window.dispatchEvent(new Event('resize'));
  }, []);

  return (
    <>
      {/* Full Width Slider Section */}
      <section className="section-block featured-media page-intro tm-slider-parallax-container Terms-Conditions-page">
        <div className="tm-slider-container full-width-slider" data-parallax data-parallax-fade-out
          data-animation="slide" data-scale-under="1140">
          <ul className="tms-slides">
            <li className="tms-slide" data-image data-as-bkg-image data-force-fit>
              <div className="tms-content">
                <div className="tms-content-inner left bkg-yblue">
                  <div className="row">
                    <div className="column width-12">
                      <h1 className="tms-caption color-white inline"
                        data-animate-in="preset:slideInUpShort;duration:1000ms;delay:100ms;"
                        data-no-scale>
                        Terms & Conditions
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <div className="section-block bkg-black color-white Terms_Conditions">
        <div className="row">
          <p>Last updated: August 13, 2021</p>
          <p>Please read these terms and conditions carefully before using Our Service.</p>
          
          <h1>Interpretation and Definitions</h1>
          <h2>Interpretation</h2>
          <p>The words of which the initial letter is capitalized have meanings defined under the following conditions.</p>
          
          <h2>Definitions</h2>
          <p>For the purposes of these Terms and Conditions:</p>
          <ul>
            <li><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party.</li>
            <li><strong>Company</strong> refers to Yosant Patel.</li>
            <li><strong>Country</strong> refers to: Maharashtra, India</li>
            <li><strong>Device</strong> means any device that can access the Service.</li>
            <li><strong>Service</strong> refers to the Website.</li>
            <li><strong>Terms and Conditions</strong> mean these Terms and Conditions that form the entire agreement between You and the Company.</li>
            <li><strong>Website</strong> refers to Yosant Patel, accessible from https://yosantpatel.com/</li>
            <li><strong>You</strong> means the individual accessing or using the Service.</li>
          </ul>

          <h1>Acknowledgment</h1>
          <p>These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company.</p>
          
          <h1>Contact Us</h1>
          <p>If you have any questions about these Terms and Conditions, You can contact us:</p>
          <ul>
            <li>By email: iam@yosantpatel.com</li>
            <li>By visiting our contact page.</li>
            <li>By phone number: +91 909 909 27 20</li>
          </ul>
        </div>
      </div>
    </>
  );
}
