import React from 'react'
import { Container } from 'react-bootstrap'

function Address() {
    return (
        <div id='whitepaper' className='address_bg_img bg_cover bg_center SmartContract_padding position-relative'>
            <div className='position-absolute heroEllip_property bottom-0 start-0 z-2'></div>
            <Container>
                <h2 data-aos="fade-down" className='ff_manrope fw-semibold text48_2xl lh_md_57 lh_36 color_white text-center mb-lg-4 mb-sm-3 mb-2'><span className='color_yellow'>$CLAIR</span> Smart Contract Address</h2>
                <div data-aos="zoom-in" className='d-flex justify-content-center mb-sm-4 mb-md-3 mb-2 pb-lg-2 pb-0'>
                    <div className='input_modification d-flex justify-content-between mt-md-0 mt-2'>
                        <input type="text" placeholder='0xFD1929755F73f974648daD00ab491a7C44a00eeD' className='ff_manrope fw-normal text16_sm lh_24 color_gryWhite bg-transparent outline_none border_none w-100' />
                        <button aria-label='copy' className='ff_manrope fw-bold text16_sm lh_24 color_lightblack bg_yellow btn_modification ms-1 d-md-block d-none'>Copy</button>
                    </div>
                </div>
                <div data-aos="fade-down" className='mx-auto text-center max_w_90 d-md-none d-block mb-md-0 mb-2'><button className='ff_manrope fw-bold text16_sm lh_24 color_lightblack bg_yellow btn_modification'>Copy</button></div>
                <p data-aos="fade-down" className='ff_manrope fw-normal text16_sm lh_24 color_lightGrey text-center max_w_806 mx-auto mb-0'>Built on the Ethereum blockchain and powered by the most advanced AI technology, Baby Sinclair has the <span className='d-lg-block d-none'>potential to make millions in both early stages and long-term investment. Our strategic burn system, which</span> will burn millions of $CLAIR quarterly, aims to increase its value significantly. Don't miss out! Get in early and secure your chance to become the next millionaire.</p>
            </Container>
        </div>
    )
}

export default Address