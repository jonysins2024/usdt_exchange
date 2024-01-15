import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <header id="header">
                <div id="header-fixed-height"></div>
                <div id="sticky-header" className="menu-area">
                    <div className="container custom-container">
                        <div className="row pr-3">
                            <div className="col-12">
                                <div onClick={() => { setOpen(!open) }} className="mobile-nav-toggler"><i className="fas fa-bars"></i></div>
                                <div className="menu-wrap">
                                    <nav className="flex justify-between items-center">
                                        <div className="logo">
                                            <a className="main-logo" href="/">
                                                <img src="https://themedox.com/bigtech/wp-content/themes/bigtech/assets/img/logo/logo.png"
                                                    alt="Logo" />
                                            </a>
                                        </div>
                                        <div className="navbar-wrap main-menu d-none d-lg-flex">
                                            <ul id="menu-home-page-menu" className="navigation">
                                                <li id="menu-item-263"
                                                    className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-263">
                                                    <Link to="/"> <a href="">HOME</a></Link>
                                                    {/* <ul className="sub-menu">
                                                        <li id="menu-item-260"
                                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-57 current_page_item menu-item-260">
                                                            <a href="https://themedox.com/bigtech/" aria-current="page">Home
                                                                One</a>
                                                        </li>
                                                        <li id="menu-item-262"
                                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-262">
                                                            <a href="https://themedox.com/bigtech/home-two/">Home Two</a>
                                                        </li>
                                                    </ul> */}
                                                </li>

                                                <li id="menu-item-265"
                                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-265">
                                                    <a href="/#sales">USDT BUY SELL</a>
                                                </li>
                                                <li id="menu-item-266"
                                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-266">
                                                    <Link to="/game"> <a href="">iGAMING SUPPORT</a></Link>
                                                </li>
                                                <li id="menu-item-261"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-261">
                                                    <a href="/D_Marketing">DIGITAL MARKETING SURVICE</a>
                                                </li>
                                                <li id="menu-item-264"
                                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-264">
                                                    <a href="/#about">ABOUT US</a>
                                                </li>
                                                <li id="menu-item-267"
                                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-267">
                                                    <a href="/#contact-us">CONTACT US</a>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* <div className="header-action d-none d-md-block">
                                            <ul>
                                                <li className="header-lang"><span className="selected-lang">ENG</span>
                                                    <ul className="lang-list">
                                                        <li><a href="#">IND</a></li>
                                                        <li><a href="#">SPA</a></li>
                                                        <li><a href="#">GRE</a></li>
                                                        <li><a href="#">CIN</a></li>
                                                    </ul>
                                                </li>
                                                <li className="header-btn"><a href="#" className="btn">Nahian</a></li>
                                            </ul>
                                        </div> */}
                                    </nav>
                                </div>
                                {/* MOBILE MENU */}
                                <div className="mobile-men fixed top-0 right-0 w-[300px] pr-[30px] bg-blue-700 md:hidden hidden text-white ">
                                    <nav className="menu-box">
                                        <div className="close-btn"><i className="fas fa-times"></i></div>
                                        <div className="nav-logo">
                                            <a href="https://themedox.com/bigtech/">
                                                <img src="https://themedox.com/bigtech/wp-content/themes/bigtech/assets/img/logo/secondary_logo.png"
                                                    alt="Logo" />
                                            </a>
                                        </div>
                                        <div className="menu-outer">
                                            <ul id="menu-home-page-menu-1" className="navigation">
                                                <li
                                                    className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children has-children menu-item-263">
                                                    <a href="#header">Home</a>
                                                    <ul className="sub-menu">
                                                        <li
                                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-57 current_page_item menu-item-260">
                                                            <a href="https://themedox.com/bigtech/">Home One</a>
                                                        </li>
                                                        <li
                                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-262">
                                                            <a href="https://themedox.com/bigtech/home-two/">Home Two</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li
                                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-264">
                                                    <a href="#about">About Us</a>
                                                </li>
                                                <li
                                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-265">
                                                    <a href="#sales">USDT Buy Sell</a>
                                                </li>
                                                <li
                                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-266">
                                                    <a href="#roadmap">Roadmap</a>
                                                </li>
                                                <li
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-261">
                                                    <a href="https://themedox.com/bigtech/blog/">Blog</a>
                                                </li>
                                                <li
                                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-267">
                                                    <a href="#contact-us">Contact Us</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="social-links">
                                            <ul className="clearfix">
                                                <li className="facebook">
                                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                </li>
                                                <li className="twitter">
                                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                                </li>
                                                <li className="instagram">
                                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                                </li>
                                                <li className="linkedin">
                                                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                                </li>
                                                <li className="youtube">
                                                    <a href="#"><i className="fab fa-youtube"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                <div className="menu-backdrop"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header
