import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Navigation() {
    return(
        <Container fluid>
          <Navbar bg="light" expand='lg'>
            <Navbar.Brand>Stefan Carnahan</Navbar.Brand>
            <Nav.Link href="/">About</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Navbar>
        </Container>
    );
}

export default Navigation;