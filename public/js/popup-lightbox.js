document.write(`



<!-- Login Modal -->
<div id="signup-lightbox" class="pt-50 pb-10 hide">
    <div class="row">
        <div class="column width-10 offset-1 left">
            <div class="login-form-container">
                <div class="thumbnail mb-30">
                    <img src="images/YOSANT BLACK LOGO.svg" width="125" alt="" />
                </div>
                <p class="mb-20">FILL OUT THE FORM AND WE'LL BE IN TOUCH SOON!</p>
                <h2 class="mb-30">LET'S TALK BUSINESS</h2>
                <hr style="width: 140px; border-top: 4px solid #000;">
                <form class="login-form" action="popup.php" method="post" novalidate>
                    <div class="row">
                        <div class="column width-12">
                            <div class="field-wrapper">
                                <input type="text" name="name" class="form-email form-element large" placeholder="Name" tabindex="2" required>
                            </div>
                        </div>
                        <div class="column width-12">
                            <div class="field-wrapper">
                                <input type="tel" maxlength="13" name="phone" class="form-email form-element large" placeholder="Phone" tabindex="2" required>
                            </div>
                        </div>
                        <div class="column width-12">
                            <div class="field-wrapper">
                                <input type="text" name="email" class="form-name form-element large" placeholder="E-mail" tabindex="1" required>
                            </div>
                        </div>

                        <div class="column width-6">
                        <button type="submit" name="send" value="Submit" class="button small btn-curve  btn-curve-2 btn-wit popup-btn" class="g-recaptcha" data-sitekey="your_site_key" data-callback='onSubmit'><span>Submit</span></button>
                        </div>

                        <div class="column width-12 mt-20">
                            <p class="copyright pull-left ">
                                &copy; 2025 Yosant Patel. All Rights Reserved.
                            </p>
                        </div>

                    </div>
                    <input type="text" name="honeypot" class="form-honeypot form-element">
                </form>
                <div class="form-response"></div>
            </div>
        </div>
    </div>
</div>
<!-- Login Modal End -->



`);