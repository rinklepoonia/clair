import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import secureImg from "../assets/images/webp/secure-img.webp";
import SecuareYellowImg from "../assets/images/webp/secure-img-1.webp";
import { Col, Container, Row } from "react-bootstrap";
import sliderImg1 from "../assets/images/webp/slider1.webp";
import sliderImg2 from "../assets/images/webp/slider2.webp";
import sliderImg3 from "../assets/images/webp/slider3.webp";
import sliderImg4 from "../assets/images/webp/slider4.webp";
import sliderImg5 from "../assets/images/webp/slider5.webp";
import sliderImg6 from "../assets/images/webp/slider6.webp";

function Secure() {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 3000,
    autoplaySpeed: 0,
    slidesToShow: 1.5,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      id="audit"
      className="security_bg_img bg_cover  bg_center mt_45 secureSection_padding position-relative"
    >
      <div className="heroEllip_property position-absolute bottom-0 end-0 z-1 d-lg-block d-none"></div>
      <Container>
        <Row className="align-items-center">
          <Col
            data-aos="fade-right"
            lg={6}
            className="col-12 d-flex justify-content-center mb-lg-0 mb-3"
          >
            <div className="position-relative">
              <img
                className="max_w_lg_244 max_w_170"
                src={SecuareYellowImg}
                alt="SecuareYellowImg"
              />
              <div className="position-absolute pos_secure_img d-lg-block d-none">
                <img src={secureImg} alt="secureImg" />
              </div>
            </div>
          </Col>
          <Col
            data-aos="fade-left"
            lg={6}
            className="col-12 d-flex align_items_center justify_content_center"
          >
            <div className="blank">
              <p className="ff_manrope fw-normal text20_md lh_30 color_gryWhite mb-lg-2 mb-0 text_center">
                Rest easy knowing that $CLAIR is{" "}
              </p>
              <p className="ff_manrope fw-semibold text32_lg lh_lg_48 lh_30 color_yellow mb-lg-2 mb-0 text_center">
                Fully Audited and 100% Secure.
              </p>
              <p className="ff_manrope fw-normal text20_md lh_30 color_gryWhite mb-xxl-4 mb-2 pb-xxl-2 pb-0 text_center">
                Zero Room for Rug Pulls: Invest with Confidence.
              </p>
              <div className="text_center">
                <button
                  aria-label="audit"
                  className="ff_manrope fw-bold text16_sm lh_24 color_lightblack bg_yellow btn_modification"
                >
                  Audit
                </button>
              </div>
            </div>
          </Col>
        </Row>
        <div className="border_bottom_secure"></div>
        <Row className="pt_lg_61 pt_15">
          <Col
            data-aos="fade-right"
            lg={6}
            className="col-12 d-flex justify-content-lg-end justify-content-center align-items-center"
          >
            <div className="blank">
              <p className="ff_manrope fw-semibold text32_lg lh_sm_48 lh_36 color_white mb-lg-3 mb-2 text_center">
                Listing on <span className="color_yellow">Major Exchanges</span>
              </p>
              <p className="ff_marope fw-normal text20_md lh_30 color_gryWhite max_w_475 text_center">
                Baby Sinclair’s Team is in action to secure the{" "}
                <span className="color_yellow">$CLAIR</span> listing on major
                exchanges. Exciting milestones ahead.
              </p>
            </div>
          </Col>
          <Col lg={6} className="col-12 d-flex justify-content-center">
            <div className="slider_box grident_radius z-1">
              <Slider className="overflow- x-hidden" {...settings}>
                <a
                  href="https://www.coinbase.com/en-gb/"
                  aria-label="sliderImg1"
                  target="_blank"
                >
                  <img
                    className="w-100 max_w_267"
                    src={sliderImg1}
                    alt="sliderImg1"
                  />
                </a>
                <a href="" aria-label="sliderImg2">
                  <img
                    className="w-100 max_w_267"
                    src={sliderImg2}
                    alt="sliderImg2"
                  />
                </a>
                <a
                  href="https://www.kucoin.com/"
                  aria-label="sliderImg3"
                  target="_blank"
                >
                  <img
                    className="w-100 max_w_267"
                    src={sliderImg3}
                    alt="sliderImg3"
                  />
                </a>
                <a href="" aria-label="sliderImg4">
                  <img
                    className="w-100 max_w_267"
                    src={sliderImg4}
                    alt="sliderImg4"
                  />
                </a>
                <a
                  href="https://uniswap.org/"
                  aria-label="sliderImg5"
                  target="_blank"
                >
                  <img
                    className="w-100 max_w_267"
                    src={sliderImg5}
                    alt="sliderImg5"
                  />
                </a>
                <a
                  href="https://www.coingecko.com/"
                  aria-label="sliderImg6"
                  target="_blank"
                >
                  <img
                    className="w-100 max_w_267"
                    src={sliderImg6}
                    alt="sliderImg6"
                  />
                </a>
              </Slider>
              <div className="d-lg-flex gap-3 mt-4 d-none">
                <div className="slider_border1"></div>
                <div className="slider_border2"></div>
                <div className="slider_border3"></div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Secure;
