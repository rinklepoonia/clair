import React from 'react'
import { Container } from 'react-bootstrap'
import roadmapline from '../assets/images/png/rodamap-line.png'
import bulb1 from '../assets/images/svg/rodmap-bulb1.svg'
import bulb2 from '../assets/images/svg/rodmap-blub2.svg'
import bulb3 from '../assets/images/svg/rodmap-bulb3.svg'

function Roadmap() {
  return (
    <div id='roadmap' className='roadmap_bg_img bg_cover bg_center mt_60 position-relative h_1103 pb_40'>
      <div className='heroEllip_property position-absolute bottom-0 end-0 z-1 d-sm-block d-none'></div>
      <Container>
        <h3 className='ff_manrope fw-semibold text48_2xl lh_57 color_white text-center pt-xxl-5 mt-xl-3 mt_16 mb-xl-0 mb-lg-5 mb-4 neg_margin mt_50'>Roadmap</h3>
        <div className='d-flex justify-content-center gap-3 flex-wrap'>
          <div className='position_absolute pos_rodmap_box1'>
            <div className="rodmapBox padding_box1">
              <p className='ff_manrope fw-medium text32_lg lh_48 color_white ps-2'>Phase 1</p>
              <ul>
                <li className='ff_manrope fw-medium text16_sm lh_24 color_gryWhite mb-2 text_nowrap_rodmap'>Team Recruitment</li>
                <li className='ff_manrope fw-medium text16_sm lh_24 color_gryWhite mb-2 text_nowrap_rodmap'>Social Media</li>
                <li className='ff_manrope fw-medium text16_sm lh_24 color_gryWhite mb-2 text_nowrap_rodmap'>Audit Smart Contract</li>
                <li className='ff_manrope fw-medium text16_sm lh_24 color_gryWhite mb-2 text_nowrap_rodmap'>Whitepaper</li>
                <li className='ff_manrope fw-medium text16_sm lh_24 color_gryWhite mb-2 text_nowrap_rodmap'>Presale Launch</li>
                <li className='ff_manrope fw-medium text16_sm lh_24 color_gryWhite mb-2 text_nowrap_rodmap'>Community Growth</li>
                <li className='ff_manrope fw-medium text16_sm lh_24 color_gryWhite text_nowrap_rodmap'>AI Avatars Release</li>
              </ul>
              <div className='position-absolute pos_bulb d-xl-block d-none'><img src={bulb1} alt="bulb1" /></div>
            </div>
          </div>
          <div className='position_absolute pos_rodmap_box2'>
            <div className="rodmapBox padding_box2">
              <p className='ff_manrope fw-medium text32_lg lh_48 color_white ps-2'>Phase 1</p>
              <ul className=''>
                <li className='ff_manrope fw-medium text16_sm lh_24 color_gryWhite mb-2 text_nowrap_rodmap'>Official Launch</li>
                <li className='ff_manrope fw-medium text16_sm lh_24 color_gryWhite mb-2 text_nowrap_rodmap'>Burns 5%</li>
                <li className='ff_manrope fw-medium text16_sm lh_24 color_gryWhite mb-2 text_nowrap_rodmap'>Major DEX & CEX Listings</li>
                <li className='ff_manrope fw-medium text16_sm lh_24 color_gryWhite mb-2 text_nowrap_rodmap'>Coinmarketcap</li>
                <li className='ff_manrope fw-medium text16_sm lh_24 color_gryWhite mb-2 text_nowrap_rodmap'>CoinGecko</li>
                <li className='ff_manrope fw-medium text16_sm lh_24 color_gryWhite mb-2 text_nowrap_rodmap'>Influencers Marketing</li>
                <li className='ff_manrope fw-medium text16_sm lh_24 color_gryWhite text_nowrap_rodmap'>More AI Avatars Release</li>
              </ul>
              <div className='position-absolute pos_bulb2 d-xl-block d-none'><img src={bulb2} alt="bulb2" /></div>
            </div>
          </div>
          <div className='position_absolute pos_rodmap_box3'>
            <div className="rodmapBox padding_box3">
              <p className='ff_manrope fw-medium text32_lg lh_48 color_white ps-2'>Phase 1</p>
              <ul className=''>
                <li className='ff_manrope fw-medium text16_sm lh_24 color_gryWhite mb-2 text_nowrap_rodmap'>Burns (5% quarterly)</li>
                <li className='ff_manrope fw-medium text16_sm lh_24 color_gryWhite mb-2 text_nowrap_rodmap'>Rewards Program</li>
                <li className='ff_manrope fw-medium text16_sm lh_24 color_gryWhite mb-2 text_nowrap_rodmap'>Multiple Partnerships</li>
                <li className='ff_manrope fw-medium text16_sm lh_24 color_gryWhite mb-2'>Create your own AI Avatar Voiceover.</li>
                <li className='ff_manrope fw-medium text16_sm lh_24 color_gryWhite mb-2'>AI Metaverse Avatar Play-to-Earn</li>
              </ul>
              <div className='position-absolute pos_bulb3 d-xl-block d-none'><img src={bulb3} alt="bulb3" /></div>
            </div>
          </div>
        </div>
      </Container>
      <div className='position-absolute pos_rodmap_line z-0 d-xl-block d-none w-100'><img className='w-100 h_642' src={roadmapline} alt="roadmapline" /></div>
    </div>
  )
}

export default Roadmap