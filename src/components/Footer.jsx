"use client";
import { useEffect } from 'react';

export default function Footer() {
  useEffect(() => {
    const handleScroll = () => {
      const whatsappFloat = document.querySelector('.whatsapp_float');
      if (whatsappFloat) {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 100) {
          whatsappFloat.style.display = "block";
        } else {
          whatsappFloat.style.display = "none";
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="footer footer-light">
      <div className="footer-top">
        <div className="row flex">
          <div className="column width-6 left">
            <div className="widget">
              <h4 className="widget-title">Let's Talk</h4>
              <p>
                <a href="mailto:iam@yosantpatel.com">iam@yosantpatel.com</a>
              </p>
            </div>
          </div>
          <div className="column width-6 right left-on-mobile">
            <div className="widget">					
              <ul className="social-list list-horizontal">
                <li><a href="https://www.facebook.com/iamyosantpatel" target="_blank"><span className="fa fa-facebook-official" style={{ fontSize: '20px' }}></span></a></li>
                <li><a href="https://www.instagram.com/iamyosantpatel/" target="_blank"><span className="fa fa-instagram" style={{ fontSize: '20px' }}></span></a></li>
                <li><a href="https://www.behance.net/iamyosantpatel" target="_blank"><span className="fa fa-behance" style={{ fontSize: '20px' }}></span></a></li>
                <li><a href="https://www.youtube.com/channel/UCFt5AN2gdDfhgb3stWLgltA/videos" target="_blank"><span className="fa fa-youtube-play" style={{ fontSize: '20px' }}></span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="row">
          <div className="column width-12">
            <p className="copyright pull-left">
              &copy; 2025 Yosant Patel. All Rights Reserved.
            </p>
            <p className="copyright pull-right">
              <a href="/terms-conditions">Terms & conditions</a>
            </p>

            <p className="copyright pull-right">
              <a href="/privacy-policy">Privacy policy&nbsp;&nbsp;&nbsp;</a>
            </p>

          </div>
        </div>
      </div>
      
      <div className="whatsapp_float" style={{ display: 'none' }}>
        <a href="https://wa.me/919099092720" target="_blank">
          <img className="whatsapp_float_btn" src="/images/whatsapp-black.svg" alt="Yosant Patel Whatsapp" />
        </a>
      </div>

      <a id="bottom_top"></a>
    </footer>
  );
}
