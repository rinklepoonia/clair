import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import pageLogo from '../assets/images/webp/page-logo.webp'
import HeroCartoon from '../assets/images/webp/hero-group-cartoon.webp'
import heroBottomLayer from '../assets/images/webp/hero-bottam-layer.webp'
import navImg from '../assets/images/webp/hero-nav-a.webp'
import { BtnIcon } from '../components/Icon'
import { DownArrow } from '../components/Icon'
import { Dropdown } from '../components/Icon'

function HeroSection() {
  const [nav, setnav] = useState(false)
  if (nav === true) {
    document.body.classList.add("overflow_hidden");
  } else {
    document.body.classList.remove("overflow_hidden");
  }
  return (
    <div className='hero_bg_img  h_819 position-relative d-flex flex-column'>
      <nav className='h_100 d-flex justify-content-center align-items-center border_bottom nav_bg_color'>
        <Container>
          <div className='d-flex align-items-center justify-content-between'>
            <a href="" aria-label='pagelogo' className='d-flex align-items-center gap-2'>
              <img src={pageLogo}
              alt="pageLogo"
              className='max_w_47' />
              <p className='ff_manrope fw-semibold text32_lg lh_48 color_yellow mb-0'>$CLAIR</p></a>
            <div className='d-flex align-items-center gap_60'>
              <ul className={`${nav ? "end-0" : "right_100"} mobile_view d-flex ps-0 mb-0 gap_32`}>
                <li className='list_style_none'><a href="#about" aria-label='about' onClick={() => setnav(!nav)} className='ff_manrope fw_500 text16_sm lh_24 color_gryWhite nav_links transition nav_underline'>About</a></li>
                <li className='list_style_none'><a href="#token" aria-label='token' onClick={() => setnav(!nav)} className='ff_manrope fw_500 text16_sm lh_24 color_gryWhite nav_links transition nav_underline'>Tokenomics</a></li>
                <li className='list_style_none'><a href="#audit" aria-label='audit' onClick={() => setnav(!nav)} className='ff_manrope fw_500 text16_sm lh_24 color_gryWhite nav_links transition nav_underline'>Audit</a></li>
                <li className='list_style_none'><a href="#roadmap" aria-label='roadmap' onClick={() => setnav(!nav)} className='ff_manrope fw_500 text16_sm lh_24 color_gryWhite nav_links transition nav_underline'>Roadmap</a></li>
                <li className='list_style_none'><a href="#whitepaper" aria-label='white' onClick={() => setnav(!nav)} className='ff_manrope fw_500 text16_sm lh_24 color_gryWhite nav_links transition nav_underline'>White Paper</a></li>
              </ul>
              <div className='d-sm-flex align-items-center gap-2 d-none'>
                <img className='w_30' src={navImg} alt="navImg" />
                <div class="dropdown">
                  <span class="dropbtn"><Dropdown /></span>
                  <div class="dropdown-content">
                    <a href="#" aria-label='link1' className='ff_manrope text16_sm color_white lh_21'>English</a>
                    <a href="#" aria-label='link2' className='ff_manrope text16_sm color_white lh_21'>Spanish</a>
                  </div>  
                </div>
              </div>
              <div className='menu d-lg-none z_6' onClick={() => setnav(!nav)}>
                <span></span>
                <span className='my-2'></span>
                <span></span>
              </div>
            </div>
          </div>
        </Container>
      </nav>
      <Container>
        <div className='mx-auto text-center pt-lg-5 pt-3'>
          <h1 className='ff_manrope fw-bold text60_3xl lh_sm_72 lh_48 color_white text-center mb-lg-3 mb-1'>Presale is <span className='color_yellow'>Live</span></h1>
          <p className='ff_manrope fw-normal text16_sm lh_24 color_lightWhite max_w_702 text-center mx-auto mb-md-4 mb-2 pb-lg-2 pb-0'>Led by the most advanced AI technology, with a unique burn system to potentially increase its value significantly. Secure your chance to become the next millionaire!</p>
          <div className='max_w_157 text-center mx-auto'>
            <button aria-label='buy clair' className='ff_manrope fw-bold text16_sm lh_24 color_black bg_yellow btn_modification d-flex align-items-center gap-2 text-nowrap'>Buy $Clair
              <BtnIcon />
            </button>
          </div>
          <img src={HeroCartoon}
            alt="HeroCartoon"
            className='max_w_810 max_w_330 w-100 h_427' />
        </div>
      </Container>
      <div className='position-absolute end-0 heroBlackLayer_pos w-100 d-lg-block d-none'>
        <img src={heroBottomLayer}
          alt="heroBottomLayer"
          className='w-100' />
      </div>
      <div className='position-absolute pos_downArrow d-lg-block d-none'><DownArrow /></div>
      <div className='heroEllip_property z-1 start-0 position-absolute bottom-0 d-md-block d-none'></div>
    </div>
  )
}

export default HeroSection