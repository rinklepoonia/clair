import React from 'react'
import { Container } from 'react-bootstrap'
import { Discord } from '../components/Icon'
import { Twitter } from '../components/Icon'
import { Telegram } from '../components/Icon'
import socialghost from '../assets/images/webp/social-ghost.webp'


function Socials() {
    return (
        <div className='position-relative socialSection_padding mt_60'>
            <div className='heroEllip_property position-absolute top-0 end-0 z-1'></div>
            <div className='position-absolute pos_ghost d-lg-block d-none'>
                <img className='max_w_284' src={socialghost}
                    alt="socialghost" />
            </div>
            <Container>
                <div className='d-flex justify-content-center'>
                    <div data-aos="zoom-in" className='socials_bg_img socialBox_modifacition z_1 mt-md-0 mt-3'>
                        <h3 className='ff_manrope fw-semibold text48_2xl lh_md_57 lh_36 color_white text-center mb-lg-3 mb-md-0'>Our <span className='color_yellow'>Socials</span></h3>
                        <p className='ff_mamrope fw-normal text16_sm lh_24 color_lightGrey mb-lg-4 mb-sm-2 mb-1 pb-lg-2 pb-0 text-center'>Join us on social media for exclusive giveaways and stay connected!</p>
                        <p className='ff_manrope fw-normal text20_md lh_sm_30 lh_21 color_yellow text-center mb-3 pb-lg-1 pb-0'>“Exciting Releases of 'Bad Players' Avatars Coming Soon: Be Ready for the Fun!"</p>
                        <div className='d-flex gap-3 align-items-center justify-content-center'>
                            <a href='https://discord.com/' target='_blank' className='Social_IconBox d-flex justify-content-center align-items-center IconHover transition'><Discord /></a>
                            <a href='https://x.com/?lang=en' target='_blank' className='Social_IconBox d-flex justify-content-center align-items-center IconHover transition'><Twitter /></a>
                            <a href='https://telegram.org/' target='_blank' className='Social_IconBox d-flex justify-content-center align-items-center IconHover transition'><Telegram /></a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>

    )
}

export default Socials