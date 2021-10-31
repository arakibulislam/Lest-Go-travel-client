import React from 'react';
import logo from '../../images/logoFooter.png'
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer className="footer-section">
                <div className="container">
                    <div className="footer-cta py-5">
                        <div className="row">
                            <div className="col-sm-6 col-xl-4 mb-30">
                                <div className="single-cta">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <div className="cta-text">
                                        <h4>Find us</h4>
                                        <span>Middle Budda, Dhaka- 1200</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xl-4 mb-30">
                                <div className="single-cta">
                                    <i className="fas fa-phone"></i>
                                    <div className="cta-text">
                                        <h4>Call us</h4>
                                        <span>01711-112233</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xl-4 mb-30">
                                <div className="single-cta">
                                    <i className="fas fa-envelope-open"></i>
                                    <div className="cta-text">
                                        <h4>Mail us</h4>
                                        <span>letsgo@mail.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-content py-5">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="footer-widget">
                                    <div className="footer-logo">
                                        <a href="/"><img src={logo} className="img-fluid" /></a>
                                    </div>
                                    <div className="footer-text">
                                        <p>LETS GO is a trusted and reliable tour and travel agency among all the leading and updated tour-operating services in Bangladesh. We are here to bring the luxury to your traveling.</p>
                                    </div>
                                    <div className="footer-social-icon">
                                        <span>Follow us</span>
                                        <a href="/"><i className="fab fa-facebook-f facebook-bg"></i></a>
                                        <a href="/"><i className="fab fa-twitter twitter-bg"></i></a>
                                        <a href="/"><i className="fab fa-instagram instagram-bg"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Useful Links</h3>
                                    </div>
                                    <ul>
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/">about</a></li>
                                        <li><a href="/">packeges</a></li>
                                        <li><a href="/">locations</a></li>
                                        <li><a href="/">Contact</a></li>
                                        <li><a href="/">About us</a></li>
                                        <li><a href="/">FAQ</a></li>
                                        <li><a href="/">Expert Team</a></li>
                                        <li><a href="/">Contact us</a></li>
                                        <li><a href="/">Latest Blogs</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Subscribe</h3>
                                    </div>
                                    <div className="footer-text">
                                        <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                    </div>
                                    <div className="subscribe-form">
                                        <form action="#">
                                            <input type="text" placeholder="Email Address" />
                                            <button><i className="fab fa-telegram-plane"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                                <div className="copyright-text">
                                    <p>Copyright © 2021, All Right Reserved <a href="/">Rakibul Islam || Programing Hero Learner</a></p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 text-right d-none d-lg-block">
                                <div className="footer-menu">
                                    <ul>
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/">Terms</a></li>
                                        <li><a href="/">Privacy</a></li>
                                        <li><a href="/">Policy</a></li>
                                        <li><a href="/">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;