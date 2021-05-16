import React from "react";
import Container from "react-bootstrap/Container";

function About(props) {
    return (
        <Container fluid>
            <h1>About</h1>
            <img className='profile' src='/images/profile-image.jpg' alt='profile' />
        </Container>
    )
}

export default About;