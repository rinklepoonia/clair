import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Tokendot from '../assets/images/png/token-dot.png'
import tokenImg from '../assets/images/png/token-img.png'
import tokenCat from '../assets/images/png/token-cat.png'
import tokenGhost from '../assets/images/png/token-ghost.png'
import PlusImg from '../assets/images/png/plus-img.png'

function Token() {
    return (
        <div id='token' className='tokenSection_padding neg_margin position-relative mt_45'>
            <div className='heroEllip_property position-absolute bottom-0 end-0 z-3'></div>
            <Container>
                <Row className='flex-lg-row flex-column-reverse'>
                    <Col lg={5} className='d-flex justify-content-center mt-lg-0 mt-3'>
                        <div className='blank'>
                            <h3 className='ff_manrope fw-semibold text48_2xl lh_md_57 lh_36 color_white mb-lg-3 mb-0'>Tokenomics</h3>
                            <div className='d-flex gap-3 mb-lg-4 mb-md-2 mb-2'>
                                <p className='ff_manrope fw-normal text24_2md lh_36 color_gryWhite mb-0'>Baby Sinclair</p>
                                <p className='ff_manrope fw-normal text24_2md lh_36 color_yellow mb-0'>$Clair</p>
                            </div>
                            <p className='ff_manrope fw-medium text16_sm lh_24 color_gryWhite mb-lg-1 mb-0'>Total Tokens</p>
                            <p className='ff_manrope fe-semibold text40_xl lh_48 color_yellow mb-lg-4 mb-lg-3 mb-2 pb-lg-2 pb-0'>100,000,000,000</p>
                            <div className='d-flex gap-3  mb-lg-2 mb-1 pb-lg-1 pb-0'>
                                <img className='w_36' src={Tokendot} alt="Tokendot" />
                                <div className='d-flex align-items-baseline gap-3'>
                                    <p className='ff_manrope fw-500 text24_2md lh_36 color_gryWhite mb-0'>1%</p>
                                    <p className='ff_manrope fw-normal text16_sm lh_24 color_gryWhite mb-0'>Presale</p>
                                </div>
                            </div>
                            <div className='d-flex gap-3 mb-lg-2 mb-1 pb-lg-1 pb-0'>
                                <img className='w_36' src={Tokendot} alt="Tokendot" />
                                <div className='d-flex align-items-baseline gap-3'>
                                    <p className='ff_manrope fw-500 text24_2md lh_36 color_gryWhite mb-0'>3%</p>
                                    <p className='ff_manrope fw-normal text16_sm lh_24 color_gryWhite mb-0'>Marketing</p>
                                </div>
                            </div>
                            <div className='d-flex gap-3  mb-lg-2 mb-1 pb-lg-1 pb-0'>
                                <img className='w_36' src={Tokendot} alt="Tokendot" />
                                <div className='d-flex align-items-baseline gap-3'>
                                    <p className='ff_manrope fw-500 text24_2md lh_36 color_gryWhite mb-0'>5%</p>
                                    <p className='ff_manrope fw-normal text16_sm lh_24 color_gryWhite mb-0'>Team - locked for 24 months</p>
                                </div>
                            </div>
                            <div className='d-flex gap-3  mb-lg-2 mb-1 pb-lg-1 pb-0'>
                                <img className='w_36' src={Tokendot} alt="Tokendot" />
                                <div className='d-flex align-items-baseline gap-3'>
                                    <p className='ff_manrope fw-500 text24_2md lh_36 color_gryWhite mb-0'>10%</p>
                                    <p className='ff_manrope fw-normal text16_sm lh_24 color_gryWhite mb-0'>Investors - locked for 24 months</p>
                                </div>
                            </div>
                            <div className='d-flex gap-3  mb-lg-2 mb-1 pb-lg-1 pb-0'>
                                <img className='w_36' src={Tokendot} alt="Tokendot" />
                                <div className='d-flex align-items-baseline gap-3'>
                                    <p className='ff_manrope fw-500 text24_2md lh_36 color_gryWhite mb-0'>21%</p>
                                    <p className='ff_manrope fw-normal text16_sm lh_24 color_gryWhite mb-0'>Exchange listings & liquidity</p>
                                </div>
                            </div>
                            <div className='d-flex gap-3'>
                                <img className='w_36' src={Tokendot} alt="Tokendot" />
                                <div className='d-flex align-items-baseline gap-3'>
                                    <p className='ff_manrope fw-500 text24_2md lh_36 color_gryWhite mb-0'>60%</p>
                                    <p className='ff_manrope fw-normal text16_sm lh_24 color_gryWhite mb-0'>Rewards and burns</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={7} className='d-flex justify-content-center'>
                        <img className='max_w_lg_491 max_w_235' src={tokenImg} alt="tokenImg" />
                    </Col>
                </Row>
                <div className='d-flex justify-content-center'>
                    <div className='token_sinclair_box mt_lg_60 mt_35 z-1'>
                        <Row className='align-items-center justify-content-between'>
                            <Col lg={4} className='col-12 d-flex justify-content-center'>
                                <div className='d-flex gap-4 align-items-center mb-lg-0 mb-2'>
                                    <div className='Icon_outerbox d-flex justify-content-center align-items-center'>
                                        <img className='max_w_md_68 max_w_40' src={tokenCat} alt="tokenCat" />
                                    </div>
                                    <img className='w_32' src={PlusImg} alt="PlusImg" />
                                    <div className='Icon_outerbox d-flex justify-content-center align-items-center'>
                                        <img className='max_w_md_68 max_w_40' src={tokenGhost} alt="tokenGhost" />
                                    </div>
                                </div>
                            </Col>
                            <Col lg={7} className='col-12 d-flex justify-content-center  flex-column'>
                                <p className='ff_manrope fw-semibold text20_md lh_sm_30 lh_21 color_white text_nowrap mb-2 text_center'>Baby Sinclair Stands Strong with the Shiba Inu Community</p>
                                <p className='ff_manrope fw-normal text16_sm lh_24 color_gryWhite text_nowrap text_center'>10% of every $CLAIR token sold post-presale will be dedicated to burning SHIB.</p>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Token