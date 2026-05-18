"use client";
import { useEffect, useState } from 'react';

export default function Consultation() {
  const [captcha, setCaptcha] = useState({ question: '', correctAnswer: 0 });
  const [userAnswer, setUserAnswer] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    window.dispatchEvent(new Event('resize'));
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operation = Math.random() < 0.5 ? '+' : '-';
    const question = `${num1} ${operation} ${num2}`;
    const correctAnswer = operation === '+' ? num1 + num2 : num1 - num2;
    setCaptcha({ question, correctAnswer });
  };

  const handleCaptchaChange = (e) => {
    const val = e.target.value;
    setUserAnswer(val);
    if (parseInt(val, 10) === captcha.correctAnswer) {
      setIsValid(true);
      setShowError(false);
    } else {
      setIsValid(false);
      if (val !== '') setShowError(true);
    }
  };

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
                        Branding Consultation
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
      <section className="section-block replicable-content about-ser-section bkg-ygrey">
        <div id="consultaion-lightbox" className="pt-50 pb-10">
          <div className="row">
            <div className="column width-10 left" style={{ marginLeft: '0px !important' }}>
              <div className="consultaion-form-container">
                <form className="login-form" action="consultaion.php" method="post" noValidate>
                  <div className="row">
                    <div className="column width-12">
                      <p className="mb-5" style={{ fontSize: '2em' }}><b>Are you requesting as an individual, or on behalf of your company?</b></p>
                      <table className="responsive-table1">
                        <tbody>
                          <tr>
                            <td><label>I personally need consulting.</label></td>
                            <td style={{ paddingRight: '35px' }}><input type="checkbox" value="personally" name="indi_com[]" /></td>
                            <td><label>My company needs consulting.</label></td>
                            <td><input type="checkbox" value="my-company" name="indi_com[]" /></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="column width-6">
                      <div className="field-wrapper">
                        <input type="text" name="name" className="form-email form-element large" placeholder="Name" tabIndex="2" required style={{ outline: 'none' }} />
                      </div>
                    </div>
                    <div className="column width-6">
                      <div className="field-wrapper">
                        <input type="text" maxLength="13" name="phone" className="form-email form-element large" placeholder="Phone" tabIndex="2" required />
                      </div>
                    </div>
                    <div className="column width-12">
                      <div className="field-wrapper">
                        <input type="text" name="email" className="form-name form-element large" placeholder="E-mail" tabIndex="2" required />
                      </div>
                    </div>
                    <div className="column width-6">
                      <div className="field-wrapper">
                        <input type="text" name="company" className="form-email form-element large" placeholder="Company Name" tabIndex="1" required />
                      </div>
                    </div>
                    <div className="column width-6">
                      <div className="field-wrapper">
                        <input type="text" name="webiste" className="form-email form-element large" placeholder="Company Website" tabIndex="2" required />
                      </div>
                    </div>
                    <div className="column width-12">
                      <p className="mb-5" style={{ fontSize: 'large', margin: '30px 0 30px 0' }}><b>Which Services you are interested in:</b></p>
                      <div className="checkBox">
                        <table className="responsive-table2">
                          <tbody>
                            <tr>
                              <td><label>Logo Design</label></td>
                              <td><input type="checkbox" value="logo-design" name="interested[]" /></td>
                              <td style={{ paddingLeft: '15px' }}><label>Brand Strategy</label></td>
                              <td><input type="checkbox" value="brand-strategy" name="interested[]" /></td>
                              <td style={{ paddingLeft: '15px' }}><label>Content Marketing</label></td>
                              <td><input type="checkbox" value="content-marketing" name="interested[]" /></td>
                              <td style={{ paddingLeft: '15px' }}><label>Website Design</label></td>
                              <td><input type="checkbox" value="website-design" name="interested[]" /></td>
                              <td style={{ paddingLeft: '15px' }}><label>SEO / traffic Growth</label></td>
                              <td><input type="checkbox" value="seo" name="interested[]" /></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="form-group col-lg-12" style={{ display: 'flex', alignItems: 'center', gap: '0px' }}>
                        <label htmlFor="captcha-question" id="captcha-question-label">Solve:</label>
                        <input type="text" id="captcha-question" value={captcha.question} readOnly style={{ border: 'none', fontWeight: 'bold', textAlign: 'center', width: '15%', margin: '0px !important', color: 'black !important', background: 'transparent' }} />
                        <span style={{ fontWeight: 'bold', width: 'auto', marginRight: '10px' }}>=</span>
                        <input id="captcha-answer" className="captcha" name="captcha" type="number" required placeholder="Your Answer" value={userAnswer} onChange={handleCaptchaChange} style={{ border: 'none', width: 'auto', padding: '10px 5px 10px 5px', textAlign: 'center', margin: '0px !important', background: 'transparent' }} />
                      </div>
                      {showError && <p id="captcha-error" style={{ color: 'red !important' }}>Incorrect CAPTCHA answer. Please try again.</p>}
                    </div>
                    <div className="column width-7" style={{ marginTop: '25px' }}>
                      <button type="submit" id="submit-button" name="send" value="Submit" className="consultation-btn" disabled={!isValid}>
                        <span>Submit</span>
                      </button>
                    </div>
                  </div>
                  <input type="text" name="honeypot" className="form-honeypot form-element" />
                </form>
                <div className="form-response"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
