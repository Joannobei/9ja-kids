import { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const CardList = ({ monsters }) => {

    const Crd = (

        monsters.map((monster) => (
            <Col >
                <div key={monster.GameImage} className="card mt-3" style={{ width: 20 + 'rem' }} >
                    <img src={monster.GameImage} className="card-img-top" alt="..." />
                    <div className="card-body" >
                        <h5 className='card-title'>{monster.GameTitle}</h5>
                        <p className="card-text"> {monster.GameDescription}</p>
                    </div>
                </div>
            </Col>
        )));


    return (


        <Container>
            <Row>

                {Crd}

            </Row>
        </Container>


        // </div >
    )

}

export default CardList; 