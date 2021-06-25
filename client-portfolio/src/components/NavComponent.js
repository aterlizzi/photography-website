import React from "react";

function NavComponent() {
  return (
    <>
      <nav>
        <ul className="flex-row">
          <li className="main-list">
            <div className="drop-container">
              <a className="special-link link portfolio" href="/portfolio">
                Portfolio
              </a>
              <ul id="p-dn" className="drop-dn">
                <li className="sub-list">
                  <a href="/portfolio/portraits">Portraits</a>
                </li>
                <li className="sub-list">
                  <a href="/portfolio/graduation">Graduation</a>
                </li>
                <li className="sub-list">
                  <a href="/portfolio/sports">Sports</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="main-list">
            <div className="drop-container">
              <a className="special-link link info" href="/faq">
                Info
              </a>
              <ul id="i-dn" className="drop-dn">
                <li className="sub-list">
                  <a href="/investment">Investment</a>
                </li>
                <li className="sub-list">
                  <a href="/testimonials">Testimonials</a>
                </li>
                <li className="sub-list">
                  <a href="/faq">FAQ</a>
                </li>
                <li className="sub-list">
                  <a href="/booking">Booking</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="main-list special">
            <a className="link" href="/">
              <span className="header">Fulmore Photography</span>
            </a>
          </li>
          <li className="main-list">
            <a className="special-link link" href="/about">
              About
            </a>
          </li>
          <li className="main-list">
            <a className="special-link link" href="/contact">
              Contact
            </a>
          </li>
        </ul>
        <div className="burger-background"></div>
        <div id="burger" className="burger burger-squeeze">
          <div className="burger-lines"></div>
        </div>
      </nav>
      <div className="nav-wrapper">
        <div className="mnav-container" id="mnav-container">
          <div className="mnav-mdivider">
            <a href="/">
              <h3>
                Fulmore <br />
                Photography
              </h3>
            </a>
          </div>
          <div className="list-container">
            <ul className="mobile-menu">
              <li>
                <a href="/portfolio">Portfolio</a>
                <i className="fas fa-angle-right arrowOne"></i>
              </li>
              <ul className="sub-menu-one" id="menu-one">
                <li className="sub-link">
                  <a href="/portfolio/graduation">Graduation</a>
                </li>
                <li className="sub-link">
                  <a href="/portfolio/portraits">Portrait</a>
                </li>
                <li className="sub-link">
                  <a href="/portfolio/sports">Sport</a>
                </li>
              </ul>
              <div className="menu-divider"></div>
              <li>
                <a href="/faq">Info</a>
                <i className="fas fa-angle-right arrowTwo"></i>
              </li>
              <ul className="sub-menu-two" id="menu-two">
                <li className="sub-link-two">
                  <a href="/investment">Investment</a>
                </li>
                <li className="sub-link-two">
                  <a href="/testimonials">Testimonials</a>
                </li>
                <li className="sub-link-two">
                  <a href="/faq">FAQ</a>
                </li>
                <li className="sub-link-two">
                  <a href="/booking">Booking</a>
                </li>
              </ul>
              <div className="menu-divider"></div>
              <li>
                <a href="/about">About Me</a>
              </li>
              <div className="menu-divider"></div>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <div className="menu-bottom-divider"></div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavComponent;
