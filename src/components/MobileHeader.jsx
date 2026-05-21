'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="mobile-only-header-wrapper">
      <header className="custom-mobile-header">
        <Link href="/" className="mobile-logo">
          <img src="/images/yosant-black-logo.svg" alt="Yosant Patel" />
        </Link>
        
        <button 
          className={`mobile-hamburger ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </header>

      <div className={`mobile-overlay-menu ${isOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          <li>
            <Link href="/" className={`mobile-nav-link ${pathname === '/' ? 'active' : ''}`}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={`mobile-nav-link ${pathname === '/about' ? 'active' : ''}`}>
              About
            </Link>
          </li>
          <li>
            <Link href="/solutions" className={`mobile-nav-link ${pathname === '/solutions' ? 'active' : ''}`}>
              Solutions
            </Link>
          </li>
          <li>
            <Link href="/approach" className={`mobile-nav-link ${pathname === '/approach' ? 'active' : ''}`}>
              Approach
            </Link>
          </li>
          <li>
            <Link href="/work" className={`mobile-nav-link ${pathname.startsWith('/work') ? 'active' : ''}`}>
              Work
            </Link>
          </li>
          <li>
            <Link href="/contact" className={`mobile-nav-link ${pathname === '/contact' ? 'active' : ''}`}>
              Contact
            </Link>
          </li>
        </ul>
        <div className="mobile-overlay-footer">
          &copy; 2025 Yosant Patel | All Rights Reserved.
        </div>
      </div>
    </div>
  );
}