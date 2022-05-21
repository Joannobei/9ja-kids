import React from 'react';
import { Button, Card, Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './banner.css';

function Banner() {
    return (
        <div className=''>
            <Card className=" text-white crd " >
                <Card.Img className=' overlay-img' src="../../Top Banner.png" alt="Card image" />
                <Card.ImgOverlay className=' overlay container'>


                    <p>Learning is Fun</p>
                    <h1> Learn New Skills Online <br /> Find Best Course. </h1>
                    <Card.Text className='banner-text d-flex justify-content'>
                        <Button className='button ' variant="secondary">Register</Button>{' '}
                        <Button className='ms-3 button ' variant="outline-secondary">Login</Button>{' '}
                    </Card.Text>



                </Card.ImgOverlay>

            </Card>
            <img fluid className='timer ' src='../../../Timer.png' />
        </div >
    )
}

export default Banner;