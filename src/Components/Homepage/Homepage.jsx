import React from 'react'
import './Homepage.css'
import Tethar from '../../assets/Tethar.jpg'
import Contact_Form from '../Contact_Form/Contact_Form'
import ConvertCurrency from '../convertCurrency/convertCurrency'
const Homepage = () => {

    return (
        <div>
            <main class="main-area">
                <div data-elementor-type="wp-page" data-elementor-id="57" class="elementor elementor-57">
                    <section
                        class="elementor-section -mt-[35px] md:-mt-0 elementor-top-section elementor-element elementor-element-17b794a elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                        data-id="17b794a" data-element_type="section">
                        <div class="elementor-container elementor-column-gap-no">
                            <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-61c4005"
                                data-id="61c4005" data-element_type="column">
                                <div class="elementor-widget-wrap elementor-element-populated">
                                    <div class="elementor-element elementor-element-1b94da1 elementor-widget elementor-widget-hero-banner"
                                        data-id="1b94da1" data-element_type="widget" data-widget_type="hero-banner.default">
                                        <div class="elementor-widget-container">

                                            <section class="banner-area banner-bg"
                                                style={{ backgroundImage: 'url(https://themedox.com/bigtech/wp-content/uploads/2023/03/banner_bg.jpg)' }}>
                                                <div class="banner-shape-wrap">
                                                    <img decoding="async"
                                                        src="https://themedox.com/bigtech/wp-content/uploads/2023/03/banner_shape01.png"
                                                        alt="" class="img-one" />
                                                    <img decoding="async"
                                                        src="https://themedox.com/bigtech/wp-content/uploads/2023/03/banner_shape02.png"
                                                        alt="" class="img-two" />
                                                    <img decoding="async"
                                                        src="https://themedox.com/bigtech/wp-content/uploads/2023/03/banner_shape03.png"
                                                        alt="" class="img-three" />
                                                </div>
                                                <div class="container">
                                                    <div class="row justify-content-center">
                                                        <div class="col-lg-10">
                                                            <div class="banner-content text-center">
                                                                <div className='flex justify-center'>
                                                                    <img className='' decoding="async"
                                                                        src="https://i.ibb.co/dPrZ3kG/image-85-removebg-preview.png"
                                                                        alt="" />
                                                                </div>
                                                                <h2 class="md:text-[55px] text-[30px]  text-white font-semibold leading-[1.5em]  md:leading-[1.4em]">World Most Popular <span className='text-[#00c4f4]'>USDT</span> <br />
                                                                    Buy Sell Platform</h2>
                                                            </div>
                                                            <div class="banner-progress-wrap">
                                                                <ul>
                                                                    <li>Pre Sell</li>
                                                                    <li>Soft Cap</li>
                                                                    <li>Bonus</li>
                                                                </ul>
                                                                <div class="progress">
                                                                    <div class="progress-bar" role="progressbar"
                                                                        aria-valuenow="75" aria-valuemin="0"
                                                                        aria-valuemax="100"></div>
                                                                </div>
                                                                <h4 class="title">85% target raised <span>1 USDT = 125 BDT</span></h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <div class="row justify-content-center">
                                                        <div class="col-xl-10">
                                                            <div class="banner-countdown-wrap text-center">
                                                                <h2 class="title">ICO Will Start In..</h2>
                                                                <div class="coming-time" data-countdown="2024/4/19 12:49:31">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div> */}
                                                    <ConvertCurrency></ConvertCurrency>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section
                        class="elementor-section elementor-top-section elementor-element elementor-element-4ab2708 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                        data-id="4ab2708" data-element_type="section" id="about"
                        data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                        <div class="elementor-container elementor-column-gap-no">
                            <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-9a9602d"
                                data-id="9a9602d" data-element_type="column">
                                <div class="elementor-widget-wrap elementor-element-populated">
                                    <div class="elementor-element elementor-element-9872395 elementor-widget elementor-widget-about"
                                        data-id="9872395" data-element_type="widget" data-widget_type="about.default">
                                        <div class="elementor-widget-container">
                                            <section id="about" class="about-area">
                                                <div class="container">
                                                    <div class="row align-items-center">
                                                        <div class="col-lg-6">
                                                            <div class="about-img wow fadeInLeft" data-wow-delay=".2s">
                                                                <img decoding="async"
                                                                    src={Tethar}
                                                                    alt="" />
                                                                <img decoding="async"
                                                                    src="https://themedox.com/bigtech/wp-content/uploads/2023/03/about_img02.png"
                                                                    alt="" class="img-two" />
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <div class="about-content wow fadeInRight" data-wow-delay=".2s">
                                                                <div class="section-title mb-30">
                                                                    <span class="sub-title">Who we are</span>
                                                                    <h2 class="title">The World’s Most Popular Currency Exchange Platform
                                                                    </h2>
                                                                </div>
                                                                <p>The World’s Most Popular Currency Exchange Platform That Offers Rewards and The
                                                                    platform helps investors to make easy to purchase and sell
                                                                    their tokens</p>
                                                                {/* <a href="" rel="nofollow" class="btn">
                                                                    Purchase Tokens </a> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section
                        class="elementor-section elementor-top-section elementor-element elementor-element-f4ac265 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                        data-id="f4ac265" data-element_type="section" id="Partners"
                        data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                        <div class="elementor-container elementor-column-gap-no">
                            <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6ed8b1e"
                                data-id="6ed8b1e" data-element_type="column">
                                <div class="elementor-widget-wrap elementor-element-populated">
                                    <div class="elementor-element elementor-element-0561d11 elementor-widget elementor-widget-brand"
                                        data-id="0561d11" data-element_type="widget" data-widget_type="brand.default">
                                        <div class="elementor-widget-container">
                                            <div class="partner-area">
                                                <div class="container">
                                                    <div class="row justify-content-center">
                                                        <div class="col-lg-8">
                                                            <div class="section-title text-center mb-10">
                                                                <span class="sub-title">Our top partner</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-lg-12">
                                                            <div class="partner-wrap">
                                                                <ul>
                                                                    <li>
                                                                        <a href="#"><img decoding="async"
                                                                            src="https://themedox.com/bigtech/wp-content/uploads/2023/03/partner_img01.png"
                                                                            alt="" /></a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><img decoding="async"
                                                                            src="https://themedox.com/bigtech/wp-content/uploads/2023/03/partner_img02.png"
                                                                            alt="" /></a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><img decoding="async"
                                                                            src="https://themedox.com/bigtech/wp-content/uploads/2023/03/partner_img03.png"
                                                                            alt="" /></a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><img decoding="async"
                                                                            src="https://themedox.com/bigtech/wp-content/uploads/2023/03/partner_img04.png"
                                                                            alt="" /></a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><img decoding="async"
                                                                            src="https://themedox.com/bigtech/wp-content/uploads/2023/03/partner_img05.png"
                                                                            alt="" /></a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><img decoding="async"
                                                                            src="https://themedox.com/bigtech/wp-content/uploads/2023/03/partner_img06.png"
                                                                            alt="" /></a>
                                                                    </li>
                                                                    {/* <li>
                                                                        <a href="#"><img decoding="async"
                                                                            src="https://themedox.com/bigtech/wp-content/uploads/2023/03/partner_img07.png"
                                                                            alt="" /></a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><img decoding="async"
                                                                            src="https://themedox.com/bigtech/wp-content/uploads/2023/03/partner_img08.png"
                                                                            alt="" /></a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><img decoding="async"
                                                                            src="https://themedox.com/bigtech/wp-content/uploads/2023/03/partner_img09.png"
                                                                            alt="" /></a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><img decoding="async"
                                                                            src="https://themedox.com/bigtech/wp-content/uploads/2023/03/partner_img10.png"
                                                                            alt="" /></a>
                                                                    </li> */}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section
                        class="elementor-section elementor-top-section elementor-element elementor-element-e234df9 elementor-section-full_width choose-area elementor-section-height-default elementor-section-height-default"
                        data-id="e234df9" data-element_type="section"
                        data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                        <div class="elementor-container elementor-column-gap-no">
                            <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-f1c6e5e"
                                data-id="f1c6e5e" data-element_type="column">
                                <div class="elementor-widget-wrap elementor-element-populated">
                                    <div class="elementor-element elementor-element-a7884f5 elementor-widget elementor-widget-tp-heading"
                                        data-id="a7884f5" data-element_type="widget" data-widget_type="tp-heading.default">
                                        <div class="elementor-widget-container">
                                            <div class="section-title"><span class="sub-title">why Choose us</span>
                                                <h2 class="title">Why choose our Currency Exchange <br /> <span>Platform</span></h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="elementor-element elementor-element-4f7283c elementor-widget elementor-widget-features"
                                        data-id="4f7283c" data-element_type="widget" data-widget_type="features.default">
                                        <div class="elementor-widget-container">

                                            <div class="container">
                                                <div class="row choose-active">
                                                    <div class="col-lg-3">
                                                        <div class="choose-item">
                                                            <div class="choose-icon">
                                                                <img decoding="async" class="light"
                                                                    src="https://themedox.com/bigtech/wp-content/uploads/2023/03/choose_icon04.svg"
                                                                    alt="" />
                                                            </div>
                                                            <div class="choose-content">
                                                                <h2 class="title">Optimal Currency Exchange Hub</h2>
                                                                <p>Explore Our Ultimate Currency Exchange Platform Today</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-3">
                                                        <div class="choose-item">
                                                            <div class="choose-icon">
                                                                <img decoding="async" class="light"
                                                                    src="https://themedox.com/bigtech/wp-content/uploads/2023/03/choose_icon01.svg"
                                                                    alt="" />
                                                            </div>
                                                            <div class="choose-content">
                                                                <h2 class="title">Best Exchange Rate</h2>
                                                                <p>Choose Us for the Best Exchange Rates, Your Financial Advantage</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-3">
                                                        <div class="choose-item">
                                                            <div class="choose-icon">
                                                                <img decoding="async" class="light"
                                                                    src="https://themedox.com/bigtech/wp-content/uploads/2023/03/choose_icon02.svg"
                                                                    alt="" />
                                                            </div>
                                                            <div class="choose-content">
                                                                <h2 class="title">Lifetime, Hassle-Free transaction</h2>
                                                                <p>Effortless and Hassle-Free for Your Ultimate Convenience</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-3">
                                                        <div class="choose-item">
                                                            <div class="choose-icon">
                                                                <img decoding="async" class="light"
                                                                    src="https://themedox.com/bigtech/wp-content/uploads/2023/03/choose_icon03.svg"
                                                                    alt="" />
                                                            </div>
                                                            <div class="choose-content">
                                                                <h2 class="title">Protect the <br /> identity</h2>
                                                                <p>Our Vigilant Security Protocols Ensure the Protection of Your Personal Information</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="col-lg-3">
                                                        <div class="choose-item">
                                                            <div class="choose-icon">
                                                                <img decoding="async" class="light"
                                                                    src="https://themedox.com/bigtech/wp-content/uploads/2023/03/choose_icon02.svg"
                                                                    alt="" />
                                                            </div>
                                                            <div class="choose-content">
                                                                <h2 class="title">Worldwide  Transaction</h2>
                                                                <p>Effortless Global Transactions with Our Dedicated Platform</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="slide-progress" role="progressbar" aria-valuemin="0"
                                                    aria-valuemax="100">
                                                    <span class="slider__label sr-only"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section
                        class="elementor-section elementor-top-section elementor-element elementor-element-27a83b6 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                        data-id="27a83b6" data-element_type="section"
                        data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                        <div class="elementor-container elementor-column-gap-no">
                            <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-36f7b46"
                                data-id="36f7b46" data-element_type="column">
                                <div class="elementor-widget-wrap elementor-element-populated">
                                    <div class="elementor-element elementor-element-591fde4 elementor-widget elementor-widget-tg-buy"
                                        data-id="591fde4" data-element_type="widget" data-widget_type="tg-buy.default">
                                        <div class="elementor-widget-container">

                                            <section id="sales" class="chart-area chart-bg jarallax"
                                                style={{ backgroundImage: 'url(https://themedox.com/bigtech/wp-content/uploads/2023/03/chart_bg.jpg)' }}>
                                                <div class="container">
                                                    <div class="chart-inner">
                                                        <div class="row align-items-center justify-content-center">
                                                            <div class="col-lg-6 col-md-10 order-0 order-lg-2">
                                                                <div class="chart-wrap wow fadeInRight" data-wow-delay=".2s">
                                                                    <img decoding="async"
                                                                        src="https://themedox.com/bigtech/wp-content/uploads/2023/03/chart.png"
                                                                        alt="" />
                                                                    <ul>
                                                                        <li>1 USDT = 125 BDT</li>
                                                                        <li>1 USDT = 0.900 EUR</li>
                                                                        <li>1 USDT = 7.08 CNY</li>
                                                                        <li>1 USDT = 83.22 INR</li>
                                                                        <li>1 USDT = 3.67 UAE Dir.</li>
                                                                        <li>1 USDT = 55.40 PESO</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-6 col-md-10">
                                                                <div class="chart-content wow fadeInLeft" data-wow-delay=".2s">
                                                                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                                                                        <li class="nav-item" role="presentation">
                                                                            <button class="nav-link active" id="tab-0573057355"
                                                                                data-bs-toggle="tab"
                                                                                data-bs-target="#tabb-0573057355" type="button"
                                                                                role="tab" aria-controls="tabb-0573057355"
                                                                                aria-selected="true">USDT To BDT</button>
                                                                        </li>
                                                                        <li class="nav-item" role="presentation">
                                                                            <button class="nav-link " id="tab-1573057355"
                                                                                data-bs-toggle="tab"
                                                                                data-bs-target="#tabb-1573057355" type="button"
                                                                                role="tab" aria-controls="tabb-1573057355"
                                                                                aria-selected="false">USDT To EURO</button>
                                                                        </li>
                                                                    </ul>
                                                                    <div class="tab-content" id="myTabContent">
                                                                        <div class="tab-pane fade show active"
                                                                            id="tabb-0573057355" role="tabpanel"
                                                                            aria-labelledby="tab-0573057355">
                                                                            <div class="chart-content-inner">
                                                                                <h2 class="title">1 USDT = 125 BDT</h2>
                                                                                <p>The World’s Most Popular Currency Exchange Platform That Offers Rewards and The platform helps investors to make easy to purchase and sell their tokens
                                                                                </p>
                                                                                {/* <a href="https://buy.volleytoken.io/"
                                                                                    target="_blank" class="btn">Buy Now</a> */}
                                                                            </div>
                                                                        </div>
                                                                        <div class="tab-pane fade " id="tabb-1573057355"
                                                                            role="tabpanel" aria-labelledby="tab-1573057355">
                                                                            <div class="chart-content-inner">
                                                                                <h2 class="title">1 USDT = 0.900 EUR</h2>
                                                                                <p>The World’s Most Popular Currency Exchange Platform That Offers Rewards and The platform helps investors to make easy to purchase and sell their tokens
                                                                                </p>
                                                                                {/* <a href="https://buy.volleytoken.io/"
                                                                                    target="_blank" class="btn">Buy Now</a> */}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section
                        class="elementor-section elementor-top-section elementor-element elementor-element-96a8973 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                        data-id="96a8973" data-element_type="section"
                        data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                        <div class="elementor-container elementor-column-gap-no">
                            <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6933ee0"
                                data-id="6933ee0" data-element_type="column">
                                <div class="elementor-widget-wrap elementor-element-populated">
                                    <div class="elementor-element elementor-element-bee495d elementor-widget elementor-widget-roadmap"
                                        data-id="bee495d" data-element_type="widget" data-widget_type="roadmap.default">
                                        <div class="elementor-widget-container">
                                            <section id="roadmap" class="roadmap-area">
                                                <div class="container custom-container-two">
                                                    <div class="row justify-content-center">
                                                        <div class="col-xl-5 col-lg-8">
                                                            <div class="section-title text-center mb-60">
                                                                <span class="sub-title">OUr Roadmap</span>
                                                                <h2 class="title">Our Strategy and <br /> Project
                                                                    <span> Plan</span>
                                                                </h2>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class='-mt-[10em]'>
                                                        <div class="row">
                                                            <div class="col-lg-12">
                                                                <div class="bt-roadmap_x">
                                                                    <div class="bt-roadmap-wrap">
                                                                        {/* <div class="bt-roadmap-item">
                                                                            <span class="roadmap-title">Mid of Q4 2021</span>
                                                                            <div class="roadmap-content">
                                                                                <span class="dot"></span>
                                                                                <h4 class="title">Concept</h4>
                                                                                <span>EVM support for parthians</span>
                                                                                <span>SubQuery Academy</span>
                                                                                <span>Proof of indexing</span>
                                                                            </div>
                                                                        </div> */}
                                                                        {/* <div class="bt-roadmap-item">
                                                                            <span class="roadmap-title">Mid of Q5 2022</span>
                                                                            <div class="roadmap-content">
                                                                                <span class="dot"></span>
                                                                                <h4 class="title">Research</h4>
                                                                                <span>SubQuery Builders/Grants Program</span>
                                                                                <span>SQT Network contract internal MVP</span>
                                                                                <span>Coordinator and client SDK</span>
                                                                            </div>
                                                                        </div> */}
                                                                        <div class="bt-roadmap-item">
                                                                            <span class="roadmap-title">End of Q6 2023</span>
                                                                            <div class="roadmap-content">
                                                                                <span class="dot"></span>
                                                                                <h4 class="title">Website Launched</h4>
                                                                                <span>Public testnet launch</span>
                                                                                <span>SubQuery Network Explorer and dApp</span>
                                                                                <span>Point-in-time indexing</span>
                                                                            </div>
                                                                        </div>
                                                                        <div class="bt-roadmap-item">
                                                                            <span class="roadmap-title">start of 2024</span>
                                                                            <div class="roadmap-content">
                                                                                <span class="dot"></span>
                                                                                <h4 class="title">Successful transaction</h4>
                                                                                <span>SQT token generation event</span>
                                                                                <span>Public incentivize testnet launch</span>
                                                                                <span>Data traffic insights and reporting</span>
                                                                            </div>
                                                                        </div>
                                                                        <div class="bt-roadmap-item">
                                                                            <span class="roadmap-title">Mid of 2024</span>
                                                                            <div class="roadmap-content">
                                                                                <span class="dot"></span>
                                                                                <h4 class="title">Alpha Test</h4>
                                                                                <span>Launch of the SubQuery Foundation</span>
                                                                                <span>Finalise research for other Layer-1
                                                                                    chains</span>
                                                                                <span>Liquidity mining program</span>
                                                                            </div>
                                                                        </div>
                                                                        <div class="bt-roadmap-item">
                                                                            <span class="roadmap-title">End of Q9 2024</span>
                                                                            <div class="roadmap-content">
                                                                                <span class="dot"></span>
                                                                                <h4 class="title">Benefits</h4>
                                                                                <span>Mainnet launch</span>
                                                                                <span>Centralized exchange launch</span>
                                                                                <span>Public incentivize testnet</span>
                                                                            </div>
                                                                        </div>
                                                                        <div class="bt-roadmap-item">
                                                                            <span class="roadmap-title">Future Plan & Goals</span>
                                                                            <div class="roadmap-content">
                                                                                <span class="dot"></span>
                                                                                <h4 class="title">Operational</h4>
                                                                                <span>SubQuery launches its <br /> own parthian</span>
                                                                                <span>SubQuery Foundation</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>

                    <section
                        class="elementor-section elementor-top-section elementor-element elementor-element-948c8fc elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                        data-id="948c8fc" data-element_type="section" id="contact-us"
                        data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                        <div class="elementor-container elementor-column-gap-no">
                            <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-7bd79d3"
                                data-id="7bd79d3" data-element_type="column">
                                <div class="elementor-widget-wrap elementor-element-populated">
                                    <div class="elementor-element elementor-element-b432620 elementor-widget elementor-widget-contact-info"
                                        data-id="b432620" data-element_type="widget" data-widget_type="contact-info.default">
                                        <div class="elementor-widget-container">
                                            <section id="contact" class="contact-area">
                                                <div class="container">
                                                    <div class="row justify-content-center">
                                                        <div class="col-lg-8">
                                                            <div class="section-title text-center mb-70">
                                                                <span class="sub-title">Contact</span>
                                                                <h2 class="title title"><span>Contact</span> Us</h2>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="contact-info-wrap">
                                                        <div class="row justify-content-center">
                                                            <div class="col-lg-4 col-sm-6">
                                                                <a href="mailto:info@usdtexchanges.com" target="_blank" rel="noopener noreferrer">
                                                                    <div class="contact-info-item">
                                                                        <div class="icon cursor-pointer">
                                                                            <span class="icon-background"></span>
                                                                            <i aria-hidden="true" class="far fa-envelope"></i>
                                                                        </div>
                                                                        <div class="content">
                                                                            <p class="contact-desc">Email: <br />info@usdtexchanges.com</p>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div class="col-lg-4 col-sm-6">
                                                                <a href="http://wa.me/09691651221" target="_blank" rel="noopener noreferrer">
                                                                    <div class="contact-info-item">
                                                                        <div class="icon cursor-pointer">
                                                                            <span class="icon-background"></span>
                                                                            <i aria-hidden="true" class="fab fa-whatsapp"></i>
                                                                        </div>
                                                                        <div class="content">
                                                                            <p class="contact-desc">Whatsapp: <br /> Xi AN</p>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div class="col-lg-4 col-sm-6">
                                                                <a href="https://t.me/Xian572" target="_blank" rel="noopener noreferrer">
                                                                    <div class="contact-info-item">
                                                                        <div class="icon cursor-pointer">
                                                                            <span class="icon-background"></span>
                                                                            <i aria-hidden="true" class="fab fa-telegram-plane"></i>
                                                                        </div>
                                                                        <div class="content">
                                                                            <p class="contact-desc">Telegram: <br />Xian572</p>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Contact_Form></Contact_Form>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}

export default Homepage