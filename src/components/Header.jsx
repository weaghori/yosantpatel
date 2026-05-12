import Link from 'next/link';

export default function Header() {
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
                      <li className="current">
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <Link href="/about">About</Link>
                      </li>
                      <li>
                        <Link href="/solutions">Solutions</Link>
                      </li>
                      <li>
                        <Link href="/approach">Approach</Link>
                      </li>
                      <li>
                        <Link href="/work">Work</Link>
                      </li>
                      <li>
                        <Link href="/blogs">Blog</Link>
                      </li>
                      <li>
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
        className="header header-fixed header-bottom header-fixed-on-mobile header-transparent header-animated no-transition"
        data-sticky-threshold="window-height" data-bkg-threshold="100" style={{ height: '79px' }}>
        <div className="header-inner no-transition">
          <div className="row nav-bar">
            <div className="column width-12 nav-bar-inner">
              <div className="logo no-transition">
                <div className="logo-inner">
                  <Link href="/" className="no-transition">
                    <img src="/images/YOSANT BLACK LOGO.svg" alt="Logo" />
                  </Link>
                  <Link href="/" className="no-transition">
                    <img src="/images/logo.svg" alt="Logo" />
                  </Link>
                </div>
              </div>
              <nav className="navigation nav-block secondary-navigation nav-right">
                <ul>
                  <li></li>
                  <li className="aux-navigation hide">
                    <a href="#" className="navigation-show overlay-nav-show nav-icon">
                      <span className="icon-menu"></span>
                    </a>
                  </li>
                </ul>
              </nav>
              <nav className="navigation nav-block primary-navigation nav-right">
                <ul>
                  <li className="current">
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li className="contains-mega-sub-menu">
                    <Link href="/solutions">Solutions</Link>
                  </li>
                  <li>
                    <Link href="/approach">Approach</Link>
                  </li>
                  <li>
                    <Link href="/work">Work</Link>
                  </li>
                  <li className="contains-mega-sub-menu">
                    <Link href="/blogs">Blog</Link>
                  </li>
                  <li>
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
