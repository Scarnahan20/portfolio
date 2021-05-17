import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Navigation() {
    return(
          <Navbar bg="light" expand='xl' >
            <Navbar.Brand>Stefan Carnahan</Navbar.Brand>
            <Nav.Link href="/">About</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Navbar>
    );
}

export default Navigation;