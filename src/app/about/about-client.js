"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutClient() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Dispatch resize to trigger global jQuery scripts scans
    window.dispatchEvent(new Event('resize'));
    
    // Setup hydration-safe screen resize observer
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    let swiperInstance;
    let intervalId;

    const initSwiper = () => {
      if (typeof Swiper !== 'undefined' && document.querySelector(".mySwiper")) {
        swiperInstance = new Swiper(".mySwiper", {
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
        return true;
      }
      return false;
    };

    // Attempt to initialize immediately, otherwise poll
    if (!initSwiper()) {
      intervalId = setInterval(() => {
        if (initSwiper()) {
          clearInterval(intervalId);
        }
      }, 100);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (intervalId) clearInterval(intervalId);
      if (swiperInstance && typeof swiperInstance.destroy === 'function') {
        swiperInstance.destroy();
      }
    };
  }, []);

  const partnerLogos = [
    { src: "/images/logos/Hina Gautam-Yosantpatel.svg", alt: "Hina Gautam Logo" },
    { src: "/images/logos/Color-Yellow-Yosant-Patel-Logo.svg", alt: "Color Yellow Logo" },
    { src: "/images/logos/Noso-Funding-Yosant-Patel-Logo.svg", alt: "Noso Funding Logo" },
    { src: "/images/logos/Home-Decor-Expo-Exhibition-Yosant-Patel-Logo.svg", alt: "Home Decor Expo Exhibition Logo" },
    { src: "/images/logos/DJ-Akki-Music-Yosant-Patel-Logo.svg", alt: "DJ Akki Music Logo" },
    { src: "/images/logos/My-Mobile-Smart-Yosant-Patel-Logo.svg", alt: "My Mobile Smart Logo" },
    { src: "/images/logos/Grandma's-Recipe-Yosant-Patel-Logo.svg", alt: "Grandma's Recipe Logo" },
    { src: "/images/logos/The-Wine-Leaf-Resturant-Food-Yosant-Patel-Logo.svg", alt: "The Wine Leaf Restaurant Logo" },
    { src: "/images/logos/Rajendra-Soda-Center-Cool-Yosant-Patel-Logo.svg", alt: "Rajendra Soda Center Logo" },
    { src: "/images/logos/Twins-Ansh-Aashi-Yosant-Patel-Logo.svg", alt: "Twins Ansh Aashi Logo" }
  ];

  return (
    <>
      {/* Premium Hero Header Section */}
      <section style={{
        position: 'relative',
        height: isMobile ? '280px' : '550px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        {/* Hero Background Image */}
        <Image
          src="/images/slider/About-Kahani-Yosant-Patel.jpg"
          alt="Branding"
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: 'cover',
            objectPosition: isMobile ? '28% center' : 'center center',
            zIndex: 1
          }}
        />
        {/* Hero Caption Lockup */}
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
              About Yosant Patel
            </h1>
          </div>
        </div>
      </section>
 
      {/* Editorial Philosophical Section */}
      <section className="section-block replicable-content" style={{ 
        padding: isMobile ? '60px 0' : '130px 0', 
        backgroundColor: '#ffffff', 
        borderBottom: '1px solid #f1f5f9',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="row">
          <div className="column width-12" style={{ marginBottom: isMobile ? '35px' : '70px', textAlign: 'left' }}>
            <h2 style={{
              fontSize: isMobile ? '24px' : '48px',
              fontWeight: '900',
              lineHeight: '1.2',
              color: '#0f172a',
              fontFamily: 'inherit',
              margin: 0,
              letterSpacing: '-1.5px',
              background: 'linear-gradient(135deg, #203b72 0%, #0f172a 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              I shape brands for long-term success
            </h2>
          </div>
        </div>
 
        {/* 3 Premium Pillar Cards */}
        <div className="row">
          <div className="column width-12">
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: isMobile ? '20px' : '35px',
              justifyContent: 'center',
              width: '100%',
              margin: '0 auto'
            }}>
              
              {/* Card 1 */}
              <div style={{ flex: '1 1 300px', maxWidth: '380px', display: 'flex' }}>
                <div style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: isMobile ? '16px' : '24px',
                  padding: isMobile ? '25px 20px' : '45px 35px',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.02)',
                  transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'default',
                  width: '100%'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#203b72';
                  e.currentTarget.style.background = '#fafbfe';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(32, 59, 114, 0.06)';
                  const b = e.currentTarget.querySelector('.badge-num');
                  if (b) { b.style.background = '#203b72'; b.style.color = '#ffffff'; }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.background = '#ffffff';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.02)';
                  const b = e.currentTarget.querySelector('.badge-num');
                  if (b) { b.style.background = '#f1f5f9'; b.style.color = '#203b72'; }
                }}
                >
                  <div className="badge-num" style={{
                    width: isMobile ? '38px' : '45px',
                    height: isMobile ? '38px' : '45px',
                    borderRadius: '50%',
                    backgroundColor: '#f1f5f9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: isMobile ? '13px' : '15px',
                    fontWeight: '800',
                    color: '#203b72',
                    margin: isMobile ? '0 auto 15px' : '0 auto 25px',
                    transition: 'all 0.3s ease'
                  }}>
                    01
                  </div>
                  <p style={{
                    fontSize: isMobile ? '13px' : '15px',
                    lineHeight: isMobile ? '1.7' : '1.8',
                    color: '#475569',
                    fontWeight: '300',
                    margin: 0,
                    fontFamily: 'inherit',
                    textAlign: 'center'
                  }}>
                    With <strong style={{ color: '#203b72', fontWeight: '600' }}>18+ years of extensive industry experience</strong>, I have developed a focused approach and strong vision to elevate brands. As a brand strategist and creative director, I am driven by a passion for building impactful and meaningful brand identities.
                  </p>
                </div>
              </div>
 
              {/* Card 2 */}
              <div style={{ flex: '1 1 300px', maxWidth: '380px', display: 'flex' }}>
                <div style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: isMobile ? '16px' : '24px',
                  padding: isMobile ? '25px 20px' : '45px 35px',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.02)',
                  transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'default',
                  width: '100%'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#203b72';
                  e.currentTarget.style.background = '#fafbfe';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(32, 59, 114, 0.06)';
                  const b = e.currentTarget.querySelector('.badge-num');
                  if (b) { b.style.background = '#203b72'; b.style.color = '#ffffff'; }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.background = '#ffffff';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.02)';
                  const b = e.currentTarget.querySelector('.badge-num');
                  if (b) { b.style.background = '#f1f5f9'; b.style.color = '#203b72'; }
                }}
                >
                  <div className="badge-num" style={{
                    width: isMobile ? '38px' : '45px',
                    height: isMobile ? '38px' : '45px',
                    borderRadius: '50%',
                    backgroundColor: '#f1f5f9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: isMobile ? '13px' : '15px',
                    fontWeight: '800',
                    color: '#203b72',
                    margin: isMobile ? '0 auto 15px' : '0 auto 25px',
                    transition: 'all 0.3s ease'
                  }}>
                    02
                  </div>
                  <p style={{
                    fontSize: isMobile ? '13px' : '15px',
                    lineHeight: isMobile ? '1.7' : '1.8',
                    color: '#475569',
                    fontWeight: '300',
                    margin: 0,
                    fontFamily: 'inherit',
                    textAlign: 'center'
                  }}>
                    I aim to strengthen your brand through <strong style={{ color: '#203b72', fontWeight: '600' }}>market research</strong>, campaign analysis, and tailored strategic solutions. My expertise in graphic design also allows me to create impactful visuals and messages for stronger brand communication.
                  </p>
                </div>
              </div>
 
              {/* Card 3 */}
              <div style={{ flex: '1 1 300px', maxWidth: '380px', display: 'flex' }}>
                <div style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: isMobile ? '16px' : '24px',
                  padding: isMobile ? '25px 20px' : '45px 35px',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.02)',
                  transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'default',
                  width: '100%'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#203b72';
                  e.currentTarget.style.background = '#fafbfe';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(32, 59, 114, 0.06)';
                  const b = e.currentTarget.querySelector('.badge-num');
                  if (b) { b.style.background = '#203b72'; b.style.color = '#ffffff'; }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.background = '#ffffff';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.02)';
                  const b = e.currentTarget.querySelector('.badge-num');
                  if (b) { b.style.background = '#f1f5f9'; b.style.color = '#203b72'; }
                }}
                >
                  <div className="badge-num" style={{
                    width: isMobile ? '38px' : '45px',
                    height: isMobile ? '38px' : '45px',
                    borderRadius: '50%',
                    backgroundColor: '#f1f5f9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: isMobile ? '13px' : '15px',
                    fontWeight: '800',
                    color: '#203b72',
                    margin: isMobile ? '0 auto 15px' : '0 auto 25px',
                    transition: 'all 0.3s ease'
                  }}>
                    03
                  </div>
                  <p style={{
                    fontSize: isMobile ? '13px' : '15px',
                    lineHeight: isMobile ? '1.7' : '1.8',
                    color: '#475569',
                    fontWeight: '300',
                    margin: 0,
                    fontFamily: 'inherit',
                    textAlign: 'center'
                  }}>
                    A brand consultant acts like a guide, supporting brands through every stage and offering solutions, whether it involves marketing strategies or rebranding. As a brand strategist, my role is to <strong style={{ color: '#203b72', fontWeight: '600' }}>build and strengthen your brand</strong> while staying true to its core values.
                  </p>
                </div>
              </div>
 
            </div>
          </div>
        </div>
      </section>

      {/* Journey Editorial Showcase Section */}
      <section className="section-block" style={{ 
        padding: isMobile ? '60px 0' : '130px 0', 
        backgroundColor: '#fbfbfb', 
        backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(32, 59, 114, 0.03) 0%, transparent 60%)',
        borderBottom: '1px solid #f1f5f9',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Top Header Block */}
        <div className="row">
          <div className="column width-12" style={{ textAlign: 'left', marginBottom: isMobile ? '25px' : '40px' }}>
            <h2 style={{
              fontSize: isMobile ? '22px' : '38px',
              fontWeight: '900',
              lineHeight: '1.3',
              color: '#0f172a',
              fontFamily: 'inherit',
              letterSpacing: '-1px',
              margin: 0,
              maxWidth: '900px'
            }}>
              My journey began in Rajkot Gujarat in 2004 with exploring and designing with a curiosity to create.
            </h2>
          </div>
        </div>

        {/* Center: Large Cinematic Image */}
        <div className="row">
          <div className="column width-12" style={{ display: 'flex', justifyContent: 'center', marginBottom: isMobile ? '30px' : '55px' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '100%' }}>
              {/* Backing decorative geometric offset shape */}
              <div style={{
                position: 'absolute',
                top: isMobile ? '10px' : '20px',
                left: isMobile ? '10px' : '20px',
                width: '100%',
                height: '100%',
                backgroundColor: '#203b72',
                borderRadius: isMobile ? '16px' : '28px',
                zIndex: 1,
                opacity: 0.05
              }} />
              
              {/* Main image container */}
              <div 
                style={{
                  background: '#ffffff',
                  border: isMobile ? '6px solid #ffffff' : '12px solid #ffffff',
                  borderRadius: isMobile ? '16px' : '28px',
                  boxShadow: '0 30px 65px rgba(0, 0, 0, 0.07)',
                  overflow: 'hidden',
                  width: '100%',
                  position: 'relative',
                  zIndex: 2,
                  transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => { 
                  if (!isMobile) {
                    e.currentTarget.style.transform = 'translateY(-8px) scale(1.01)';
                    e.currentTarget.style.boxShadow = '0 40px 85px rgba(32, 59, 114, 0.12)';
                  }
                }}
                onMouseLeave={(e) => { 
                  if (!isMobile) {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 30px 65px rgba(0, 0, 0, 0.07)';
                  }
                }}
              >
                <Image 
                  src="/images/Yosant_Patel_Branding_Design_Creativity_Boost_Your_Brand_Artist.jpg" 
                  alt="Kahani Yosant Patel" 
                  width={1200}
                  height={675}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                  style={{ width: '100%', height: 'auto', display: 'block' }} 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: Staggered side-by-side story chapters */}
        <div className="row">
          <div className="column width-12">
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: isMobile ? '20px' : '30px', 
              justifyContent: 'center',
              width: '100%' 
            }}>
              
              {/* Chapter 1 */}
              <div style={{ flex: '1 1 450px', maxWidth: '580px', display: 'flex' }}>
                <div style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderLeft: '4px solid #e2e8f0',
                  borderRadius: isMobile ? '16px' : '20px',
                  padding: isMobile ? '20px' : '30px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.01)',
                  transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'default',
                  width: '100%'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#203b72';
                  e.currentTarget.style.borderLeftColor = '#203b72';
                  if (!isMobile) {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                  }
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(32, 59, 114, 0.04)';
                  e.currentTarget.style.background = '#fafbfe';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.borderLeftColor = '#e2e8f0';
                  if (!isMobile) {
                    e.currentTarget.style.transform = 'translateY(0)';
                  }
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.01)';
                  e.currentTarget.style.background = '#ffffff';
                }}
                >
                  <h3 style={{
                    fontSize: isMobile ? '11px' : '12px',
                    fontWeight: '850',
                    color: '#203b72',
                    display: 'block',
                    margin: 0,
                    marginBottom: isMobile ? '6px' : '10px',
                    letterSpacing: '1.5px',
                    fontFamily: 'inherit'
                  }}>
                    CHAPTER I (2004 – 2016)
                  </h3>
                  <p style={{
                    fontSize: isMobile ? '13px' : '15px',
                    lineHeight: isMobile ? '1.7' : '1.75',
                    color: '#475569',
                    fontWeight: '300',
                    fontFamily: 'inherit',
                    margin: 0
                  }}>
                    From 2004 to 2016, I gained hands-on experience across various branding roles. During this journey, I developed strong creative skills, with designing and transforming ideas into impactful visuals becoming one of my core strengths.
                  </p>
                </div>
              </div>

              {/* Chapter 2 */}
              <div style={{ flex: '1 1 450px', maxWidth: '580px', display: 'flex' }}>
                <div style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderLeft: '4px solid #e2e8f0',
                  borderRadius: isMobile ? '16px' : '20px',
                  padding: isMobile ? '20px' : '30px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.01)',
                  transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'default',
                  width: '100%'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#203b72';
                  e.currentTarget.style.borderLeftColor = '#203b72';
                  if (!isMobile) {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                  }
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(32, 59, 114, 0.04)';
                  e.currentTarget.style.background = '#fafbfe';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.borderLeftColor = '#e2e8f0';
                  if (!isMobile) {
                    e.currentTarget.style.transform = 'translateY(0)';
                  }
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.01)';
                  e.currentTarget.style.background = '#ffffff';
                }}
                >
                  <h3 style={{
                    fontSize: isMobile ? '11px' : '12px',
                    fontWeight: '850',
                    color: '#203b72',
                    display: 'block',
                    margin: 0,
                    marginBottom: isMobile ? '6px' : '10px',
                    letterSpacing: '1.5px',
                    fontFamily: 'inherit'
                  }}>
                    CHAPTER II (2017 – PRESENT)
                  </h3>
                  <p style={{
                    fontSize: isMobile ? '13px' : '15px',
                    lineHeight: isMobile ? '1.7' : '1.75',
                    color: '#475569',
                    fontWeight: '300',
                    fontFamily: 'inherit',
                    margin: 0
                  }}>
                    While curiosity gradually evolved into a passion for brand building, in 2017 I started <strong style={{ color: '#203b72', fontWeight: '600' }}>Aghori Media House</strong>, a creative media agency focused on building meaningful brand connections. As a brand consultant, I aim to transform brands through the right strategy, creative direction, and in-depth research by identifying and improving the gaps within your brand.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Infinite Logo Ticker Swiper Section */}
      <div className="section-block" style={{ padding: isMobile ? '45px 0' : '90px 0', backgroundColor: '#203b72', borderTop: '1px solid rgba(255, 255, 255, 0.05)', width: '100%', overflow: 'hidden' }}>  
        
        {/* Title Container (keeps standard row width alignment) */}
        <div className="row">
          <div className="column width-12">
            <h3 style={{
              fontSize: isMobile ? '11px' : '13px',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              color: 'rgba(255, 255, 255, 0.7)',
              fontWeight: '700',
              marginBottom: isMobile ? '15px' : '45px',
              textAlign: 'center',
              fontFamily: 'inherit'
            }}>
              Excellence via collaboration
            </h3>
          </div>
        </div>

        {/* Infinite Logo Ticker Swiper (Placed outside .row to extend 100% full screen width!) */}
        <div className="swiper mySwiper" style={{ width: '100%', overflow: 'hidden' }}>
          <div className="swiper-wrapper" style={{ display: 'flex', alignItems: 'center' }}>
            {[
              ...partnerLogos,
              ...partnerLogos.slice(5).concat(partnerLogos.slice(0, 5)),
              ...partnerLogos.slice(2).concat(partnerLogos.slice(0, 2))
            ].map((logo, index) => (
              <div 
                key={index} 
                className="swiper-slide" 
                style={{ 
                  width: 'auto', 
                  marginRight: isMobile ? '15px' : '35px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}
              >
                <div 
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: isMobile ? '12px' : '16px',
                    padding: isMobile ? '8px 16px' : '15px 30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: isMobile ? '55px' : '85px',
                    boxShadow: 'none',
                    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#ffffff';
                    e.currentTarget.style.borderColor = '#ffffff';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 255, 255, 0.1)';
                    const img = e.currentTarget.querySelector('img');
                    if (img) img.style.filter = 'none';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.boxShadow = 'none';
                    const img = e.currentTarget.querySelector('img');
                    if (img) img.style.filter = 'brightness(0) invert(1)';
                  }}
                >
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    width={150}
                    height={40}
                    style={{
                      height: isMobile ? '22px' : '40px',
                      width: 'auto',
                      filter: 'brightness(0) invert(1)',
                      transition: 'all 0.3s ease',
                      display: 'block',
                      clipPath: 'inset(0 4px 0 0)'
                    }} 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}
