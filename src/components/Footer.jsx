"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer 
      style={{
        backgroundColor: '#ffffff',
        borderTop: '1px solid #f2f2f5',
        padding: '80px 5% 40px',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        color: '#111111'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Top Section - Main Content */}
        <div 
          style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'space-between', 
            gap: '50px',
            marginBottom: '80px'
          }}
        >
          
          {/* Left Column - Brand & Let's Talk */}
          <div style={{ flex: '1 1 350px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ marginBottom: '40px' }}>
              <Link href="/" style={{ display: 'inline-block', transition: 'opacity 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                <img 
                  src="/images/YOSANT BLACK LOGO.svg" 
                  alt="Yosant Patel Logo" 
                  style={{ height: '28px', width: 'auto', display: 'block' }} 
                />
              </Link>
            </div>
            
            <div>
              <h4 style={{ 
                fontSize: '11px', 
                textTransform: 'uppercase', 
                letterSpacing: '3px', 
                color: '#999999', 
                marginBottom: '16px', 
                fontWeight: '600' 
              }}>
                Let's Talk
              </h4>
              <p style={{ margin: 0 }}>
                <a 
                  href="mailto:iam@yosantpatel.com" 
                  style={{ 
                    fontSize: 'clamp(18px, 2.5vw, 24px)', 
                    color: '#111111', 
                    textDecoration: 'none', 
                    transition: 'all 0.4s ease', 
                    fontWeight: '300',
                    display: 'inline-block'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#203b72';
                    e.target.style.transform = 'translateX(5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#111111';
                    e.target.style.transform = 'translateX(0px)';
                  }}
                >
                  iam@yosantpatel.com
                </a>
              </p>
            </div>
          </div>
          
          {/* Center Column - Explore */}
          <div style={{ flex: '1 1 250px' }}>
            <h4 style={{ 
              fontSize: '11px', 
              textTransform: 'uppercase', 
              letterSpacing: '3px', 
              color: '#999999', 
              marginBottom: '30px', 
              fontWeight: '600' 
            }}>
              Explore
            </h4>
            <ul style={{ 
              listStyle: 'none', 
              padding: 0, 
              margin: 0, 
              display: 'grid', 
              gridTemplateColumns: 'repeat(2, 1fr)', 
              gap: '20px 30px' 
            }}>
              {[
                { name: 'About', path: '/about' },
                { name: 'Solutions', path: '/solutions' },
                { name: 'Approach', path: '/approach' },
                { name: 'Work', path: '/work' },
                { name: 'Blog', path: '/blogs' },
                { name: 'Contact', path: '/contact' }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.path} 
                    style={{ 
                      fontSize: '15px', 
                      color: '#444444', 
                      textDecoration: 'none', 
                      fontWeight: '400', 
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      display: 'inline-block'
                    }}
                    onMouseEnter={(e) => { 
                      e.target.style.color = '#203b72'; 
                      e.target.style.transform = 'translateX(6px)'; 
                    }}
                    onMouseLeave={(e) => { 
                      e.target.style.color = '#444444'; 
                      e.target.style.transform = 'translateX(0px)'; 
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Right Column - Social Icons */}
          <div style={{ flex: '1 1 250px' }}>
            <h4 style={{ 
              fontSize: '11px', 
              textTransform: 'uppercase', 
              letterSpacing: '3px', 
              color: '#999999', 
              marginBottom: '30px', 
              fontWeight: '600' 
            }}>
              Follow Us
            </h4>
            <ul style={{ 
              padding: 0, 
              margin: 0, 
              listStyle: 'none', 
              display: 'flex', 
              flexWrap: 'wrap',
              gap: '16px' 
            }}>
              {[
                { icon: 'fa-facebook-official', url: 'https://www.facebook.com/iamyosantpatel' },
                { icon: 'fa-instagram', url: 'https://www.instagram.com/iamyosantpatel/' },
                { icon: 'fa-behance', url: 'https://www.behance.net/iamyosantpatel' },
                { icon: 'fa-youtube-play', url: 'https://www.youtube.com/channel/UCFt5AN2gdDfhgb3stWLgltA/videos' }
              ].map((social, index) => (
                <li key={index}>
                  <a 
                    href={social.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      width: '46px', 
                      height: '46px', 
                      borderRadius: '50%', 
                      backgroundColor: '#f8f9fa',
                      color: '#555555', 
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)', 
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => { 
                      e.currentTarget.style.backgroundColor = '#203b72'; 
                      e.currentTarget.style.color = '#ffffff'; 
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 10px 20px rgba(32, 59, 114, 0.15)';
                    }}
                    onMouseLeave={(e) => { 
                      e.currentTarget.style.backgroundColor = '#f8f9fa'; 
                      e.currentTarget.style.color = '#555555'; 
                      e.currentTarget.style.transform = 'translateY(0px)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <span className={`fa ${social.icon}`} style={{ fontSize: '18px' }}></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
        
        {/* Bottom Section - Copyright & Legal */}
        <div style={{ 
          borderTop: '1px solid #f2f2f5', 
          paddingTop: '30px', 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          gap: '20px'
        }}>
          <p style={{ 
            margin: 0, 
            color: '#888888', 
            fontSize: '13px',
            fontWeight: '400'
          }}>
            &copy; 2025 Yosant Patel. All Rights Reserved.
          </p>
          
          <div style={{ 
            display: 'flex', 
            gap: '30px', 
            fontSize: '13px'
          }}>
            <Link 
              href="/terms-conditions" 
              style={{ color: '#888888', textDecoration: 'none', transition: 'color 0.3s ease' }}
              onMouseEnter={(e) => e.target.style.color = '#203b72'}
              onMouseLeave={(e) => e.target.style.color = '#888888'}
            >
              Terms & conditions
            </Link>
            <Link 
              href="/privacy-policy" 
              style={{ color: '#888888', textDecoration: 'none', transition: 'color 0.3s ease' }}
              onMouseEnter={(e) => e.target.style.color = '#203b72'}
              onMouseLeave={(e) => e.target.style.color = '#888888'}
            >
              Privacy policy
            </Link>
          </div>
        </div>

      </div>
      <a id="bottom_top"></a>

      {/* Floating Scroll to Top Button */}
      <div
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: '#203b72',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 9999,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.8)',
          pointerEvents: isVisible ? 'all' : 'none',
          boxShadow: '0 10px 25px rgba(32, 59, 114, 0.25)',
          transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
          padding: 0,
          margin: 0,
          boxSizing: 'border-box'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#ffffff';
          e.currentTarget.style.color = '#203b72';
          e.currentTarget.style.borderColor = '#203b72';
          e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
          e.currentTarget.style.boxShadow = '0 15px 35px rgba(32, 59, 114, 0.35)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#203b72';
          e.currentTarget.style.color = '#ffffff';
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.style.boxShadow = '0 10px 25px rgba(32, 59, 114, 0.25)';
        }}
      >
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          style={{ display: 'block', transition: 'transform 0.3s ease' }}
        >
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </div>
    </footer>
  );
}