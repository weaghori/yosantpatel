"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function SolutionsClient() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    
    window.dispatchEvent(new Event('resize'));

    // Hydration-safe screen observer
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Premium Immersive Hero Page Banner */}
      <section style={{
        position: 'relative',
        height: isMobile ? '280px' : '550px',
        backgroundImage: "url('/images/slider/Solutions-Yosant-Patel.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        {/* Visually Hidden Image for SEO */}
        <img 
          src="/images/slider/Solutions-Yosant-Patel.jpg" 
          alt="Branding" 
          style={{
            position: 'absolute',
            width: '1px',
            height: '1px',
            padding: '0',
            margin: '-1px',
            overflow: 'hidden',
            clip: 'rect(0, 0, 0, 0)',
            whiteSpace: 'nowrap',
            border: '0'
          }} 
        />
        {/* Hero Title Grid Frame */}
        <div className="row" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <div className="column width-12" style={{ textAlign: 'left' }}>
            <h1 style={{
              fontSize: isMobile ? '30px' : '64px',
              fontWeight: '800',
              color: '#ffffff',
              margin: 0,
              letterSpacing: '-1.5px',
              lineHeight: '1.15',
              fontFamily: 'inherit'
            }}>
              Solutions
            </h1>
          </div>
        </div>
      </section>

      {/* Vision & Strategic Lead Section */}
      <section id="about" className="section-block" style={{
        padding: isMobile ? '50px 0' : '110px 0',
        backgroundColor: '#ffffff',
        backgroundImage: 'radial-gradient(circle at 50% 120%, rgba(32, 59, 114, 0.04) 0%, transparent 60%)',
        borderBottom: '1px solid #f1f5f9',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="row">
          <div className="column width-10 offset-1" style={{ textAlign: 'center' }}>
            <div style={{
              position: 'relative',
              padding: isMobile ? '5px' : '0 40px',
              display: 'inline-block'
            }}>
              {/* Strategic Quote Layout */}
              <h2 style={{
                fontSize: isMobile ? '16px' : '28px',
                fontWeight: '400',
                lineHeight: isMobile ? '1.65' : '1.7',
                color: '#203b72',
                fontFamily: 'inherit',
                margin: 0,
                letterSpacing: '-0.5px'
              }}>
                Focus on the right strategy for your brand can lead you ahead from competitors, generate sales and develop brand equity in the market. I provide the best solutions to your problems effectively with my vision, knowledge, and approach.
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* High-End Asymmetric Editorial Showcase Section */}
      <section className="section-block" style={{
        padding: isMobile ? '50px 0' : '130px 0',
        backgroundColor: '#fbfbfb',
        position: 'relative',
        overflow: 'hidden'
      }}>
        
        {/* ROW 1: Solution 1 (BIG - Left) & Solution 2 (SMALL - Right) */}
        <div className="row" style={{ marginBottom: isMobile ? '20px' : '80px' }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: isMobile ? '20px' : '40px',
            alignItems: 'stretch',
            width: '100%'
          }}>
            
            {/* Solution 1 (BIG - Width 60% on Desktop) */}
            <div style={{ 
              flex: isMobile ? '1 1 100%' : '1 1 60%', 
              display: 'flex' 
            }}>
              <div 
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: isMobile ? '16px' : '24px',
                  padding: isMobile ? '20px 15px' : '40px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.02)',
                  transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'default',
                  width: '100%'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#203b72';
                  e.currentTarget.style.boxShadow = '0 20px 45px rgba(32, 59, 114, 0.06)';
                  e.currentTarget.style.background = '#fafbfe';
                  const img = e.currentTarget.querySelector('.sol-img');
                  if (img) img.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.02)';
                  e.currentTarget.style.background = '#ffffff';
                  const img = e.currentTarget.querySelector('.sol-img');
                  if (img) img.style.transform = 'scale(1)';
                }}
              >
                {/* Large Background Watermarked Serial Number */}
                <div style={{
                  position: 'absolute',
                  right: isMobile ? '15px' : '25px',
                  bottom: isMobile ? '-10px' : '-15px',
                  fontSize: isMobile ? '50px' : '120px',
                  fontWeight: '900',
                  color: '#203b72',
                  opacity: 0.03,
                  userSelect: 'none',
                  zIndex: 1,
                  fontFamily: 'inherit'
                }}>
                  01
                </div>

                <div style={{ zIndex: 2 }}>
                  {/* Big Image Frame with Generous Gallery Padding */}
                  <div style={{
                    borderRadius: isMobile ? '12px' : '16px',
                    overflow: 'hidden',
                    width: '100%',
                    marginBottom: isMobile ? '15px' : '25px',
                    padding: isMobile ? '8px' : '18px',
                    background: '#f8fafc',
                    border: '1px solid #f1f5f9'
                  }}>
                    <div style={{ borderRadius: isMobile ? '8px' : '12px', overflow: 'hidden', aspectRatio: isMobile ? '16/10' : '21/9' }}>
                      <img 
                        src="/images/solution/Solution-01.jpg" 
                        alt="Branding"
                        className="sol-img"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                          transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div style={{ zIndex: 2, maxWidth: '680px' }}>
                  <p style={{
                    fontSize: isMobile ? '13px' : '17px',
                    lineHeight: isMobile ? '1.7' : '1.8',
                    color: '#475569',
                    fontWeight: '300',
                    margin: 0,
                    fontFamily: 'inherit'
                  }}>
                    I focus on <strong style={{ color: '#203b72', fontWeight: '500' }}>understanding where your brand stands</strong> today and help strengthen its position through research, insights, and strategic direction. I work on identifying the gaps and improving the areas where your brand needs growth.
                  </p>
                </div>
              </div>
            </div>

            {/* Solution 2 (SMALL - Width 35% on Desktop) */}
            <div style={{ 
              flex: isMobile ? '1 1 100%' : '1 1 35%', 
              display: 'flex' 
            }}>
              <div 
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: isMobile ? '16px' : '24px',
                  padding: isMobile ? '20px 15px' : '40px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.02)',
                  transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'default',
                  width: '100%'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#203b72';
                  e.currentTarget.style.boxShadow = '0 20px 45px rgba(32, 59, 114, 0.06)';
                  e.currentTarget.style.background = '#fafbfe';
                  const img = e.currentTarget.querySelector('.sol-img');
                  if (img) img.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.02)';
                  e.currentTarget.style.background = '#ffffff';
                  const img = e.currentTarget.querySelector('.sol-img');
                  if (img) img.style.transform = 'scale(1)';
                }}
              >
                {/* Large Background Watermarked Serial Number */}
                <div style={{
                  position: 'absolute',
                  right: isMobile ? '15px' : '25px',
                  bottom: isMobile ? '-10px' : '-15px',
                  fontSize: isMobile ? '50px' : '120px',
                  fontWeight: '900',
                  color: '#203b72',
                  opacity: 0.03,
                  userSelect: 'none',
                  zIndex: 1,
                  fontFamily: 'inherit'
                }}>
                  02
                </div>

                <div style={{ zIndex: 2 }}>
                  {/* Small Image Frame with Generous Gallery Padding & Compact Dimensions */}
                  <div style={{
                    borderRadius: isMobile ? '12px' : '16px',
                    overflow: 'hidden',
                    width: '100%',
                    padding: isMobile ? '8px' : '18px',
                    background: '#f8fafc',
                    border: '1px solid #f1f5f9',
                    maxWidth: isMobile ? '100%' : '320px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: '0px',
                    marginBottom: isMobile ? '15px' : '25px'
                  }}>
                    <div style={{ borderRadius: isMobile ? '8px' : '12px', overflow: 'hidden', aspectRatio: '4/3' }}>
                      <img 
                        src="/images/solution/Solution-02.jpg" 
                        alt="Branding"
                        className="sol-img"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                          transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div style={{ zIndex: 2 }}>
                  <p style={{
                    fontSize: isMobile ? '13px' : '15px',
                    lineHeight: isMobile ? '1.7' : '1.75',
                    color: '#475569',
                    fontWeight: '300',
                    margin: 0,
                    fontFamily: 'inherit'
                  }}>
                    To leave a lasting impression on your audience, <strong style={{ color: '#203b72', fontWeight: '500' }}>creative messaging</strong> plays an important role in your brand. I help craft innovative and meaningful communication that connects with your target audience and attracts potential customers.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ROW 2: Solution 3 (SMALL - Left) & Solution 4 (BIG - Right) */}
        <div className="row" style={{ marginBottom: isMobile ? '20px' : '80px' }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: isMobile ? '20px' : '40px',
            alignItems: 'stretch',
            width: '100%'
          }}>
            
            {/* Solution 3 (SMALL - Width 35% on Desktop) */}
            <div style={{ 
              flex: isMobile ? '1 1 100%' : '1 1 35%', 
              display: 'flex' 
            }}>
              <div 
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: isMobile ? '16px' : '24px',
                  padding: isMobile ? '20px 15px' : '40px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.02)',
                  transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'default',
                  width: '100%'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#203b72';
                  e.currentTarget.style.boxShadow = '0 20px 45px rgba(32, 59, 114, 0.06)';
                  e.currentTarget.style.background = '#fafbfe';
                  const img = e.currentTarget.querySelector('.sol-img');
                  if (img) img.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.02)';
                  e.currentTarget.style.background = '#ffffff';
                  const img = e.currentTarget.querySelector('.sol-img');
                  if (img) img.style.transform = 'scale(1)';
                }}
              >
                {/* Large Background Watermarked Serial Number */}
                <div style={{
                  position: 'absolute',
                  right: isMobile ? '15px' : '25px',
                  bottom: isMobile ? '-10px' : '-15px',
                  fontSize: isMobile ? '50px' : '120px',
                  fontWeight: '900',
                  color: '#203b72',
                  opacity: 0.03,
                  userSelect: 'none',
                  zIndex: 1,
                  fontFamily: 'inherit'
                }}>
                  03
                </div>

                <div style={{ zIndex: 2 }}>
                  {/* Small Image Frame with Generous Gallery Padding & Compact Dimensions */}
                  <div style={{
                    borderRadius: isMobile ? '12px' : '16px',
                    overflow: 'hidden',
                    width: '100%',
                    padding: isMobile ? '8px' : '18px',
                    background: '#f8fafc',
                    border: '1px solid #f1f5f9',
                    maxWidth: isMobile ? '100%' : '320px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: '0px',
                    marginBottom: isMobile ? '15px' : '25px'
                  }}>
                    <div style={{ borderRadius: isMobile ? '8px' : '12px', overflow: 'hidden', aspectRatio: '4/3' }}>
                      <img 
                        src="/images/solution/Solution-03.jpg" 
                        alt="Branding"
                        className="sol-img"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                          transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div style={{ zIndex: 2 }}>
                  <p style={{
                    fontSize: isMobile ? '13px' : '15px',
                    lineHeight: isMobile ? '1.7' : '1.75',
                    color: '#475569',
                    fontWeight: '300',
                    margin: 0,
                    fontFamily: 'inherit'
                  }}>
                    A brand needs a distinct <strong style={{ color: '#203b72', fontWeight: '500' }}>voice, tone, identity, and personality</strong> to stay unique and relevant to its audience. I help shape a strong brand voice that builds meaningful connections with your target audience.
                  </p>
                </div>
              </div>
            </div>

            {/* Solution 4 (BIG - Width 60% on Desktop) */}
            <div style={{ 
              flex: isMobile ? '1 1 100%' : '1 1 60%', 
              display: 'flex' 
            }}>
              <div 
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: isMobile ? '16px' : '24px',
                  padding: isMobile ? '20px 15px' : '40px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.02)',
                  transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'default',
                  width: '100%'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#203b72';
                  e.currentTarget.style.boxShadow = '0 20px 45px rgba(32, 59, 114, 0.06)';
                  e.currentTarget.style.background = '#fafbfe';
                  const img = e.currentTarget.querySelector('.sol-img');
                  if (img) img.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.02)';
                  e.currentTarget.style.background = '#ffffff';
                  const img = e.currentTarget.querySelector('.sol-img');
                  if (img) img.style.transform = 'scale(1)';
                }}
              >
                {/* Large Background Watermarked Serial Number */}
                <div style={{
                  position: 'absolute',
                  right: isMobile ? '15px' : '25px',
                  bottom: isMobile ? '-10px' : '-15px',
                  fontSize: isMobile ? '50px' : '120px',
                  fontWeight: '900',
                  color: '#203b72',
                  opacity: 0.03,
                  userSelect: 'none',
                  zIndex: 1,
                  fontFamily: 'inherit'
                }}>
                  04
                </div>

                <div style={{ zIndex: 2 }}>
                  {/* Big Image Frame with Generous Gallery Padding */}
                  <div style={{
                    borderRadius: isMobile ? '12px' : '16px',
                    overflow: 'hidden',
                    width: '100%',
                    marginBottom: isMobile ? '15px' : '25px',
                    padding: isMobile ? '8px' : '18px',
                    background: '#f8fafc',
                    border: '1px solid #f1f5f9'
                  }}>
                    <div style={{ borderRadius: isMobile ? '8px' : '12px', overflow: 'hidden', aspectRatio: isMobile ? '16/10' : '21/9' }}>
                      <img 
                        src="/images/solution/Solution-04.jpg" 
                        alt="Branding"
                        className="sol-img"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                          transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div style={{ zIndex: 2, maxWidth: '680px' }}>
                  <p style={{
                    fontSize: isMobile ? '13px' : '17px',
                    lineHeight: isMobile ? '1.7' : '1.8',
                    color: '#475569',
                    fontWeight: '300',
                    margin: 0,
                    fontFamily: 'inherit'
                  }}>
                    Branding can feel overwhelming as it is a <strong style={{ color: '#203b72', fontWeight: '500' }}>long-term journey</strong>. With the right guidance, strategic approach, and consistent efforts, I help make the process smoother, effective, and growth-driven.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ROW 3: Solution 5 (BIG - Left) & Solution 6 (SMALL - Right) */}
        <div className="row">
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: isMobile ? '20px' : '40px',
            alignItems: 'stretch',
            width: '100%'
          }}>
            
            {/* Solution 5 (BIG - Width 60% on Desktop) */}
            <div style={{ 
              flex: isMobile ? '1 1 100%' : '1 1 60%', 
              display: 'flex' 
            }}>
              <div 
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: isMobile ? '16px' : '24px',
                  padding: isMobile ? '20px 15px' : '40px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.02)',
                  transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'default',
                  width: '100%'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#203b72';
                  e.currentTarget.style.boxShadow = '0 20px 45px rgba(32, 59, 114, 0.06)';
                  e.currentTarget.style.background = '#fafbfe';
                  const img = e.currentTarget.querySelector('.sol-img');
                  if (img) img.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.02)';
                  e.currentTarget.style.background = '#ffffff';
                  const img = e.currentTarget.querySelector('.sol-img');
                  if (img) img.style.transform = 'scale(1)';
                }}
              >
                {/* Large Background Watermarked Serial Number */}
                <div style={{
                  position: 'absolute',
                  right: isMobile ? '15px' : '25px',
                  bottom: isMobile ? '-10px' : '-15px',
                  fontSize: isMobile ? '50px' : '120px',
                  fontWeight: '900',
                  color: '#203b72',
                  opacity: 0.03,
                  userSelect: 'none',
                  zIndex: 1,
                  fontFamily: 'inherit'
                }}>
                  05
                </div>

                <div style={{ zIndex: 2 }}>
                  {/* Big Image Frame with Generous Gallery Padding */}
                  <div style={{
                    borderRadius: isMobile ? '12px' : '16px',
                    overflow: 'hidden',
                    width: '100%',
                    marginBottom: isMobile ? '15px' : '25px',
                    padding: isMobile ? '8px' : '18px',
                    background: '#f8fafc',
                    border: '1px solid #f1f5f9'
                  }}>
                    <div style={{ borderRadius: isMobile ? '8px' : '12px', overflow: 'hidden', aspectRatio: isMobile ? '16/10' : '21/9' }}>
                      <img 
                        src="/images/solution/Solution-05.jpg" 
                        alt="Branding"
                        className="sol-img"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                          transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div style={{ zIndex: 2, maxWidth: '680px' }}>
                  <p style={{
                    fontSize: isMobile ? '13px' : '17px',
                    lineHeight: isMobile ? '1.7' : '1.8',
                    color: '#475569',
                    fontWeight: '300',
                    margin: 0,
                    fontFamily: 'inherit'
                  }}>
                    <strong style={{ color: '#203b72', fontWeight: '500' }}>Strong communication is essential</strong> for standing out in the market. By understanding market trends, audience expectations, and consumer needs, I provide strategic solutions that support your brand’s long-term growth.
                  </p>
                </div>
              </div>
            </div>

            {/* Solution 6 (SMALL - Width 35% on Desktop) */}
            <div style={{ 
              flex: isMobile ? '1 1 100%' : '1 1 35%', 
              display: 'flex' 
            }}>
              <div 
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: isMobile ? '16px' : '24px',
                  padding: isMobile ? '20px 15px' : '40px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.02)',
                  transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'default',
                  width: '100%'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#203b72';
                  e.currentTarget.style.boxShadow = '0 20px 45px rgba(32, 59, 114, 0.06)';
                  e.currentTarget.style.background = '#fafbfe';
                  const img = e.currentTarget.querySelector('.sol-img');
                  if (img) img.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.02)';
                  e.currentTarget.style.background = '#ffffff';
                  const img = e.currentTarget.querySelector('.sol-img');
                  if (img) img.style.transform = 'scale(1)';
                }}
              >
                {/* Large Background Watermarked Serial Number */}
                <div style={{
                  position: 'absolute',
                  right: isMobile ? '15px' : '25px',
                  bottom: isMobile ? '-10px' : '-15px',
                  fontSize: isMobile ? '50px' : '120px',
                  fontWeight: '900',
                  color: '#203b72',
                  opacity: 0.03,
                  userSelect: 'none',
                  zIndex: 1,
                  fontFamily: 'inherit'
                }}>
                  06
                </div>

                <div style={{ zIndex: 2 }}>
                  {/* Small Image Frame with Generous Gallery Padding & Compact Dimensions */}
                  <div style={{
                    borderRadius: isMobile ? '12px' : '16px',
                    overflow: 'hidden',
                    width: '100%',
                    padding: isMobile ? '8px' : '18px',
                    background: '#f8fafc',
                    border: '1px solid #f1f5f9',
                    maxWidth: isMobile ? '100%' : '320px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: '0px',
                    marginBottom: isMobile ? '15px' : '25px'
                  }}>
                    <div style={{ borderRadius: isMobile ? '8px' : '12px', overflow: 'hidden', aspectRatio: '4/3' }}>
                      <img 
                        src="/images/solution/Solution-06.jpg" 
                        alt="Branding"
                        className="sol-img"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                          transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div style={{ zIndex: 2 }}>
                  <p style={{
                    fontSize: isMobile ? '13px' : '15px',
                    lineHeight: isMobile ? '1.7' : '1.75',
                    color: '#475569',
                    fontWeight: '300',
                    margin: 0,
                    fontFamily: 'inherit'
                  }}>
                    Rebranding can be challenging, especially with concerns about your brand’s position in the market. It is a long journey involving changes in strategy, visuals, communication, and products, and I help guide the process toward meaningful results.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* Strategic CTA Footer Section */}
      <section id="about-footer" className="section-block" style={{
        padding: isMobile ? '60px 0' : '130px 0',
        backgroundColor: '#203b72',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.04) 0%, transparent 50%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="row">
          <div className="column width-10 offset-1" style={{ textAlign: 'center' }}>
            <h2 style={{
              fontSize: isMobile ? '20px' : '40px',
              fontWeight: '800',
              lineHeight: '1.4',
              color: '#ffffff',
              fontFamily: 'inherit',
              letterSpacing: '-1.5px',
              margin: '0 auto 35px',
              maxWidth: '800px'
            }}>
              Are you looking for a brand strategy? I am here to help you with the best results.
            </h2>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Link href="/consultation" style={{
                display: 'inline-block',
                padding: isMobile ? '10px 24px' : '15px 35px',
                border: '1px solid #ffffff',
                borderRadius: '100px',
                fontSize: isMobile ? '11px' : '15px',
                fontWeight: '700',
                color: '#ffffff',
                letterSpacing: '1px',
                background: 'transparent',
                transition: 'all 0.35s cubic-bezier(0.25, 1, 0.5, 1)',
                textTransform: 'uppercase',
                boxShadow: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.color = '#203b72';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 255, 255, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                Grow Your Brand
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
