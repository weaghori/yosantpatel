"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ApproachClient() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Dispatch resize to trigger global timber template checks
    window.dispatchEvent(new Event('resize'));

    // Hydration-safe screen observer
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const steps = [
    {
      num: "01",
      title: "BRAND RESEARCH",
      img: "/images/Approach/Brand-Research-01.jpg",
      desc: "Research is the first step to building and enriching a brand. I provide solutions, strategies, and innovative ideas with my research methods to establish an identity for your brand.",
      list: [
        "Brand Name",
        "Marketing Advice",
        "Package Advice",
        "Target audience/acquisition strategy",
        "Creative Analysis"
      ]
    },
    {
      num: "02",
      title: "BRAND STRATEGY",
      img: "/images/Approach/Brand-Strategy-02.jpg",
      desc: "To confront the growing markets and competitors, your brand needs to stand out and plan a strategy on customers’ needs and expectations. I help you generate ideas and strategies customized to your brand.",
      list: [
        "Customised Brand Strategy",
        "Brand Architecture",
        "Brand Construction",
        "Brand Vision"
      ]
    },
    {
      num: "03",
      title: "BRANDING AND OTHER CREATIVES",
      img: "/images/Approach/Branding-and-other-Creatives-03.jpg",
      desc: "With 16+ years of substantial experience in the industry, I have expertise in graphic designing and branding. I help you with creating innovative messages with a vision - relevant to your target audience.",
      list: [
        "Social Media Development",
        "Official Launches",
        "Brand Visuals",
        "Brand Identity",
        "Campaigns Executions"
      ]
    },
    {
      num: "04",
      title: "BRAND MANAGEMENT",
      img: "/images/Approach/Brand-Management-04.jpg",
      desc: "Brand Management is one of the essential parts for a good image of your brand. Your brand’s identity should be intact in the market. I guide you to build more loyal customers.",
      list: [
        "Branding Solutions",
        "Digital Marketing Strategy",
        "Researching Market Trends",
        "Brand Awareness",
        "Brand Equity"
      ]
    },
    {
      num: "05",
      title: "ENVISION",
      img: "/images/Approach/Envision-05.jpg",
      desc: "Turning your brand research data into your brand vision strategy is ideally a brand envision. By envisioning your brand, I help you create effective communication closer to your brand’s core value.",
      list: [
        "Business Strategy",
        "Market Trend Analysis",
        "Core Message Development",
        "Professional Brand Experience",
        "Appealing Packaging design"
      ]
    },
    {
      num: "06",
      title: "EXPLORE",
      img: "/images/Approach/Explore-06.jpg",
      desc: "Customer feedback and perception is an essential factor for any brand. I help you to get customer reactions and maintain a good brand experience.",
      list: [
        "Customer Feedback Research",
        "Brand Assessment",
        "Brand Image Review",
        "Consumer Insight Research",
        "Brand’s Market Rank Assessment"
      ]
    },
    {
      num: "07",
      title: "EXECUTE",
      img: "/images/Approach/Execute-07.jpg",
      desc: "Execution is taking all the planning into action. With my consultation, I help you throughout the process to make your experience smooth and hassle-free.",
      list: [
        "Unique Brand Identity",
        "Product Design",
        "Website Construction",
        "Corporate Identity",
        "Marketing Execution"
      ]
    },
    {
      num: "08",
      title: "EVALUATE",
      img: "/images/Approach/Evaluate-08.jpg",
      desc: "Analyzing the impact of your brand on the audience is the essential step. With the evaluation, I guide you with solutions for your brand to generate more sales and build a better identity.",
      list: [
        "Clear Road Map",
        "Lead Generation Strategy",
        "Social Media Strategy",
        "Brand Solutions",
        "Core Message Research"
      ]
    }
  ];

  // Render a specific card (BIG or SMALL) based on step information
  const renderCard = (step, isBig) => {
    return (
      <div
        key={step.num}
        style={{
          flex: isMobile ? '1 1 100%' : (isBig ? '1 1 60%' : '1 1 35%'),
          display: 'flex',
          width: '100%'
        }}
      >
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
            const img = e.currentTarget.querySelector('.approach-img');
            if (img) img.style.transform = 'scale(1.02)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '#e2e8f0';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.02)';
            e.currentTarget.style.background = '#ffffff';
            const img = e.currentTarget.querySelector('.approach-img');
            if (img) img.style.transform = 'scale(1)';
          }}
        >
          {/* Large Dark Watermark Number */}
          <div style={{
            position: 'absolute',
            right: isMobile ? '15px' : '25px',
            bottom: isMobile ? '-10px' : '-15px',
            fontSize: isMobile ? '50px' : '120px',
            fontWeight: '900',
            color: '#0f172a',
            opacity: 0.08,
            userSelect: 'none',
            zIndex: 1,
            fontFamily: 'inherit'
          }}>
            {step.num}
          </div>

          <div style={{ zIndex: 2 }}>

            <h3 style={{
              fontSize: isMobile ? '16px' : '22px',
              fontWeight: '800',
              color: '#203b72',
              fontFamily: 'inherit',
              margin: '0 0 20px',
              letterSpacing: '-0.5px'
            }}>
              {step.title}
            </h3>


            <div style={{
              borderRadius: isMobile ? '14px' : '20px',
              overflow: 'hidden',
              width: '100%',
              marginBottom: isMobile ? '15px' : '25px',
              padding: isMobile ? '12px' : '28px',
              background: '#f8fafc',
              border: '1px solid #f1f5f9',
              maxWidth: (!isMobile && !isBig) ? '420px' : '100%',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: '0px'
            }}>
              <div style={{
                borderRadius: isMobile ? '10px' : '14px',
                overflow: 'hidden',
                aspectRatio: isMobile ? '16/10' : (isBig ? '16/9' : '4/3')
              }}>
                <img
                  src={step.img}
                  alt={step.title}
                  className="approach-img"
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

          <div style={{ zIndex: 2, maxWidth: isBig ? '680px' : '100%' }}>
            {/* Description Copy */}
            <p style={{
              fontSize: isMobile ? '13px' : '15px',
              lineHeight: isMobile ? '1.7' : '1.75',
              color: '#475569',
              fontWeight: '300',
              margin: '0 0 20px',
              fontFamily: 'inherit'
            }}>
              {step.desc}
            </p>

            {/* Minimalist Bullet List details */}
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}>
              {step.list.map((item, idx) => (
                <li key={idx} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: isMobile ? '13px' : '14px',
                  color: '#334155',
                  fontWeight: '400',
                  fontFamily: 'inherit'
                }}>
                  <span style={{
                    width: '5px',
                    height: '5px',
                    borderRadius: '50%',
                    backgroundColor: '#203b72',
                    display: 'inline-block'
                  }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Premium Immersive Hero Page Banner */}
      <section style={{
        position: 'relative',
        height: isMobile ? '280px' : '550px',
        backgroundImage: "url('/images/slider/Approach-Yosant-Patel.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
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
              Approach
            </h1>
          </div>
        </div>
      </section>

      {/* Intro Narrative Section */}
      <section id="about" className="section-block" style={{
        padding: isMobile ? '50px 0' : '110px 0',
        backgroundColor: '#ffffff',
        backgroundImage: 'radial-gradient(circle at 50% 120%, rgba(32, 59, 114, 0.04) 0%, transparent 60%)',
        borderBottom: '1px solid #f1f5f9',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="row" style={{ display: 'flex', flexWrap: 'wrap', gap: isMobile ? '30px' : '40px' }}>
          {/* Left Column Heading */}
          <div className="column" style={{
            flex: isMobile ? '1 1 100%' : '1 1 35%',
            margin: 0
          }}>
            <h2 style={{
              fontSize: isMobile ? '22px' : '36px',
              fontWeight: '800',
              lineHeight: '1.25',
              color: '#203b72',
              fontFamily: 'inherit',
              margin: 0,
              letterSpacing: '-1px'
            }}>
              The finest approach caters to brand success
            </h2>
          </div>
          {/* Right Column Body */}
          <div className="column" style={{
            flex: isMobile ? '1 1 100%' : '1 1 55%',
            margin: 0
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <p style={{
                fontSize: isMobile ? '13px' : '16px',
                lineHeight: '1.8',
                color: '#475569',
                fontWeight: '300',
                margin: 0,
                fontFamily: 'inherit'
              }}>
                Aligning business strategy with market trends is the optimum approach for your brand. My approach with brands is quite simple and precise. It includes thorough research, generating innovative ideas, and planning strategies. I like to create ideas and strategies with my clients. Brainstorming together helps to understand each other.
              </p>
              <p style={{
                fontSize: isMobile ? '13px' : '16px',
                lineHeight: '1.8',
                color: '#475569',
                fontWeight: '300',
                margin: 0,
                fontFamily: 'inherit'
              }}>
                I like to create ideas and strategies with my clients. Brainstorming together helps to understand each other.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spacious Asymmetric Editorial Showcase Section */}
      <section className="section-block" style={{
        padding: isMobile ? '50px 0' : '130px 0',
        backgroundColor: '#fbfbfb',
        position: 'relative',
        overflow: 'hidden'
      }}>

        {/* ROW 1: Step 1 (BIG - Left) & Step 2 (SMALL - Right) */}
        <div className="row" style={{ marginBottom: isMobile ? '20px' : '80px' }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: isMobile ? '20px' : '40px',
            alignItems: 'stretch',
            width: '100%'
          }}>
            {renderCard(steps[0], true)}   {/* Step 1 - BIG */}
            {renderCard(steps[1], false)}  {/* Step 2 - SMALL */}
          </div>
        </div>

        {/* ROW 2: Step 3 (SMALL - Left) & Step 4 (BIG - Right) */}
        <div className="row" style={{ marginBottom: isMobile ? '20px' : '80px' }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: isMobile ? '20px' : '40px',
            alignItems: 'stretch',
            width: '100%'
          }}>
            {renderCard(steps[2], false)}  {/* Step 3 - SMALL */}
            {renderCard(steps[3], true)}   {/* Step 4 - BIG */}
          </div>
        </div>

        {/* ROW 3: Step 5 (BIG - Left) & Step 6 (SMALL - Right) */}
        <div className="row" style={{ marginBottom: isMobile ? '20px' : '80px' }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: isMobile ? '20px' : '40px',
            alignItems: 'stretch',
            width: '100%'
          }}>
            {renderCard(steps[4], true)}   {/* Step 5 - BIG */}
            {renderCard(steps[5], false)}  {/* Step 6 - SMALL */}
          </div>
        </div>

        {/* ROW 4: Step 7 (SMALL - Left) & Step 8 (BIG - Right) */}
        <div className="row">
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: isMobile ? '20px' : '40px',
            alignItems: 'stretch',
            width: '100%'
          }}>
            {renderCard(steps[6], false)}  {/* Step 7 - SMALL */}
            {renderCard(steps[7], true)}   {/* Step 8 - BIG */}
          </div>
        </div>

      </section>

      {/* Strategic Footer CTA Section */}
      <section id="approach-footer" className="section-block" style={{
        padding: isMobile ? '80px 0' : '130px 0',
        backgroundColor: '#203b72',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.04) 0%, transparent 50%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="row">
          <div className="column width-10 offset-1" style={{ textAlign: 'center' }}>
            <h2 style={{
              fontSize: isMobile ? '22px' : '40px',
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
