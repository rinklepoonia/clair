import React from 'react'
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

function AccordianSection() {
    return (
        <div className='acc_bg_img bg_cover bg_center mt_45 accordianSection_padding'>
        <Container>
            <h3 className='ff_manrope font-semibold text48_2xl lh_md_57 lh_36 color_white text-center mb-lg-5 mb-4 pb-xl-3 pb-0'>Frequently Asked <span className='color_yellow'>Questions</span></h3>
            <Accordion defaultActiveKey="0" className='max_w_800 mx-auto'>
                    <Accordion.Item data-aos="flip-up" eventKey="0" className='mb-4 p_12'>
                    <Accordion.Header className='ff_manrope text16_sm fw-semibold lh_24'>WHAT IS $CLAIR?</Accordion.Header>
                        <Accordion.Body className='mt-2 pt-1 ff_manrope fw-normal text16_sm lh_24 color_lightGrey max_w_510'>
                        Built on the Ethereum blockchain and powered by the most advanced
                        AI technology, Baby Sinclair has the potential to make millions.
                    </Accordion.Body>
                </Accordion.Item>
                    <Accordion.Item data-aos="flip-up" eventKey="1" className='mb-4 p_12'>
                    <Accordion.Header className='ff_manrope text16_sm fw-semibold lh_24'>Arcu in pellentesque sit odio.</Accordion.Header>
                        <Accordion.Body className='mt-2 pt-1 ff_manrope fw-normal text16_sm lh_24 color_lightGrey max_w_510'>
                        Built on the Ethereum blockchain and powered by the most advanced
                        AI technology, Baby Sinclair has the potential to make millions.
                    </Accordion.Body>
                </Accordion.Item>
                    <Accordion.Item data-aos="flip-up" eventKey="2" className='mb-4 p_12'>
                    <Accordion.Header className='ff_manrope text16_sm fw-semibold lh_24'>Lorem gravida feugiat aliquet arcu porttitor sodales tellus habitant sed.</Accordion.Header>
                        <Accordion.Body className='mt-2 pt-1 ff_manrope fw-normal text16_sm lh_24 color_lightGrey max_w_510'>
                        Built on the Ethereum blockchain and powered by the most advanced
                        AI technology, Baby Sinclair has the potential to make millions.
                    </Accordion.Body>
                </Accordion.Item>
                    <Accordion.Item data-aos="flip-up" eventKey="3" className='mb-4 p_12'>
                    <Accordion.Header className='mb-2 pb-1 ff_manrope text16_sm fw-semibold lh_24'>Metus augue dictumst sit amet.</Accordion.Header>
                    <Accordion.Body className='ff_manrope fw-normal text16_sm lh_24 color_lightGrey max_w_510'>
                        Built on the Ethereum blockchain and powered by the most advanced
                        AI technology, Baby Sinclair has the potential to make millions.
                    </Accordion.Body>
                </Accordion.Item>
                    <Accordion.Item data-aos="flip-up" eventKey="4" className='mb-4 p_12'>
                    <Accordion.Header className='ff_manrope text16_sm fw-semibold lh_24'>Elementum viverra tellus tincidunt nunc odio at id ipsum.</Accordion.Header>
                        <Accordion.Body className='mt-2 pt-1 ff_manrope fw-normal text16_sm lh_24 color_lightGrey max_w_510'>
                        Built on the Ethereum blockchain and powered by the most advanced
                        AI technology, Baby Sinclair has the potential to make millions.
                    </Accordion.Body>
                </Accordion.Item>
                    <Accordion.Item data-aos="flip-up" eventKey="5" className='mb-4 p_12'>
                    <Accordion.Header className='ff_manrope text16_sm fw-semibold lh_24'>Sagittis morbi aliquam facilisis ornare lacus tempus massa.</Accordion.Header>
                        <Accordion.Body className='mt-2 pt-1 ff_manrope fw-normal text16_sm lh_24 color_lightGrey max_w_510'>
                        Built on the Ethereum blockchain and powered by the most advanced
                        AI technology, Baby Sinclair has the potential to make millions.
                    </Accordion.Body>
                </Accordion.Item>
                    <Accordion.Item data-aos="flip-up" eventKey="6" className='mb-4 p_12'>
                    <Accordion.Header className='ff_manrope text16_sm fw-semibold lh_24'>Elementum at dui varius consequat fringilla.</Accordion.Header>
                        <Accordion.Body className='mt-2 pt-1 ff_manrope fw-normal text16_sm lh_24 color_lightGrey max_w_510'>
                        Built on the Ethereum blockchain and powered by the most advanced
                        AI technology, Baby Sinclair has the potential to make millions.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            </Container>
        </div>
    );
}

export default AccordianSection;