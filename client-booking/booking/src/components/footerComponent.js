import React from 'react'

function footerComponent() {
    return (
        <>
            <div id="footer" className="foot-container">
                <div className="top-footer">
                    <div className="fulmore-container">
                        <h3>Fulmore <br/>Photography</h3>
                        <div className="footer-info">
                            <p><i className="fas fa-mobile-alt"></i> (540) 642-6906</p>
                            <p><i className="fas fa-envelope"></i> fulmoreka@mymail.vcu.edu</p>
                        </div>
                    </div>
                    <div className="product-container">
                            <h4>Product</h4>
                            <p>Graduation</p>
                            <p>Portraits</p>
                            <p>Sports</p>
                    </div>
                    <div className="resources-container">
                        <h4>Resources</h4>
                        <p>Testimonials</p>
                        <p>Investment</p>
                        <p>FAQ</p>
                    </div>
                    <div className="company-container">
                        <h4>Company</h4>
                        <p>Contact Me</p>
                        <p>About Me</p>
                    </div>
                </div>
                <div className="bottom-footer">
                    <div className="left-bottom-container">
                        <p>Copyright 2021 Fulmore Photography</p>
                    </div>
                    <div className="right-bottom-container">
                        <a target= '_blank' rel="noreferrer" href="https://instagram.com/fulmorephotography?igshid=15422guh3y3wv"><i className="fab fa-instagram fa-2x"></i></a>
                        <a href="https://twitter.com/gigglingkaitlyn?s=21" rel="noreferrer" target="_blank"><i className="fab fa-twitter fa-2x"></i></a>
                        <a href="https://www.facebook.com/fulmorephotography" rel="noreferrer" target="_blank"><i className="fab fa-facebook fa-2x"></i></a>
                        <a href="https://www.linkedin.com/in/kaitlyn-fulmore-73043a209" rel="noreferrer" target="_blank"><i className="fab fa-linkedin fa-2x"></i></a>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default footerComponent
