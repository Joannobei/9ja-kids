import React from 'react';
import {
    Navbar, Container, Offcanvas,
    NavDropdown, Form, Button,
    FormControl, Nav,
} from 'react-bootstrap';
import './nav.css';

function Navigation() {
    return (
        <div>
            <Navbar className='p-3 navv bg-light rounded-3' expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">9JAKIDS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto  d-flex "
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Link</Nav.Link>
                            <Nav.Link href="#action2">About Us</Nav.Link>
                            <Nav.Link href="#action2">Contact</Nav.Link>


                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}
export default Navigation;