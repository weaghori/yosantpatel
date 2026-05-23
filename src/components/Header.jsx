'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileHeader from './MobileHeader';

export default function Header() {
  const pathname = usePathname();
  
  // Normalize pathname to ignore trailing slashes (which Next.js adds with trailingSlash: true)
  const normalizedPath = pathname.endsWith('/') && pathname !== '/' 
    ? pathname.slice(0, -1) 
    : pathname;

  const isHomePage = normalizedPath === '/';
  const isWorkGrid = normalizedPath === '/work';
  const isSolutions = normalizedPath === '/solutions';
  const isAbout = normalizedPath === '/about';
  const isApproach = normalizedPath === '/approach';
  const isContact = normalizedPath === '/contact';
  const isBlogsList = normalizedPath === '/blogs';
  const isConsultation = normalizedPath === '/consultation';

  const isWorkDetail = normalizedPath.startsWith('/work/') && normalizedPath !== '/work';
  const isBlogDetail = normalizedPath.startsWith('/blog-details');
  const isTerms = normalizedPath === '/terms-conditions';
  const isPrivacy = normalizedPath === '/privacy-policy';


  const isTransparent = isHomePage || isAbout || isSolutions || isApproach || isContact || isWorkDetail || isBlogDetail || isBlogsList || isWorkGrid || isConsultation || isTerms || isPrivacy;

  // Pages with dark hero images need the white logo for transparency
  const hasDarkHero = isHomePage || isAbout || isSolutions || isApproach || isContact || isWorkDetail || isBlogDetail || isBlogsList || isWorkGrid || isConsultation || isTerms || isPrivacy;
  const needsBlackNav = !hasDarkHero;

  const navColorClass = needsBlackNav ? 'color-black' : '';

  return (
    <>
      {/* Premium custom styles to ensure highlighted active page in nav menu */}
      <style>{`
        /* Style inactive items as soft gray when background is white or color-black is set */
        .navigation.color-black ul li a,
        .header-background .navigation ul.menu li a,
        .header-background .navigation ul li a {
          color: #64748b !important;
          font-weight: 500 !important;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }

        /* Hover state: highlight to brand navy */
        .navigation.color-black ul li a:hover,
        .header-background .navigation ul.menu li a:hover,
        .header-background .navigation ul li a:hover {
          color: #203b72 !important;
          opacity: 1 !important;
        }

        /* Highlight active page ('current') in brand navy blue */
        .navigation.color-black ul li.current > a,
        .header-background .navigation ul.menu li.current > a,
        .header-background .navigation ul li.current > a {
          color: #203b72 !important;
          font-weight: 700 !important;
          opacity: 1 !important;
        }

        /* Premium custom styling for the right-side Contact button */
        .custom-contact-btn {
          background: transparent !important;
          border: 1px solid rgba(255, 255, 255, 0.3) !important;
          color: #ffffff !important;
          font-weight: 600 !important;
          font-size: 11px !important;
          letter-spacing: 0.1em !important;
          text-transform: uppercase !important;
          padding: 8px 18px !important;
          border-radius: 50px !important;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          height: auto !important;
          line-height: 1 !important;
          box-shadow: none !important;
        }

        .custom-contact-btn:hover {
          background: rgba(255, 255, 255, 0.08) !important;
          border: 1px solid rgba(255, 255, 255, 0.8) !important;
          color: #ffffff !important;
        }

        /* Light/White Header state overrides */
        .navigation.color-black .custom-contact-btn,
        .header-background .custom-contact-btn {
          border: 1px solid rgba(32, 59, 114, 0.3) !important;
          color: #203b72 !important;
        }

        .navigation.color-black .custom-contact-btn:hover,
        .header-background .custom-contact-btn:hover {
          background: rgba(32, 59, 114, 0.05) !important;
          border: 1px solid #203b72 !important;
          color: #203b72 !important;
        }

        .custom-contact-btn:active {
          transform: scale(0.98) !important;
        }

        /* Mobile Logo Visibility Fix: Force black logo on mobile's light background */
        @media only screen and (max-width: 991px) {
          .logo .logo-inner a:first-of-type,
          .logo .logo-inner a:first-of-type img {
            display: inline-block !important;
            visibility: visible !important;
            opacity: 1 !important;
            max-height: 28px !important;
          }
          .logo .logo-inner a:last-of-type,
          .logo .logo-inner a:last-of-type img {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
          }
        }
      `}</style>

      {/* NEW CUSTOM MOBILE HEADER */}
      <MobileHeader />

      {/* LEGACY DESKTOP HEADER (Hidden on mobile) */}
      <div className="desktop-only-header">
        {/* Overlay Navigation Menu */}
        <div className="overlay-navigation-wrapper enter-right" data-no-scrollbar data-animation="slide-in">
          <div className="overlay-navigation-scroll-pane">
            <div className="overlay-navigation-inner">
              <div className="v-align-middle">
                <div className="overlay-navigation-header row collapse full-width">
                  <div className="column width-12">
                    <div className="navigation-hide overlay-nav-hide">
                      <a href="#" aria-label="Close menu">
                        <span className="icon-cancel"></span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="row collapse full-width">
                  <div className="column width-12">
                    <nav className="overlay-navigation nav-block center">
                      <h4 className="menu-title">Menu</h4>
                      <ul>
                        <li className={pathname === '/' ? 'current' : ''}>
                          <Link href="/">Home</Link>
                        </li>
                        <li className={pathname === '/about' ? 'current' : ''}>
                          <Link href="/about">About</Link>
                        </li>
                        <li className={pathname === '/solutions' ? 'current' : ''}>
                          <Link href="/solutions">Solutions</Link>
                        </li>
                        <li className={pathname === '/approach' ? 'current' : ''}>
                          <Link href="/approach">Approach</Link>
                        </li>
                        <li className={pathname.startsWith('/work') ? 'current' : ''}>
                          <Link href="/work">Work</Link>
                        </li>
                        <li className={pathname === '/contact' ? 'current' : ''}>
                          <Link href="/contact">Contact</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="overlay-navigation-footer row full-width center">
                  <div className="column width-12 no-padding">
                    <p className="copyright">&copy; 2025 Yosant Patel | All Rights Reserved.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Overlay Navigation Menu End */}

        <header
          key={pathname}
          className={`header header-fixed ${isHomePage ? 'header-bottom' : ''} header-fixed-on-mobile ${isTransparent ? 'header-transparent' : 'header-background'}`}
          data-sticky-threshold={isTransparent ? 'window-height' : '100'}
          data-bkg-threshold="100"
          style={{ height: '80px' }}>
          <div className="header-inner">
            <div className="row nav-bar">
              <div className="column width-12 nav-bar-inner">
                <div className="logo no-transition">
                  <div className="logo-inner">
                    <Link href="/" className="no-transition">
                      <img src="/images/YOSANT LOGO-01.svg" alt="Logo" width={150} height={40} />
                    </Link>
                    <Link href="/" className="no-transition">
                      <img src="/images/logo.svg" alt="Logo" width={150} height={40} />
                    </Link>
                  </div>
                </div>
                <nav className="navigation nav-block secondary-navigation nav-right">
                  <ul>
                    <li>
                      <div className="v-align-middle">
                        <Link
                          href="/contact"
                          className="button custom-contact-btn no-label-on-mobile small no-margin-bottom"
                        >
                          <span>Contact</span>
                        </Link>
                      </div>
                    </li>
                    <li className="aux-navigation hide">
                      <a href="#" className="navigation-show overlay-nav-show nav-icon" aria-label="Open menu">
                        <span className="icon-menu"></span>
                      </a>
                    </li>
                  </ul>
                </nav>
                <nav className={`navigation nav-block primary-navigation nav-right ${navColorClass}`}>
                  <ul>
                    <li className={pathname === '/' ? 'current' : ''}>
                      <Link href="/">Home</Link>
                    </li>
                    <li className={pathname === '/about' ? 'current' : ''}>
                      <Link href="/about">About</Link>
                    </li>
                    <li className={`contains-mega-sub-menu ${pathname === '/solutions' ? 'current' : ''}`}>
                      <Link href="/solutions">Solutions</Link>
                    </li>
                    <li className={pathname === '/approach' ? 'current' : ''}>
                      <Link href="/approach">Approach</Link>
                    </li>
                    <li className={pathname.startsWith('/work') ? 'current' : ''}>
                      <Link href="/work">Work</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
