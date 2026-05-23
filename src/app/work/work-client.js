"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function WorkClient() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.dispatchEvent(new Event('resize'));

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  const projects = [
    {
      title: "Mitraa's",
      description: "Identity",
      href: "/work/mitraas",
      img: "/images/work/Mitraas-Yosant-Patel-main-slider.jpg",
      className: "development large"
    },
    {
      title: "Chandan",
      description: "Re-branding, Identity",
      href: "/work/chandan",
      img: "/images/work/Chandan-jewellry-Yosant-Patel-main-slider.jpg",
      className: "grid-sizer design"
    },
    {
      title: "ELEGANT CLASSES",
      description: "Design, Brand Strategy",
      href: "/work/elegant-classes",
      img: "/images/work/Elegant-Classes-School-Yosant-Patel-main-slider.jpg",
      className: "illutration"
    },
    {
      title: "Kiya",
      description: "Identity",
      href: "/work/kiya",
      img: "/images/work/Kia-Solar-Panel-Yosant-Patel-main-slider.jpg",
      className: "design illustration"
    },
    {
      title: "Mjwel",
      description: "Re-branding",
      href: "/work/mjwel",
      img: "/images/work/Mjwel-Yosant-Patel-Main-Slider.jpg",
      className: "illustration"
    },
    {
      title: "Nirali",
      description: "Branding Solutions",
      href: "/work/nirali",
      img: "/images/work/Nirali-Yosant-Patel-Main-Slider.jpg",
      className: "design"
    },
    {
      title: "Meraki",
      description: "Brand Creative & Design",
      href: "/work/meraki",
      img: "/images/work/Meraki-Saloon-Yosant-Patel-Main-Slider.jpg",
      className: "development"
    },
    {
      title: "The My Mobile",
      description: "Social Media Strategy, Design",
      href: "/work/the-my-mobile",
      img: "/images/work/My-Mobile-Yosant-Patel-Main-Slider.jpg",
      className: "illustration"
    },
    {
      title: "Serengeti",
      description: "Social Media Strategy, Lead Generation",
      href: "/work/serengeti",
      img: "/images/work/Serengeti-Resort-Yosant-Patel-Main-Slider.jpg",
      className: "illustration"
    }
  ];

  return (
    <>
      {/* Premium Solid Brand Navy Hero Header Banner */}
      <section className="work-hero-section" style={{
        position: 'relative',
        background: '#203b72',
        minHeight: isMobile ? 'auto' : '550px',
        paddingTop: isMobile ? '140px' : '220px',
        paddingBottom: isMobile ? '60px' : '100px',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        overflow: 'hidden',
        width: '100%'
      }}>
        {/* Decorative Grid Frame */}
        <div className="row" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <div className="column width-12" style={{ textAlign: 'left', padding: '0 20px' }}>
            <h1 className="font-alt-1" style={{
              fontSize: isMobile ? '32px' : '56px',
              fontWeight: '700',
              color: '#ffffff',
              margin: '0 0 20px 0',
              padding: 0,
              lineHeight: '1.2'
            }}>
              Brands Built with VISION
            </h1>
            <h3 className="font-alt-1 mobile-res-work" style={{
              fontSize: isMobile ? '16px' : '28px',
              lineHeight: '1.45',
              fontWeight: '400',
              color: '#ffffff',
              margin: 0,
              padding: 0,
              letterSpacing: '-0.5px'
            }}>
              With <strong>18+ years</strong> of extensive experience in the industry, <br className="hide-on-mobile" />
              I have worked on <strong>207+ projects</strong>. I strive to offer best results to <br className="hide-on-mobile" />
              varied brands by bringing creativity aligned with impactful strategy.
            </h3>
          </div>
        </div>
      </section>



      <div className="section-block" style={{ padding: isMobile ? '80px 0' : '120px 0', backgroundColor: '#ffffff' }}>
        <div className="row">
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: isMobile ? '20px' : '40px',
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {projects.map((project, index) => (
              <Link href={project.href} key={index} style={{ textDecoration: 'none' }}>
                <div 
                  style={{
                    position: 'relative',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    height: isMobile ? '320px' : '420px',
                    backgroundColor: '#f1f5f9',
                    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
                    cursor: 'pointer',
                    border: '1px solid rgba(0, 0, 0, 0.05)'
                  }}
                  onMouseEnter={(e) => {
                    const img = e.currentTarget.querySelector('.project-img');
                    const overlay = e.currentTarget.querySelector('.project-overlay');
                    const textContent = e.currentTarget.querySelector('.project-text');
                    
                    if(img) img.style.transform = 'scale(1.1)';
                    if(overlay) overlay.style.opacity = '1';
                    if(textContent) {
                      textContent.style.transform = 'translateY(0)';
                      textContent.style.opacity = '1';
                    }
                    e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.1)';
                    e.currentTarget.style.boxShadow = '0 20px 45px rgba(0, 0, 0, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    const img = e.currentTarget.querySelector('.project-img');
                    const overlay = e.currentTarget.querySelector('.project-overlay');
                    const textContent = e.currentTarget.querySelector('.project-text');
                    
                    if(img) img.style.transform = 'scale(1)';
                    if(overlay) overlay.style.opacity = '0.3';
                    if(textContent) {
                      textContent.style.transform = 'translateY(20px)';
                      textContent.style.opacity = '0';
                    }
                    e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.05)';
                    e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.1)';
                  }}
                >
                  <img 
                    className="project-img"
                    src={project.img} 
                    alt={project.title} 
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                    }}
                  />
                  {/* Dark Gradient Overlay */}
                  <div 
                    className="project-overlay"
                    style={{
                      position: 'absolute',
                      top: 0, left: 0, right: 0, bottom: 0,
                      background: 'linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.5) 40%, transparent 100%)',
                      opacity: '0.3',
                      transition: 'opacity 0.4s ease'
                    }} 
                  />
                  
                  {/* Text Content */}
                  <div 
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      padding: '30px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      zIndex: 2
                    }}
                  >
                    <div 
                      className="project-text"
                      style={{
                        transform: 'translateY(20px)',
                        opacity: 0,
                        transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                      }}
                    >
                      <span style={{ 
                        fontSize: '11px', 
                        fontWeight: '700', 
                        textTransform: 'uppercase', 
                        color: '#60a5fa', 
                        letterSpacing: '2px', 
                        marginBottom: '10px',
                        display: 'inline-block',
                        background: 'rgba(96, 165, 250, 0.1)',
                        padding: '4px 12px',
                        borderRadius: '20px',
                        backdropFilter: 'blur(4px)'
                      }}>
                        {project.description}
                      </span>
                      <h3 style={{ 
                        fontSize: '24px', 
                        fontWeight: '800', 
                        color: '#ffffff', 
                        margin: 0,
                        lineHeight: '1.2',
                        letterSpacing: '-0.5px',
                        textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                      }}>
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
