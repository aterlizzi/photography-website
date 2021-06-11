import React from 'react'

function navComponent() {
    return (
    <>
        <nav className="myNav">
            <ul>
                <div className="portfolio-dp">
                    <li><a id="dp-dn1" href="#"><span className="nav-span">Portfolio</span></a></li>
                    <div className="portfolio-content" id='pfc'>
                        <a className="dp-link" href="/graduation">Graduation</a>
                        <a className="dp-link" href="/portrait">Portrait</a>
                        <a className="dp-link" href="/sport">Sport</a>
                    </div>
                </div>  
                <div className="info-dp">
                    <li><a id="dp-dn2" href="#"><span className="nav-span">Info</span></a></li>
                    <div className="info-content" id="ic">
                        <a className="dp-link" href="/investment">Investment</a>
                        <a className="dp-link" href="/testimonials">Testimonials</a>
                        <a className="dp-link" href="/faq">FAQ</a>
                        <a className="dp-link" href="/booking">Booking</a>
                    </div>
                </div>
                <div className="nav-header"><a href="/"><h3>Fulmore <br/>Photography</h3></a></div>
                <li className="nav-about"><a href="/about"><span className="nav-span">About Me</span></a></li>
                <li><a href="/contact"><span className="nav-span">Contact</span></a></li>
            </ul>
            <div className="burger-background"></div>
                <div id="burger" className="burger burger-squeeze">
                    <div className="burger-lines"></div>
                </div>
        </nav>
        <div className="mnav-container" id="mnav-container">
            <div className="mnav-mdivider">
                <a href="/"><h3>Fulmore <br/>Photography</h3></a>
            </div>
            <div className="list-container">
                <ul className="mobile-menu">
                    <li><a href="#">Portfolio</a><i className="fas fa-angle-right arrowOne"></i></li>
                    <ul className="sub-menu-one" id="menu-one">
                        <li className="sub-link"><a href="/graduation">Graduation</a></li>
                        <li className="sub-link"><a href="/portrait">Portrait</a></li>
                        <li className="sub-link"><a href="/sport">Sport</a></li>
                    </ul>
                    <div className="menu-divider"></div>
                    <li><a href="#">Info</a><i className="fas fa-angle-right arrowTwo"></i></li>
                    <ul className="sub-menu-two" id="menu-two">
                        <li className="sub-link-two"><a href="/investment">Investment</a></li>
                        <li className="sub-link-two"><a href="/testimonials">Testimonials</a></li>
                        <li className="sub-link-two"><a href="/faq">FAQ</a></li>
                        <li className="sub-link-two"><a href="/booking">Booking</a></li>
                    </ul>
                    <div className="menu-divider"></div>
                    <li><a href="/about">About Me</a></li>
                    <div className="menu-divider"></div>
                    <li><a href="/contact">Contact</a></li>
                    <div className="menu-bottom-divider"></div>
                </ul>
            </div>
        </div>
    </>
    )
}

export default navComponent
