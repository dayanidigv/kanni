import React from 'react';
import './footer.css'; // Import your CSS file for styling
import logo from "../../assets/svg/AayuthaEzhuthu.svg"
const Footer = () => {
    const bubbles = Array(15).fill(null).map((_, index) => {
        const size = Math.random() * 2 + 1; // Random size between 1 and 3
        const distance = Math.random() * 20 + 50; // Random distance between 10 and 30
        const animationDuration = Math.random() * 3 + 1; // Random animation duration between 1s and 4s
        const delay = Math.random()* 2 + 1; // Random delay between 0s and 1s
        const hue = Math.random() * 360; // Random hue for colorful bubbles

        const bubbleStyle = {
            '--position': `${Math.random() * 95}vw`,
            '--time': `${animationDuration}s`,
            '--delay': `${delay}s`,
            '--size': `${size}rem`,
            '--distance': `${distance}rem`,
            '--hue': hue // Custom property for hue
        };

        return (
            <div className="bubble" style={bubbleStyle} key={index}></div>
        );
    });
    return (
        <div className="main">
            <div className="footer">
                <div className="bubbles">{bubbles}</div>
                <div className="content">
                    <div class="container">
                        <div class="footer-cta ">
                            <div class="row">
                                <div class="col-xl-4 col-md-4">
                                    <div class="single-cta">
                                        <i class="fas fa-map-marker-alt"></i>
                                        <div class="cta-text">
                                            <h4>Find us</h4>
                                            <span>225, Bhavani, Mann Tholilalar, Tamilnadu</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-md-4">
                                    <div class="single-cta">
                                        <i class="fas fa-phone"></i>
                                        <div class="cta-text">
                                            <h4>Call us</h4>
                                            <span>8778637992 / 9677724053</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-md-4 ">
                                    <div class="single-cta">
                                        <i class="far fa-envelope-open"></i>
                                        <div class="cta-text">
                                            <h4>Mail us</h4>
                                            <span>support@innak.in</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="footer-content">
                            <div class="row">
                                <div class="col-xl-6 col-lg-6 ">
                                    <div class="footer-widget">
                                        <div class="footer-logo ">
                                            <h1 className='text-center '>INNAK</h1>
                                        </div>
                                        <div class="footer-text">
                                            <p>At Innak, we are passionate about transforming ideas into reality. With a team of dedicated professionals, we strive to deliver cutting-edge technology, creative design, and top-notch customer experiences.</p>
                                        </div>
                                        <div class="footer-social-icon ">
                                            <span>Follow us</span>
                                            <br />
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="https://www.instagram.com/socialhub.innak/" target='_blank'><i className="fab fa-instagram"></i></a>
                                            <a href="#"><i className="fab fa-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6  pt-5">
                                    <div class="footer-widget">
                                        <div class="footer-widget-heading">
                                            <h3>Useful Links</h3>
                                        </div>
                                        <ul className="list-unstyled list-inline">
                                            <li className="list-inline-item">
                                                <a href="/" className="text-primary">Home</a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="/info" className="text-primary">About</a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="/services" className="text-primary">Services & Products</a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="#" className="text-primary">Contact</a>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container mb-0 mb-sm-5 pb-0 pb-sm-5">
    <div class="row">
        <div class="col-xl-6 col-lg-6 text-center text-lg-left">
            <div class="copyright-text">
                <p>Designed with <span className='text-primary display-6'>&#x2661;</span> and Owned by INNAK</p>
            </div>
        </div>
        <div class="col-xl-6 col-lg-6 d-lg-block text-right">
            <div class="footer-menu">
                <ul className='list-unstyled list-inline'>
                    <li className='list-inline-item'><a href="/Terms_&_Condition" className="text-primary">Terms & Condition</a></li>
                    <li className='list-unstyled list-inline'><a href="#" className="text-primary">Privacy</a></li>
                    <li className='list-unstyled list-inline'><a href="#" className="text-primary">Policy</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;
