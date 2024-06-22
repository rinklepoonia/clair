import React from 'react'
import { Container } from 'react-bootstrap'
import aboutghost from '../assets/images/webp/scalir-ghost.webp'

function About() {
    return (
        <div id='about' className='py_100_54 position-relative mb_45 z-1'>
            <div className='position-absolute pos_aboutGhost d-lg-block d-none'><img className='max_w_309' src={aboutghost} alt="aboutghost" /></div>
            <Container>
                <h2 data-aos="fade-up" className='ff_manrope fw-semibold text48_2xl lh_md_57 lh_36 color_white text-center mb-lg-3 mb-2'>About <span className='color_yellow'>$CLAIR</span></h2>
                <p data-aos="fade-up" className='ff_manrope fw-normal text16_sm lh_24 color_lightGrey max_w_776 text-center mx-auto mb-md-2 mb-1 pb-lg-1 pb-0'>As you navigate through the avatars, you'll find each one has a unique voice, bringing laughter and a touch of sarcasm to the otherwise serious discussions in the crypto space.</p>
                <p data-aos="fade-up" className='ff_manrope fw-normal text16_sm lh_24 color_lightGrey max_w_776 text-center mx-auto mb-md-2 mb-1 pb-lg-1 pb-0'>In a landscape where tensions can run high, Baby Sinclair’s memes serve as a reminder that, sometimes, the best way to confront challenges is with a good laugh.</p>
                <p data-aos="fade-up" className='ff_manrope fw-normal text16_sm lh_24 color_lightGrey max_w_856 text-center mx-auto mb-md-2 mb-1 pb-lg-1 pb-0'>In this meme-driven world, laughter is not just a reaction; it's a powerful tool for change, and Baby Sinclair is wielding it with style. The bad players better watch out; the crypto defender is here, armed with memes and ready to act.</p>
                <div data-aos="fade-up" className='text-center'><button aria-label='learn-more' className='ff_manrope fw-bold text16_sm lh_24 bg_yellow btn_modification mt-lg-4 mt-md-3 mt-2'>Learn More</button></div>
            </Container>
        </div>
    )
}

export default About