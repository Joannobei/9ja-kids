import React from 'react';
import {
    Navbar, Container, Offcanvas,
    NavDropdown, Form, Button,
    FormControl, Nav,
} from 'react-bootstrap';

function Navigation() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 d-flex justify-content-end"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Link</Nav.Link>


                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}
export default Navigation;