import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Linesvg } from '../components/Icon'
import dollerLogo from '../assets/images/svg/doller-logo.svg'
import tlogo from '../assets/images/svg/t-logo.svg'
import logo3 from '../assets/images/svg/eth-3-logo.svg'
import logo4 from '../assets/images/svg/4-logo.svg'
import Watchimg from '../assets/images/svg/timer-svg.svg'
import timerDotes from '../assets/images/svg/timer-dotes.svg'
import rangeSlider from '../assets/images/webp/range-slider-img.webp'
import yellowRange from '../assets/images/webp/range-yellow-arrow.webp'
import whiteRange from '../assets/images/webp/range-white-arrow.webp'

function TimerBox() {
    const [timeInSeconds, setTimeInSeconds] = useState(
        parseInt(localStorage.getItem('timeInSeconds')) || 0
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeInSeconds(prevTime => {
                const newTime = prevTime + 1;
                localStorage.setItem('timeInSeconds', newTime.toString());
                return newTime;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        return () => {
            localStorage.removeItem('timeInSeconds');
        };
    }, []);

    const days = Math.floor(timeInSeconds / (3600 * 24));
    const hours = Math.floor((timeInSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return (
        <div className='position-relative pt-xl-5 pt-4'>
            <Container>
                <div className='d-flex justify-content-center'>
                    <div data-aos="zoom-in" className='timeBox grident_radius position-relative z-3'>
                        <Row className='justify-content-between'>
                            <Col lg={5} className='col-12' >
                                <div className='d-flex max_w_lg_254 d-flex justify-content-between align-items-center'>
                                    <div className='blank'>
                                        <p className='ff_manrope fw-normal text16_sm lh_24 color_gryWhite mb-1'>1 $Clair</p>
                                        <p className='ff_manrope fw-bold text16_sm lh_24 color_yellow mb-0'>0.00387 $</p>
                                    </div>
                                    <span><Linesvg /></span>
                                    <div className='blank'>
                                        <p className='ff_manrope fw-normal text16_sm lh_24 color_gryWhite mb-1'>Raised Amount</p>
                                        <p className='ff_manrope fw-bold text16_sm lh_24 color_yellow mb-0'>332,123$</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center justify_content_center gap-3 mt-3 mb-4 pb-lg-2 pb-0'>
                                    <a href='' className='Icon_box bg_grey d-flex justify-content-center align-items-center'><img src={dollerLogo} alt="dollerLogo" /></a>
                                    <a href='' className='Icon_box bg_grey d-flex justify-content-center align-items-center'><img src={tlogo} alt="tlogo" /></a>
                                    <a href='https://ethereum.org/en/' target='_blank' className='Icon_box bg_grey d-flex justify-content-center align-items-center'><img src={logo3} alt="logo3" /></a>
                                    <a href='' className='Icon_box bg_grey d-flex justify-content-center align-items-center'><img src={logo4} alt="logo4" /></a>
                                </div>
                                <div className='d-flex justify_content_center mb-lg-0 mb-3'><button aria-label='buy-now' className='ff_manrope fw-bold text16_sm lh_24 color_lightblack bg_yellow btn_modification max_w_254 w-100'>Buy Now</button></div>
                            </Col>
                            <Col lg={7}>
                                <div className='d-flex justify-content-between'>
                                    <div className='ps-sm-3'>
                                        <p className='ff_manrope fw-normal text16_sm lh_24 color_gryWhite mb-1'>Tokens are Sold</p>
                                        <p className='ff_manrope fw-bold text16_sm lh_24 color_yellow'>98,212,738</p>
                                    </div>
                                    <div className='pe-sm-5'>
                                        <p className='ff_manrope fw-normal text16_sm lh_24 color_gryWhite mb-1'>Tokens Remaining</p>
                                        <p className='ff_manrope fw-bold text16_sm lh_24 color_white'>80,212,738</p>
                                    </div>
                                </div>
                                <div className='position-relative'>
                                    <img className='max_w_404 w-100' src={rangeSlider} alt="rangeSlider" />
                                    <div className='position-absolute pos_yellowRange_line'><img className='max_w_38' src={yellowRange} alt="yellowRange" /></div>
                                    <div className='position-absolute pos_WhiteRange_line'><img className='max_w_38' src={whiteRange} alt="whiteRange" /></div>
                                </div>
                                <p className='ff_manrope fw-normal text14_xsm lh_21 color_lightGrey mt-1 mb-3'>Purchase $Clair fast until the price increase.</p>
                                <div className='d-flex justify-content-sm-between justify-content-center align-items-center flex-wrap gap-4'>
                                    <div className='d-flex gap-2 align-items-center'>
                                        <img src={Watchimg} alt="Watchimg" />
                                        <p className='ff_manrope fw-normal text16_sm lh_20 color_white mb-0'>Price
                                            <span className='d-lg-block'> increase in</span></p>
                                    </div>
                                    <div className='d-flex flex-wrap gap-2'>
                                        <div>
                                            <p className='ff_manrope fw-normal text14_xsm lh_21 color_lightGrey mb-1'>Days</p>
                                            <div className='d-flex gap-2'>
                                                <div className='timeing_box d-flex justify-content-center align-items-center'>
                                                    <p className='ff_manropw fw-normal text24_2md lh_36 color_white mb-0'>{days} </p>
                                                </div>
                                                <img src={timerDotes} alt="timerDotes" />
                                            </div>
                                        </div>
                                        <div>
                                            <p className='ff_manrope fw-normal text14_xsm lh_21 color_lightGrey mb-1'>Hours</p>
                                            <div className='d-flex gap-2'>
                                                <div className='timeing_box d-flex justify-content-center align-items-center'>
                                                    <p className='ff_manropw fw-normal text24_2md lh_36 color_white mb-0'>{hours}</p>
                                                </div>
                                                <img src={timerDotes} alt="timerDotes" />
                                            </div>
                                        </div>
                                        <div>
                                            <p className='ff_manrope fw-normal text14_xsm lh_21 color_lightGrey mb-1'>Mins</p>
                                            <div className='d-flex gap-2'>
                                                <div className='timeing_box d-flex justify-content-center align-items-center'>
                                                    <p className='ff_manropw fw-normal text24_2md lh_36 color_white mb-0'>{minutes}</p>
                                                </div>
                                                <img src={timerDotes} alt="timerDotes" />
                                            </div>
                                        </div>
                                        <div>
                                            <p className='ff_manrope fw-normal text14_xsm lh_21 color_lightGrey mb-1'>Secs</p>
                                            <div className='timeing_box d-flex justify-content-center align-items-center'>
                                                <p className='ff_manropw fw-normal text24_2md lh_36 color_white mb-0'>{seconds}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
            <div className='heroEllip_property position-absolute pos_timer_ellip end-0 d-lg-block d-none'></div>
        </div>
    );
}

export default TimerBox;