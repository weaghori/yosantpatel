'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const isWorkGrid = pathname === '/work';
  const isSolutions = pathname === '/solutions';
  const isAbout = pathname === '/about';
  const isApproach = pathname === '/approach';
  const isContact = pathname === '/contact';
  const isBlogsList = pathname === '/blogs';

  const isWorkDetail = pathname.startsWith('/work/') && pathname !== '/work';
  const isBlogDetail = pathname.startsWith('/blogs/') && pathname !== '/blogs';
  
  // All pages with high-impact hero sections are transparent initially
  const isTransparent = isHomePage || isAbout || isSolutions || isApproach || isContact || isWorkDetail || isBlogDetail;

  // Pages with dark hero images need the white logo for transparency
  const hasDarkHero = isHomePage || isAbout || isSolutions || isApproach || isContact || isWorkDetail || isBlogDetail;
  const needsBlackNav = !hasDarkHero;
  
  const navColorClass = needsBlackNav ? 'color-black' : '';

  return (
    <>
      {/* Overlay Navigation Menu */}
      <div className="overlay-navigation-wrapper enter-right" data-no-scrollbar data-animation="slide-in">
        <div className="overlay-navigation-scroll-pane">
          <div className="overlay-navigation-inner">
            <div className="v-align-middle">
              <div className="overlay-navigation-header row collapse full-width">
                <div className="column width-12">
                  <div className="navigation-hide overlay-nav-hide">
                    <a href="#">
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
                      <li className={pathname.startsWith('/blogs') ? 'current' : ''}>
                        <Link href="/blogs">Blog</Link>
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
                    <img src={needsBlackNav ? "/images/YOSANT BLACK LOGO.svg" : "/images/logo.svg"} alt="Logo" />
                  </Link>
                </div>
              </div>
              <nav className="navigation nav-block secondary-navigation nav-right">
                <ul>
                  <li>
                    <div className="v-align-middle">
                      <Link 
                        href="/contact" 
                        className="button no-label-on-mobile small no-margin-bottom"
                        style={{ padding: '8px 20px', fontSize: '12px' }}
                      >
                        <span>Let's Talk</span>
                      </Link>
                    </div>
                  </li>
                  <li className="aux-navigation hide">
                    <a href="#" className="navigation-show overlay-nav-show nav-icon">
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
                  <li className={`contains-mega-sub-menu ${pathname.startsWith('/blogs') ? 'current' : ''}`}>
                    <Link href="/blogs">Blog</Link>
                  </li>
                  <li className={pathname === '/contact' ? 'current' : ''}>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
