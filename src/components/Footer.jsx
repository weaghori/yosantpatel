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
    <>
      <style>{`
        /* Premium Creative Editorial Footer - Featuring Brand Navy #203b72 Accents */
        footer.premium-footer {
          background-color: #ffffff;
          border-top: 1px solid #f1f5f9;
          position: relative;
          overflow: hidden;
          padding: 100px 0 40px;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          color: #475569;
        }

        .footer-max-width {
          margin: 0 auto;
        }

        /* Top Row: Asymmetrical Brand + Tagline vs Big Creative Email CTA */
        .footer-top-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 60px;
          margin-bottom: 80px;
        }

        .footer-brand-section {
          max-width: 420px;
        }

        .footer-logo-wrapper {
          margin-bottom: 24px;
        }

        .footer-logo-img {
          height: 26px;
          width: auto;
          display: block;
          transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .footer-logo-img:hover {
          opacity: 0.75;
        }

        .footer-brand-tagline {
          font-size: 14px;
          line-height: 1.6;
          color: #64748b;
          margin: 0;
          font-weight: 400;
        }

        .footer-cta-section {
          text-align: right;
        }

        .footer-cta-tag {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 3px;
          color: #203b72;
          font-weight: 600;
          margin-bottom: 14px;
          display: block;
        }

        .footer-cta-statement {
          font-size: 16px;
          color: #64748b;
          margin: 0 0 10px 0;
          font-weight: 400;
          font-style: italic;
        }

        .footer-email-link {
          font-size: clamp(16px, 1.8vw, 22px);
          color: #0f172a;
          text-decoration: none;
          font-weight: 300;
          display: inline-block;
          position: relative;
          transition: color 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .footer-email-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #203b72;
          transform: scaleX(0.15);
          transform-origin: right;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .footer-email-link:hover {
          color: #203b72;
        }
        
        .footer-email-link:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }

        /* Divider lines */
        .footer-divider {
          height: 1px;
          background-color: #f1f5f9;
          width: 100%;
          margin-bottom: 45px;
        }

        /* Middle Row: Editorial Horizontal Links & Glassmorphic Connect Icons */
        .footer-middle-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 40px;
          margin-bottom: 60px;
        }

        .footer-nav-section {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .footer-nav-label {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 3px;
          color: #203b72;
          font-weight: 600;
          margin-right: 10px;
        }

        .footer-horizontal-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px 24px;
        }

        .footer-nav-link {
          font-size: 15px;
          color: #475569;
          text-decoration: none;
          font-weight: 400;
          transition: color 0.3s cubic-bezier(0.16, 1, 0.3, 1), transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          display: inline-block;
        }
        
        .footer-nav-link:hover {
          color: #203b72;
          transform: translateY(-2px);
        }

        .footer-slash {
          color: #e2e8f0;
          font-size: 14px;
          user-select: none;
        }

        .footer-social-section {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .footer-social-label {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 3px;
          color: #203b72;
          font-weight: 600;
        }

        .footer-social-list {
          padding: 0;
          margin: 0;
          list-style: none;
          display: flex;
          gap: 12px;
        }

        .footer-social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          color: #475569;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          text-decoration: none;
          position: relative;
          overflow: hidden;
        }
        
        .footer-social-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #203b72;
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 1;
        }
        
        .footer-social-btn span {
          position: relative;
          z-index: 2;
          font-size: 16px;
          transition: color 0.4s ease;
        }
        
        .footer-social-btn:hover {
          color: #ffffff;
          transform: translateY(-3px);
          border-color: #203b72;
          box-shadow: 0 8px 16px rgba(32, 59, 114, 0.12);
        }
        
        .footer-social-btn:hover::before {
          opacity: 1;
        }

        /* Bottom Row: Minimal Copyright & Legal Links */
        .footer-bottom-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          border-top: 1px solid #f1f5f9;
          padding-top: 35px;
        }

        .footer-copyright {
          margin: 0;
          color: #64748b;
          font-size: 13px;
          font-weight: 400;
        }

        .footer-legal-links {
          display: flex;
          gap: 30px;
          font-size: 13px;
        }

        .footer-legal-link {
          color: #64748b;
          text-decoration: none;
          transition: color 0.3s ease;
          display: inline-block;
        }
        
        .footer-legal-link:hover {
          color: #203b72;
        }

        /* Floating Scroll to Top */
        .scroll-to-top-btn {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          color: #203b72;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 9999;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .scroll-to-top-btn:hover {
          background-color: #203b72;
          color: #ffffff;
          border-color: #203b72;
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 15px 30px rgba(32, 59, 114, 0.25);
        }

        /* Responsiveness */
        @media (max-width: 991px) {
          .footer-top-row {
            flex-direction: column;
            gap: 40px;
            align-items: flex-start;
          }
          .footer-cta-section {
            text-align: left;
          }
          .footer-middle-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 30px;
          }
        }
        @media (max-width: 767px) {
          footer.premium-footer {
            padding: 80px 6% 35px;
          }
          .footer-top-row {
            margin-bottom: 50px;
          }
          .footer-logo-wrapper {
            margin-bottom: 16px;
          }
          .footer-horizontal-links {
            gap: 12px 18px;
          }
          .footer-nav-section {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
          .footer-social-section {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
          .footer-bottom-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
          .footer-legal-links {
            gap: 20px;
          }
        }
      `}</style>

      <footer className="premium-footer">
        <div className="row footer-max-width">

          {/* Top Row: Asymmetrical Brand Info + Gigantic Email CTA */}
          <div className="footer-top-row">

            <div className="footer-brand-section">
              <div className="footer-logo-wrapper" style={{ marginBottom: '20px' }}>
                <Link href="/">
                  <img
                    src="/images/YOSANT LOGO-01.svg"
                    alt="Yosant Patel Logo"
                    className="footer-logo-img"
                    width={150}
                    height={40}
                  />
                </Link>
              </div>
              <p className="footer-brand-tagline">
                Hello, I am Yosant Patel, a brand strategist and brand consultant in Mumbai helping startups and businesses build strong brand identities through strategic and creative branding solutions.
              </p>
            </div>

            <div className="footer-cta-section">
              <span className="footer-cta-tag">Let's Talk</span>
              <a href="mailto:iam@yosantpatel.com" className="footer-email-link">
                iam@yosantpatel.com
              </a>
            </div>

          </div>

          <div className="footer-divider"></div>

          {/* Middle Row: Editorial navigation links + Social follow section */}
          <div className="footer-middle-row">

            <div className="footer-nav-section">
              <span className="footer-nav-label">Explore</span>
              <ul className="footer-horizontal-links">
                {[
                  { name: 'About', path: '/about' },
                  { name: 'Solutions', path: '/solutions' },
                  { name: 'Approach', path: '/approach' },
                  { name: 'Work', path: '/work' },
                  { name: 'Blog', path: '/blogs' },
                  { name: 'Contact', path: '/contact' }
                ].map((link, index, array) => (
                  <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                    <Link href={link.path} className="footer-nav-link">
                      {link.name}
                    </Link>
                    {index < array.length - 1 && <span className="footer-slash">/</span>}
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-social-section">
              <span className="footer-social-label">Follow Us</span>
              <ul className="footer-social-list">
                {[
                  { icon: 'fa-facebook-official', url: 'https://www.facebook.com/iamyosantpatel', name: 'Facebook' },
                  { icon: 'fa-instagram', url: 'https://www.instagram.com/iamyosantpatel/', name: 'Instagram' },
                  { icon: 'fa-behance', url: 'https://www.behance.net/iamyosantpatel', name: 'Behance' },
                  { icon: 'fa-youtube-play', url: 'https://www.youtube.com/channel/UCFt5AN2gdDfhgb3stWLgltA/videos', name: 'YouTube' }
                ].map((social, index) => (
                  <li key={index}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-social-btn"
                      aria-label={`Follow Yosant Patel on ${social.name}`}
                    >
                      <span className={`fa ${social.icon}`}></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Bottom Row: Copyright + Terms/Privacy */}
          <div className="footer-bottom-row">
            <p className="footer-copyright">
              &copy; 2025 Yosant Patel. All Rights Reserved.
            </p>

            <div className="footer-legal-links">
              <Link href="/terms-conditions" className="footer-legal-link">
                Terms & conditions
              </Link>
              <Link href="/privacy-policy" className="footer-legal-link">
                Privacy policy
              </Link>
            </div>
          </div>

        </div>

        <a id="bottom_top"></a>

        {/* Floating Scroll to Top Button */}
        <div
          onClick={scrollToTop}
          className="scroll-to-top-btn"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.8)',
            pointerEvents: isVisible ? 'all' : 'none',
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
            style={{ display: 'block' }}
          >
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </div>
      </footer>
    </>
  );
}