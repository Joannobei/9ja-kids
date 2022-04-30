import React from 'react';
import { Card, Form, FormControl, Button } from 'react-bootstrap'

function Newsletter(props) {
    return (
        <div className='w-100'>
            <Card className=" text-white crd " >
                <Card.Img src="../../Newsletter.png" alt="Card image" />
                <Card.ImgOverlay className=' overlay container '>
                    <div className='subsform position-absolute top-50 start-50 translate-middle' style={{ width: 30 + 'rem' }}>
                        <p>Subscribe now</p>
                        <h1> Be in the know...</h1>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
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