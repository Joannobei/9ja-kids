import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './footer.css';

function Footer(props) {
    return (
        <div>


            <Container fluid className='footer   py-5 ps-5 position-relative' >

                <Row className="row text-white">
                    <Col className="mb-3 " xs={12} md={3} lg={3}>

                        <div>
                            <h3 className=" font-weight-bold mb-4 text-uppercase"> 9JAKIDS</h3>

                            <p> <FontAwesomeIcon className="" icon={faInstagram}></FontAwesomeIcon> 9jakids</p>
                            <p><FontAwesomeIcon className="" icon={faTwitter}></FontAwesomeIcon> 9jakids@test.com</p>
                            <p><FontAwesomeIcon className="" icon={faFacebook}></FontAwesomeIcon>phone 9jakids</p>

                        </div >
                    </Col>

                    <Col className="mb-3 " xs={12} md={3} lg={3} >
                        <div>
                            <h3 className=" font-weight-bold mb-4 text-uppercase">Community</h3>

                            <p> Learners</p>
                            <p>Patners </p>
                            <p> Developers</p>
                            <p> Beta Testers</p>
                            <p>Translators </p>


                        </div>
                    </Col>

                    <Col className="mb-3 " xs={12} md={3} lg={3}>
                        <div>
                            <h3 className=" font-weight-bold mb-4 text-uppercase">Information</h3>

                            <p>About </p>
                            <p>Pricing </p>
                            <p>Blog </p>
                            <p>Contact </p>

                        </div>
                    </Col>
                    <Col className="mb-3 " xs={12} md={3} lg={3} >
                        <div>
                            <h3 className=" font-weight-bold mb-4 text-uppercase">Hours</h3>

                            <p> Directory</p>
                            <p> Pricing</p>
                            <p> Terms</p>
                            <p> Investord</p>
                            <p> Press</p>
                            <p> Help</p>
                            <p> Accessibility</p>

                        </div>
                    </Col>

                </Row>

                <Container className='d-flex yfooter position-absolute bottom-0 start-50 translate-middle-x'>
                    <div className='d-flex me-auto'>
                        <p className='mx-2'>test</p>
                        <p className='mx-2'>test</p>
                        <p className='mx-2'>test</p>
                    </div>

                    <div className='d-flex justify-content-end'>
                        <div className='d-flex '>
                            <FontAwesomeIcon className="mx-2" icon={faInstagram}></FontAwesomeIcon>
                            <FontAwesomeIcon className=" mx-2" icon={faTwitter}></FontAwesomeIcon>
                            <FontAwesomeIcon className=" mx-2" icon={faFacebook}></FontAwesomeIcon>

                        </div>
                    </div>

                </Container>
            </Container >



        </div>
    );
}

export default Footer;