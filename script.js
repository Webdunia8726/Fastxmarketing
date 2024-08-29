document.addEventListener("DOMContentLoaded", function () {
    var headerContainer = document.querySelector(".Header-containerr");
    if (headerContainer) {
      headerContainer.innerHTML = `
        <header class="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="main-nav">
            <!-- ***** Logo Start ***** -->
            <a href="index.html" class="logo">
            <img src="blackfastmarketing.png" alt="" width="50px" height="50px">
            </a>
            <!-- ***** Logo End ***** -->
            <!-- ***** Menu Start ***** -->
            <ul class="nav">
              <li class="scroll-to-section"><a href="index.html" class="active">Home</a></li>
              <li class="scroll-to-section"><a href="#services">Services</a></li>
              <li class="scroll-to-section"><a href="#about">About</a></li>
              <li class="scroll-to-section"><a href="blog.html">Blog</a></li>

              <li class="scroll-to-section"><a href="#portfolio">Portfolio</a></li>
               
              <li class="scroll-to-section"><a href="https://wa.link/4t62zd">Contact Us</a></li> 
              <li class="scroll-to-section"><div class="main-red-button-hover"><a href="https://wa.link/4t62zd">Contact Us Now</a></div></li> 
            </ul>        
            <a class='menu-trigger'>
                <span>Menu</span>
            </a>
            <!-- ***** Menu End ***** -->
          </nav>
        </div>
      </div>
    </div>
    
    
  </header>
      `;
    }
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    var FooterContainer = document.querySelector(".Footer-containerr");
    if (FooterContainer) {
      FooterContainer.innerHTML = `
       
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <div class="about footer-item">
            <div class="logo">
              <a href="#"><img src="blackfastmarketing.png" alt="" width="0px" height="50px"></a>
            </div>
            <ul>
              <li><a href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a href="#"><i class="fa fa-behance"></i></a></li>
              <li><a href="#"><i class="fa fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="services footer-item">
            <h4>Services</h4>
            <ul>
              <li><a href="#">Google Ads </a></li>
              <li><a href="#">Websites Developer</a></li>
              <li><a href="#">Website Design</a></li>
              <li><a href="#">Website Optimization</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="community footer-item">
            <h4>Community</h4>
            <ul>
              <li><a href="#">Digital Marketing</a></li>
              <li><a href="#">Business Ideas</a></li>
              <li><a href="#">Website Checkup</a></li>
              <li><a href="#">Page Speed Test</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 pb-5">
          <div class="subscribe-newsletters footer-item">
            <h4>Google Ads Secret Tips</h4>
            <p>Get our latest  ideas to your inbox</p>
            <form action="#" method="get">
              <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email" required="">
              <button type="submit" id="form-submit" class="main-button "><i class="fa fa-paper-plane-o"></i></button>
            </form>
          </div>
        </div>
        <div class="col-lg-12">
         
        </div>
      </div>
    </div>
  </footer>
      `;
    }
  });
  

  document.addEventListener("DOMContentLoaded", function () {
    var TopContainer = document.querySelector(".Top-containerr");
    if (TopContainer) {
      TopContainer.innerHTML = `
    <div class="container-fluid bg-dark px-5 d-none d-lg-block">
        <div class="row gx-0">
            <div class="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                <div class="d-inline-flex align-items-center" style="height: 45px;">
      
                    <small class="me-3 text-light"><i class="fa fa-phone-alt me-2"></i>+91-9372778974</small>
                    <small class="text-light"><i class="fa fa-envelope-open me-2"></i>bhushandeo@swaritravels.in</small>
                </div>
            </div>
            <div class="col-lg-4 text-center text-lg-end">
                <div class="d-inline-flex align-items-center" style="height: 45px;">
                    <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i class="fab fa-twitter fw-normal"></i></a>
                    <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i class="fab fa-facebook-f fw-normal"></i></a>
                    <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i class="fab fa-linkedin-in fw-normal"></i></a>
                    <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i class="fab fa-instagram fw-normal"></i></a>
                    <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href=""><i class="fab fa-youtube fw-normal"></i></a>
                </div>
            </div>
        </div>
    </div>
  
      `;
    }
  });
  

  document.addEventListener("DOMContentLoaded", function () {
    var CallContainer = document.querySelector(".Call-button");
    if (CallContainer) {
      CallContainer.innerHTML = `<div class="contact-buttons">
    <a href="tel:9372778974" class="contact-button phone">
        <i class="fas fa-phone-alt"></i>
    </a>
    <a href="https://wa.me/9372778974" class="contact-button whatsapp">
        <i class="fab fa-whatsapp"></i>
    </a>
</div>
`;
    }
  });
  