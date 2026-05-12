document.write(`

    <!-- Footer -->
    <footer class="footer footer-light">
        <div class="footer-top">
            <div class="row flex">
                <div class="column width-6 left">
                    <div class="widget">
                        <h4 class="widget-title">Let's Talk</h4>
                        <p>
                            <a href="mailto:iam@yosantpatel.com">iam@yosantpatel.com</a>
                        </p>
                    </div>
                </div>
                <div class="column width-6 right left-on-mobile">
                    <div class="widget">					
                        <ul class="social-list list-horizontal">
                            <li><a href="https://www.facebook.com/iamyosantpatel" target="_blank"><span class="fa fa-facebook-official" style="font-size: 20px;"></span></a></li>
                            <li><a href="https://www.instagram.com/iamyosantpatel/" target="_blank"><span class="fa fa-instagram" style="font-size: 20px;"></span></a></li>
                            <li><a href="https://www.behance.net/iamyosantpatel" target="_blank"><span class="fa fa-behance" style="font-size: 20px;"></span></a></li>
                            <li><a href="https://www.youtube.com/channel/UCFt5AN2gdDfhgb3stWLgltA/videos" target="_blank"><span class="fa fa-youtube-play" style="font-size: 20px;"></span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="row">
                <div class="column width-12">
                    <p class="copyright pull-left">
                        &copy; 2025 Yosant Patel. All Rights Reserved.
                    </p>
                    <p class="copyright pull-right">
                        <a href="/terms-conditions.html">Terms & conditions</a>
                    </p>
    
                    <p class="copyright pull-right">
                        <a href="/privacy-policy.html">Privacy policy&nbsp;&nbsp;&nbsp;</a>
                    </p>
    
                </div>
            </div>
        </div>
        
        <div class="whatsapp_float">
        <a href="https://wa.me/919099092720" target="_blank">
            <img class="whatsapp_float_btn" src="/images/whatsapp-black.svg" alt="Yosant Patel Whatsapp">
            </a>
        </div>
    
        <!-- Back to top button -->
    <a id="bottom_top"></a>
    <script>
            window.onscroll = function() {
              if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 100) {
                document.querySelector('.whatsapp_float').style.display = "block"; // Show icon after 200px scroll
              } else {
                document.querySelector('.whatsapp_float').style.display = "none"; // Hide icon if below 200px scroll
              }
            };
          </script>
    
    </footer>
    
    `);
