"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import HomeBlogSection from '@/components/HomeBlogSection';

export default function HomeClient() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredCta, setHoveredCta] = useState(false);
  const [hoveredConsult, setHoveredConsult] = useState(false);
  const [hoveredStats, setHoveredStats] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Custom Dynamic React Count-Up Animation
  const [count, setCount] = useState(1);
  const [startCount, setStartCount] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    // Trigger standard resize for legacy scripts
    window.dispatchEvent(new Event('resize'));
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // IntersectionObserver to trigger count animation when scrolled into view
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setStartCount(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // 60FPS Frame-Rate Bound Count Animation
  useEffect(() => {
    if (!startCount) return;
    let start = 1;
    const end = 207;
    const duration = 1500; // 1.5 seconds
    const step = Math.ceil(end / (duration / 16)); // ~60fps step size

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16); // 16ms interval (~60fps)

    return () => clearInterval(timer);
  }, [startCount]);

  return (
    <>
      {/* Fullscreen Slider Section */}
      <section className="section-block featured-media window-height tm-slider-parallax-container">
        <div className="tm-slider-container full-width-slider pagination-top" data-featured-slider data-parallax
          data-parallax-fade-out data-animation="slide" data-scale-under="960" style={{ width: '100%' }}>
          <ul className="tms-slides">
            <li className="tms-slide" data-image data-as-bkg-image data-force-fit style={{
              backgroundImage: "url('/images/Yosant_Branding_Logo_Design.jpg')",
              backgroundPosition: 'right center'
            }}>
              <div className="tms-content" style={{ zIndex: 2 }}>
                <div className="tms-content-inner left v-align-middle">
                  <div className="row">
                    <div className="column width-12">
                      <div className="tms-caption no-margin-bottom"
                        data-animate-in="preset:slideInRightShort;duration:1000ms;"
                        data-no-scale
                        style={{ fontFamily: 'inherit', margin: '0' }}>

                        <div style={{ color: '#ffffff', textTransform: 'uppercase', lineHeight: '1.3' }}>
                          <div style={{ fontSize: isMobile ? '16px' : '35px', fontWeight: '100', letterSpacing: '1px' }}>
                            Transforming
                          </div>
                          <div style={{ fontSize: isMobile ? '26px' : '38px', fontWeight: '600', letterSpacing: '0px' }}>
                            Local Businesses
                          </div>
                          <div style={{ fontSize: isMobile ? '16px' : '35px', fontWeight: '100', letterSpacing: '1px', marginTop: '2px' }}>
                            Into Unforgettable
                          </div>
                          <div style={{ fontSize: isMobile ? '26px' : '38px', fontWeight: '600', letterSpacing: '0px' }}>
                            Brands
                          </div>
                        </div>

                        <hr style={{
                          width: '180px',
                          border: 'none',
                          borderTop: '1px solid rgba(255, 255, 255, 0.25)',
                          margin: '25px 0 25px 0',
                          marginLeft: 0
                        }} />
                      </div>

                      <div className="clear"></div>
                      <div className="tms-caption no-margin-bottom text-uppercase"
                        data-animate-in="preset:slideInRightShort;duration:1000ms;delay:100ms;"
                        data-no-scale
                        style={{ fontFamily: 'inherit', margin: 0 }}>
                        <div style={{
                          color: '#ffffff',
                          fontSize: isMobile ? '20px' : '32px',
                          lineHeight: isMobile ? '1.2' : '1.15',
                          display: 'block',
                          marginTop: '50px'
                        }}>
                          <span style={{ fontWeight: '300' }}>I AM </span>
                          <span style={{ fontWeight: '800' }}>YOSANT PATEL</span>
                        </div>
                      </div>
                      <div className="clear"></div>
                      <div className="tms-caption"
                        data-animate-in="preset:slideInRightShort;duration:1000ms;delay:200ms;"
                        data-no-scale
                        style={{
                          marginTop: isMobile ? '10px' : '15px',
                          fontFamily: 'inherit'
                        }}>
                        <div style={{
                          color: '#ffffff',
                          fontSize: isMobile ? '14px' : '22px',
                          lineHeight: isMobile ? '1.5' : '1.6',
                          fontWeight: '300',
                          letterSpacing: 'normal',
                          opacity: 0.8
                        }}>
                          Strategic Branding Consultant,<br />Owner of a Branding Agency.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img data-src="/images/Yosant_Branding_Logo_Design.jpg" data-retina src="/images/blank.png" alt="BRAND LOGO DESIGN" />
            </li>
          </ul>
        </div>
      </section>
      {/* Fullscreen Slider Section End */}

      <div className="section-block color-black With_16" style={{
        padding: isMobile ? '50px 0' : '100px 0',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #f1f5f9'
      }}>
        <div className="row flex" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
          <div className="column width-5 horizon" data-animate-in="preset:slideInRightShort;duration:1000ms;" data-threshold="0.5" style={{ flex: '1 1 300px' }}>
            <h2 style={{
              fontSize: isMobile ? '90px' : '150px',
              fontWeight: '800',
              lineHeight: '1',
              margin: 0,
              fontFamily: 'inherit',
              background: 'linear-gradient(135deg, #203b72 0%, #0f172a 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              opacity: 0.95,
              letterSpacing: '-5px',
              textAlign: isMobile ? 'left' : 'center'
            }}>
              18+
            </h2>
          </div>
          <div className="column width-7 horizon" data-animate-in="preset:slideInRightShort;duration:1000ms;delay:200ms;" data-threshold="0.5" style={{ flex: '1 1 450px' }}>
            <h2 className="color-black description-16" style={{
              fontSize: isMobile ? '18px' : '24px',
              fontWeight: '400',
              lineHeight: '1.65',
              color: '#1e293b',
              borderLeft: isMobile ? 'none' : '4px solid #203b72',
              paddingLeft: isMobile ? '0' : '30px',
              marginTop: isMobile ? '20px' : '0',
              marginRight: 0,
              marginBottom: 0,
              fontFamily: 'inherit'
            }}>
              With 18+ years of experience, I have explored thoughtful ways to build strong brands and create meaningful identities. I am passionate about helping businesses grow with clarity and purpose.
            </h2>
          </div>
        </div>
      </div>

      <section id="about" className="section-block" style={{ padding: isMobile ? '60px 0' : '120px 0', backgroundColor: '#203b72', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="row flex" style={{ display: 'flex', flexWrap: 'wrap', gap: isMobile ? '30px' : '50px' }}>

          {/* Top Column: Why Hire Me title & info (Full Width) */}
          <div className="column width-12 horizon" data-animate-in="preset:slideInRightShort;duration:1000ms;" data-threshold="0.5" style={{ marginBottom: isMobile ? '20px' : '10px' }}>
            <div style={{ width: '60px', height: '4px', backgroundColor: '#ffffff', marginBottom: '25px' }} />
            <h2 className="color-white" style={{
              fontSize: isMobile ? '30px' : '42px',
              fontWeight: '800',
              lineHeight: '1.15',
              letterSpacing: '-1.5px',
              fontFamily: 'inherit'
            }}>
              How I Help Brands Grow?
            </h2>
            <p className="lead" style={{
              fontSize: isMobile ? '16px' : '18px',
              lineHeight: '1.75',
              color: '#cbd5e1',
              fontWeight: '300',
              margin: 0,
              fontFamily: 'inherit'
            }}>
              A focused approach always creates better results, while building a strong brand foundation remains equally important. Through expert research, market-driven insights, and constant guidance, I help bring your brand closer to lasting success.
            </p>
          </div>

          {/* Bottom Column: 4 glassmorphic expertise cards in a 2x2 grid */}
          <div className="column width-12" style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '20px' : '30px' }}>
            <div className="row flex boxes" style={{ display: 'flex', flexWrap: 'wrap', gap: isMobile ? '20px' : '30px', margin: 0 }}>

              {/* Card 1: Market Insights */}
              <div style={{ flex: '1 1 calc(50% - 15px)', minWidth: '280px', display: 'flex' }}>
                <div
                  onMouseEnter={() => setHoveredCard(0)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: hoveredCard === 0 ? '1px solid #ffffff' : '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '24px',
                    padding: isMobile ? '25px' : '40px',
                    boxShadow: hoveredCard === 0 ? '0 20px 40px rgba(0, 0, 0, 0.3)' : 'none',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start'
                  }}
                >
                  <div style={{
                    width: isMobile ? '50px' : '64px',
                    height: isMobile ? '50px' : '64px',
                    borderRadius: '50%',
                    backgroundColor: hoveredCard === 0 ? '#ffffff' : 'rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: isMobile ? '15px' : '25px',
                    transition: 'all 0.3s ease'
                  }}>
                    <Image
                      src="/images/icons/market-analysis.png"
                      alt="Market Analysis"
                      width={64}
                      height={64}
                      style={{
                        width: isMobile ? '24px' : '32px',
                        height: isMobile ? '24px' : '32px',
                        filter: hoveredCard === 0 ? 'none' : 'brightness(0) invert(1)',
                        transition: 'all 0.3s ease'
                      }}
                    />
                  </div>
                  <h3 style={{
                    fontSize: isMobile ? '18px' : '20px',
                    fontWeight: '700',
                    color: '#ffffff',
                    marginBottom: isMobile ? '10px' : '15px',
                    fontFamily: 'inherit'
                  }}>
                    Market Insights
                  </h3>
                  <p style={{
                    fontSize: isMobile ? '14px' : '15px',
                    lineHeight: '1.7',
                    color: '#cbd5e1',
                    margin: 0,
                    fontFamily: 'inherit'
                  }}>
                    While building a brand, knowing market insights is essential. I help you find different possible touchpoints to reach your target audience and assure you to make this process easy and effective.
                  </p>
                </div>
              </div>

              {/* Card 2: Expert Guidance */}
              <div style={{ flex: '1 1 calc(50% - 15px)', minWidth: '280px', display: 'flex' }}>
                <div
                  onMouseEnter={() => setHoveredCard(1)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: hoveredCard === 1 ? '1px solid #ffffff' : '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '24px',
                    padding: isMobile ? '25px' : '40px',
                    boxShadow: hoveredCard === 1 ? '0 20px 40px rgba(0, 0, 0, 0.3)' : 'none',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start'
                  }}
                >
                  <div style={{
                    width: isMobile ? '50px' : '64px',
                    height: isMobile ? '50px' : '64px',
                    borderRadius: '50%',
                    backgroundColor: hoveredCard === 1 ? '#ffffff' : 'rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: isMobile ? '15px' : '25px',
                    transition: 'all 0.3s ease'
                  }}>
                    <Image
                      src="/images/icons/guidance.png"
                      alt="Guidance"
                      width={64}
                      height={64}
                      style={{
                        width: isMobile ? '24px' : '32px',
                        height: isMobile ? '24px' : '32px',
                        filter: hoveredCard === 1 ? 'none' : 'brightness(0) invert(1)',
                        transition: 'all 0.3s ease'
                      }}
                    />
                  </div>
                  <h3 style={{
                    fontSize: isMobile ? '18px' : '20px',
                    fontWeight: '700',
                    color: '#ffffff',
                    marginBottom: isMobile ? '10px' : '15px',
                    fontFamily: 'inherit'
                  }}>
                    Expert Guidance
                  </h3>
                  <p style={{
                    fontSize: isMobile ? '14px' : '15px',
                    lineHeight: '1.7',
                    color: '#cbd5e1',
                    margin: 0,
                    fontFamily: 'inherit'
                  }}>
                    I have gained knowledge about brands with 18+ years of experience in the industry. Through my guidance with wisdom will help you to grow in your business. I try to align business and marketing strategies that will fill the gaps in your brand.
                  </p>
                </div>
              </div>

              {/* Card 3: Creative Expert */}
              <div style={{ flex: '1 1 calc(50% - 15px)', minWidth: '280px', display: 'flex' }}>
                <div
                  onMouseEnter={() => setHoveredCard(2)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: hoveredCard === 2 ? '1px solid #ffffff' : '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '24px',
                    padding: isMobile ? '25px' : '40px',
                    boxShadow: hoveredCard === 2 ? '0 20px 40px rgba(0, 0, 0, 0.3)' : 'none',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start'
                  }}
                >
                  <div style={{
                    width: isMobile ? '50px' : '64px',
                    height: isMobile ? '50px' : '64px',
                    borderRadius: '50%',
                    backgroundColor: hoveredCard === 2 ? '#ffffff' : 'rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: isMobile ? '15px' : '25px',
                    transition: 'all 0.3s ease'
                  }}>
                    <Image
                      src="/images/icons/expert.png"
                      alt="Experts"
                      width={64}
                      height={64}
                      style={{
                        width: isMobile ? '24px' : '32px',
                        height: isMobile ? '24px' : '32px',
                        filter: hoveredCard === 2 ? 'none' : 'brightness(0) invert(1)',
                        transition: 'all 0.3s ease'
                      }}
                    />
                  </div>
                  <h3 style={{
                    fontSize: isMobile ? '18px' : '20px',
                    fontWeight: '700',
                    color: '#ffffff',
                    marginBottom: isMobile ? '10px' : '15px',
                    fontFamily: 'inherit'
                  }}>
                    Creative Expert
                  </h3>
                  <p style={{
                    fontSize: isMobile ? '14px' : '15px',
                    lineHeight: '1.7',
                    color: '#cbd5e1',
                    margin: 0,
                    fontFamily: 'inherit'
                  }}>
                    I have expertise in graphic design. I help you create appealing and effective creative messages with a strategy to reach your target audience and generate leads. I assure you to get your desired results.
                  </p>
                </div>
              </div>

              {/* Card 4: Brand Analyst */}
              <div style={{ flex: '1 1 calc(50% - 15px)', minWidth: '280px', display: 'flex' }}>
                <div
                  onMouseEnter={() => setHoveredCard(3)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: hoveredCard === 3 ? '1px solid #ffffff' : '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '24px',
                    padding: isMobile ? '25px' : '40px',
                    boxShadow: hoveredCard === 3 ? '0 20px 40px rgba(0, 0, 0, 0.3)' : 'none',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start'
                  }}
                >
                  <div style={{
                    width: isMobile ? '50px' : '64px',
                    height: isMobile ? '50px' : '64px',
                    borderRadius: '50%',
                    backgroundColor: hoveredCard === 3 ? '#ffffff' : 'rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: isMobile ? '15px' : '25px',
                    transition: 'all 0.3s ease'
                  }}>
                    <Image
                      src="/images/icons/analyst.png"
                      alt="Analyst"
                      width={64}
                      height={64}
                      style={{
                        width: isMobile ? '24px' : '32px',
                        height: isMobile ? '24px' : '32px',
                        filter: hoveredCard === 3 ? 'none' : 'brightness(0) invert(1)',
                        transition: 'all 0.3s ease'
                      }}
                    />
                  </div>
                  <h3 style={{
                    fontSize: isMobile ? '18px' : '20px',
                    fontWeight: '700',
                    color: '#ffffff',
                    marginBottom: isMobile ? '10px' : '15px',
                    fontFamily: 'inherit'
                  }}>
                    Brand Analyst
                  </h3>
                  <p style={{
                    fontSize: isMobile ? '14px' : '15px',
                    lineHeight: '1.7',
                    color: '#cbd5e1',
                    margin: 0,
                    fontFamily: 'inherit'
                  }}>
                    It is essential to know competitors’ moves and consumers’ perspectives on your product and brand. I help you collect data and analyze the results post-campaign.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Content Section (Work & Statistics) */}
      <div className="section-block replicable-content" style={{ padding: isMobile ? '60px 0' : '120px 0', backgroundColor: '#ffffff', borderBottom: '1px solid #f1f5f9' }}>
        <div className="row flex" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: isMobile ? '30px' : '50px' }}>

          <div className="column width-7 horizon" data-animate-in="preset:slideInRightShort;duration:1000ms;" data-threshold="0.5" style={{ flex: '1 1 400px' }}>
            <h2 style={{
              fontSize: isMobile ? '30px' : '42px',
              fontWeight: '800',
              color: '#0f172a',
              fontFamily: 'inherit'
            }}>
              Brand Transformations
            </h2>
            <p style={{
              fontSize: isMobile ? '15px' : '16px',
              lineHeight: '1.75',
              color: '#475569',
              fontWeight: '300',
              margin: 0,
              fontFamily: 'inherit'
            }}>
              With a passion for building impactful brands, I have transformed businesses from the ground up. Across 18+ years of experience, I have explored strategic and creative ways to shape brands with meaningful direction and deliver results through research, planning, and brand evaluation.
            </p>
          </div>

          <div className="column width-5 horizon" style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}>
            <div
              ref={statsRef}
              onMouseEnter={() => setHoveredStats(true)}
              onMouseLeave={() => setHoveredStats(false)}
              style={{
                background: 'linear-gradient(135deg, #203b72 0%, #0f172a 100%)',
                borderRadius: '24px',
                padding: isMobile ? '30px 20px' : '40px 50px',
                boxShadow: hoveredStats ? '0 30px 60px rgba(32, 59, 114, 0.35)' : '0 25px 50px -12px rgba(32, 59, 114, 0.25)',
                textAlign: 'center',
                width: '100%',
                maxWidth: '360px',
                border: hoveredStats ? '1px solid #203b72' : '1px solid rgba(255, 255, 255, 0.1)',
                position: 'relative',
                overflow: 'hidden',
                transform: hoveredStats ? 'translateY(-10px)' : 'translateY(0)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer'
              }}
            >
              {/* Subtle ambient blur light inside stat box */}
              <div style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.08)',
                filter: 'blur(30px)',
                pointerEvents: 'none'
              }} />

              <p style={{
                fontSize: isMobile ? '44px' : '56px',
                fontWeight: '800',
                color: '#ffffff',
                margin: '0 0 10px 0',
                letterSpacing: '-2px',
                lineHeight: '1'
              }}>
                {count}+
              </p>
              <p style={{
                fontSize: isMobile ? '16px' : '18px',
                fontWeight: '600',
                color: '#ffffff',
                margin: '0 0 15px 0',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                opacity: 0.95
              }}>
                Projects
              </p>
              <p style={{
                fontSize: '14px',
                lineHeight: '1.5',
                color: '#93c5fd',
                fontWeight: '300',
                margin: 0
              }}>
                Worked on projects in 18 years
              </p>
            </div>
          </div>

        </div>
      </div>
      {/* Content Section End */}

      {/* Dynamic Latest Blogs Section */}
      <HomeBlogSection />

      {/* Sign Up Section 2 */}
      <section className="section-block signup-2 signup-2-1" style={{ paddingTop: isMobile ? '80px' : '150px', paddingBottom: isMobile ? '80px' : '150px' }}>
        <div className="row">
          <div className="column width-5 left">
            <div className="signup-form-container" style={{ padding: 0 }}>
              <h2 className="color-white" style={{
                fontSize: isMobile ? '28px' : '36px',
                fontWeight: '700',
                lineHeight: '1.25',
                letterSpacing: '-0.5px',
                fontFamily: 'inherit'
              }}>
                Get Your One-on-One Branding Consultation Now!
              </h2>
              <p style={{
                fontSize: isMobile ? '15px' : '18px',
                lineHeight: '1.65',
                color: '#ffffff',
                fontWeight: '300',
                marginBottom: '30px',
                fontFamily: 'inherit'
              }}>
                Looking to elevate your brand’s presence? Book a 30-minute, no-obligation strategy session and explore tailored 360° branding solutions. For businesses ready to grow with purpose — let’s build success together.
              </p>
              <div>
                <Link href="/consultation">
                  <button
                    onMouseEnter={() => setHoveredConsult(true)}
                    onMouseLeave={() => setHoveredConsult(false)}
                    style={{
                      backgroundColor: hoveredConsult ? '#ffffff' : 'transparent',
                      border: '1px solid #ffffff',
                      padding: isMobile ? '12px 28px' : '14px 34px',
                      borderRadius: '30px',
                      fontSize: '13px',
                      fontWeight: '700',
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      boxShadow: hoveredConsult ? '0 8px 25px rgba(255, 255, 255, 0.25)' : '0 4px 15px rgba(0, 0, 0, 0.1)',
                      transform: 'none',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      outline: 'none',
                      fontFamily: 'inherit'
                    }}
                  >
                    <span style={{ color: hoveredConsult ? '#203b72' : '#ffffff', transition: 'color 0.3s ease' }}>
                      Consult Now
                    </span>
                  </button>
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
                <img src="/images/yosant-black-logo.svg" width="125" alt="Yosant Patel Logo" />
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
                <img src="/images/yosant-black-logo.svg" width="125" alt="Yosant Patel Logo" />
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
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
