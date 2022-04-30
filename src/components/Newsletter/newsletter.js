import React from 'react';
import { Card, Form, FormControl, Button } from 'react-bootstrap'
import './newsletter.css'
function Newsletter(props) {
    return (
        <div className='w-100'>
            <Card className=" text-white crd " >
                <Card.Img src="../../Newsletter.png" alt="Card image" />
                <Card.ImgOverlay className=''>

                    <div className='container overlaynews '>
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