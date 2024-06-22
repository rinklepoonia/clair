import React from 'react'
import { Container } from 'react-bootstrap'

function Footer() {
    return (
        <div className='footer_padding footer_bg_img'>
            <Container>
                <h4 className='ff_manrope fw-semibold text60_3xl lh_72 color_yellow mb-lg-3 mb-sm-1 mb-0 pb-xl-1 pb-0 text-center'>$CLAIR</h4>
                <p className='ff_manrope fw-normal text16_sm lh_24 color_lightGrey max_w_626 text-center pb-xl-5 pb-3  mb-0 mx-auto'>In this meme-driven world, laughter is not just a reaction; it's a powerful tool for chang
                    and Baby Sinclair is wielding it with style. The bad players better watch out;
                    the crypto defender is here, armed with memes and ready to act.</p>
                <nav>
                    <ul className='d-flex flex-wrap ps-0 mb-0 gap_lg_32 gap_sm_20 gap_15 justify-content-center'>
                        <li className='list_style_none'><a href="#about" className='ff_manrope fw-medium text16_sm lh_24 color_lightWhite nav_underline'>About</a></li>
                        <li className='list_style_none'><a href="#token" className='ff_manrope fw-medium text16_sm lh_24 color_lightWhite nav_underline'>Tokenomics</a></li>
                        <li className='list_style_none'><a href="#audit" className='ff_manrope fw-medium text16_sm lh_24 color_lightWhite nav_underline'>Audit</a></li>
                        <li className='list_style_none'><a href="#roadmap" className='ff_manrope fw-medium text16_sm lh_24 color_lightWhite nav_underline'>Roadmap</a></li>
                        <li className='list_style_none'><a href="#whitepaper" className='ff_manrope fw-medium text16_sm lh_24 color_lightWhite text-nowrap nav_underline'>White Paper</a></li>
                        <li className='list_style_none'><a href="" className='ff_manrope fw-medium text16_sm lh_24 color_lightWhite nav_underline'>Privacy </a></li>
                        <li className='list_style_none'><a href="" className='ff_manrope fw-medium text16_sm lh_24 color_lightWhite nav_underline'>Cookies</a></li>
                        <li className='list_style_none'><a href="" className='ff_manrope fw-medium text16_sm lh_24 color_lightWhite nav_underline'>Disclaimer</a></li>
                    </ul>
                </nav>
                <div className='border_bottom_footer mb-lg-4 mb-2 mt-lg-5 mt-3'></div>
            </Container>
        </div>
    )
}

export default Footer