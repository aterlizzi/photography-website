import React from "react";

function FooterComponent() {
  return (
    <div id="footer" className="foot-container">
      <div className="top-footer">
        <div className="fulmore-container">
          <a href="/">
            <h3>
              Fulmore <br />
              Photography
            </h3>
          </a>
          <div className="footer-info">
            <p>
              <i className="fas fa-mobile-alt"></i> (540) 642-6906
            </p>
            <p>
              <i className="fas fa-envelope"></i> fulmoreka@mymail.vcu.edu
            </p>
          </div>
        </div>
        <div className="product-container">
          <h4>Product</h4>
          <a href="/portfolio/graduation">
            <p>Graduation</p>
          </a>
          <a href="/portfolio/portraits">
            <p>Portraits</p>
          </a>
          <a href="/portfolio/sports">
            <p>Sports</p>
          </a>
        </div>
        <div className="resources-container">
          <h4>Resources</h4>
          <a href="/testimonials">
            <p>Testimonials</p>
          </a>
          <a href="/investment">
            <p>Investment</p>
          </a>
          <a href="/faq">
            <p>FAQ</p>
          </a>
        </div>
        <div className="company-container">
          <h4>Company</h4>
          <a href="/contact">
            <p>Contact Me</p>
          </a>
          <a href="/about">
            <p>About Me</p>
          </a>
          <a href="/booking">
            <p>Book Me</p>
          </a>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="left-bottom-container">
          <p>Copyright 2021 Fulmore Photography</p>
        </div>
        <div className="right-bottom-container">
          <a
            target="_blank"
            href="https://instagram.com/fulmorephotography?igshid=15422guh3y3wv"
            rel="noreferrer"
          >
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a
            href="https://twitter.com/gigglingkaitlyn?s=21"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <i className="fab fa-facebook fa-2x"></i>
          <a
            href="https://www.linkedin.com/in/kaitlyn-fulmore-73043a209"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default FooterComponent;
