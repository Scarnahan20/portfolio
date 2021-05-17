import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Profile from '../profile-image.jpg';
import SDSU from '../sdsu.jpg';

function About(props) {
    return (
        <Container fluid>
            <Container className='section'>
                <h1>About</h1>
                <Row>
                    <Col>
                        <Image className="profile" src={Profile} roundedCircle />
                    </Col>
                </Row>
            </Container>
            <Container className='section'>
                <Card>
                    <Card.Body>
                        <Card.Title>Software Developer</Card.Title>
                        <Card.Text>I am a recent San Diego State University graduate looking for opportunities in my local San Diego area.</Card.Text>
                    </Card.Body>
                </Card>
            </Container>
            <Container className='section'>
                <h2>Education</h2>
                <Row>
                    <Col>
                        <Card>
                            <Card.Img className='SDSUImage' src={SDSU} alt='SDSU' />
                            <Card.ImgOverlay>
                                <Card.Title>San Diego State University</Card.Title>
                                <Card.Subtitle>Bachelor of Science, Computer Science</Card.Subtitle>
                                <Card.Text>Graduated May 2020</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Title>Udemy</Card.Title>
                            <Card.Subtitle>The Complete 2020 Web Development Bootcamp</Card.Subtitle>
                            <Card.Title>Certificate earned August 2020</Card.Title>
                        </Card>
                    </Col>
                </Row>
            </Container>




        </Container>
    )
}

export default About;