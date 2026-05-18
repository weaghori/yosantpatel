"use client";
import { useEffect } from 'react';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.dispatchEvent(new Event('resize'));
  }, []);

  return (
    <>
      {/* Full Width Slider Section */}
      <section className="section-block featured-media page-intro tm-slider-parallax-container privacy-policy-page">
        <div className="tm-slider-container full-width-slider" data-parallax data-parallax-fade-out
          data-animation="slide" data-scale-under="1140">
          <ul className="tms-slides">
            <li className="tms-slide" data-image data-as-bkg-image data-force-fit>
              <div className="tms-content ">
                <div className="tms-content-inner left bkg-yblue">
                  <div className="row">
                    <div className="column width-12">
                      <h1 className="tms-caption color-white inline"
                        data-animate-in="preset:slideInUpShort;duration:1000ms;delay:100ms;"
                        data-no-scale>
                        Privacy policy
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <div className="section-block bkg-black color-white Privacy_policy">
        <div className="row">
          <p>Last updated: August 13, 2021</p>
          <p>This Privacy Policy describes Our policies and procedures on the collection, use and
            disclosure of Your information when You use the Service and tells You about Your privacy
            rights and how the law protects You.</p>
          <p>We use Your Personal data to provide and improve the Service. By using the Service, You agree
            to the collection and use of information in accordance with this Privacy Policy.</p>
          
          <h1>Interpretation and Definitions</h1>
          <h2>Interpretation</h2>
          <p>The words of which the initial letter is capitalized have meanings defined under the
            following conditions. The following definitions shall have the same meaning regardless of
            whether they appear in singular or in plural.</p>
          
          <h2>Definitions</h2>
          <p>For the purposes of this Privacy Policy:</p>
          <ul>
            <li><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
            <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Yosant Patel.</li>
            <li><strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website.</li>
            <li><strong>Country</strong> refers to: Maharashtra, India</li>
            <li><strong>Device</strong> means any device that can access the Service.</li>
            <li><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
            <li><strong>Service</strong> refers to the Website.</li>
            <li><strong>Website</strong> refers to Yosant Patel, accessible from https://yosantpatel.com/</li>
          </ul>

          <h1>Collecting and Using Your Personal Data</h1>
          <h2>Types of Data Collected</h2>
          <h3>Personal Data</h3>
          <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information, including but not limited to:</p>
          <ul>
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Phone number</li>
            <li>Usage Data</li>
          </ul>

          {/* ... Add more sections as needed ... */}
          <h1>Contact Us</h1>
          <p>If you have any questions about this Privacy Policy, You can contact us:</p>
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
