import React from 'react';
import { Card, Form, FormControl, Button, Row, Col, Container } from 'react-bootstrap'
import './newsletter.css'
function Newsletter(props) {
    return (
        <div className=''>
            <Card className=" text-white crd " >
                <Card.Img src="../../Newsletter.png" alt="Card image" />
                <Card.ImgOverlay className=''>


                    <div className=' overlaynews ms-auto pe-5 py-5'  >
                        <p>Subscribe now</p>
                        <h1> Be in the know...</h1>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className=" subform me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-secondary">Search</Button>
                        </Form>
                    </div>
                </Card.ImgOverlay>
            </Card>

        </div >
    );
}

export default Newsletter;