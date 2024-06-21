import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import secureImg from '../assets/images/png/secure-img.png'
import { Col, Container, Row } from 'react-bootstrap'
import sliderImg1 from '../assets/images/png/slider1.png'
import sliderImg2 from '../assets/images/png/slider2.png'
import sliderImg3 from '../assets/images/png/slider3.png'
import sliderImg4 from '../assets/images/png/slider4.png'
import sliderImg5 from '../assets/images/png/slider5.png'
import sliderImg6 from '../assets/images/png/slider6.png'

function Secure() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1.44,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1.44,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    };

    return (
        <div id='audit' className='security_bg_img bg_cover bg_center mt_45 secureSection_padding position-relative'>
            <div className='heroEllip_property position-absolute bottom-0 end-0 z-1'></div>
            <Container>
                <Row className='align-items-center'>
                    <Col data-aos="fade-right" lg={5} className='col-12 d-flex justify-content-center mb-lg-0 mb-3'>
                        <img className='max_w_lg_244 max_w_170' src={secureImg} alt="secureImg" />
                    </Col>
                    <Col data-aos="fade-left" lg={7} className='col-12 d-flex align_items_center justify_content_center'>
                        <div className='blank'>
                            <p className='ff_manrope fw-normal text20_md lh_30 color_gryWhite mb-lg-2 mb-0 text_center'>Rest easy knowing that $CLAIR is </p>
                            <p className='ff_manrope fw-semibold text32_lg lh_sm_48 lh_30 color_yellow mb-lg-2 mb-0 text_center'>Fully Audited and 100% Secure.</p>
                            <p className='ff_manrope fw-normal text20_md lh_30 color_gryWhite mb-md-4 mb-3 pb-lg-2 pb-0 text_center'>Zero Room for Rug Pulls: Invest with Confidence.</p>
                            <div className='text_center'><button className='ff_manrope fw-bold text16_sm lh_24 color_lightblack bg_yellow btn_modification'>Audit</button></div>
                        </div>
                    </Col>
                </Row>
                <div className='border_bottom_secure'></div>
                <Row className='pt_lg_61 pt_15'>
                    <Col data-aos="fade-right" lg={6} className='col-12 d-flex justify-content-center align-items-center'>
                        <div className='blank'>
                            <p className='ff_manrope fw-semibold text32_lg lh_48 color_white mb-lg-3 mb-2 text_center'>Listing on <span className='color_yellow'>Major Exchanges</span></p>
                            <p className='ff_marope fw-normal text20_md lh_30 color_gryWhite max_w_475 text_center'>Baby Sinclair’s Team is in action to secure the <span className='color_yellow'>$CLAIR</span> listing on major exchanges. Exciting milestones ahead.</p>
                        </div>
                    </Col>
                    <Col lg={6} className='col-12'>
                        <div className="slider_box grident_radius z-1">
                            <Slider className='overflow- x-hidden' {...settings}>
                                <a href='https://www.coinbase.com/en-gb/' target='_blank'>
                                    <img className='w-100 max_w_267' src={sliderImg1} alt="sliderImg1" />
                                </a>
                                <a href=''>
                                    <img className='w-100 max_w_267' src={sliderImg2} alt="sliderImg2" />
                                </a>
                                <a href='https://www.kucoin.com/' target='_blank'>
                                    <img className='w-100 max_w_267' src={sliderImg3} alt="sliderImg3" />
                                </a>
                                <a href=''>
                                    <img className='w-100 max_w_267' src={sliderImg4} alt="sliderImg4" />
                                </a>
                                <a href='https://uniswap.org/' target='_blank'>
                                    <img className='w-100 max_w_267' src={sliderImg5} alt="sliderImg5" />
                                </a>
                                <a href='https://www.coingecko.com/' target='_blank'>
                                    <img className='w-100 max_w_267' src={sliderImg6} alt="sliderImg6" />
                                </a>
                            </Slider>
                            <div className='d-lg-flex gap-3 mt-4 d-none'>
                                <div className='slider_border1'></div>
                                <div className='slider_border2'></div>
                                <div className='slider_border3'></div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Secure