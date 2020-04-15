import React from 'react';
import Profile from '../Profile_Picture.JPG';
import { Container, Row, Col, Image } from 'react-bootstrap';

const Home = () => {

    return (
        <Container className="mt-5">
            <Row>
                <Col xs={{ span: 4, offset: 2 }}>
                    <Image src={Profile} fluid />
                </Col>
                <Col xs={4}>
                    <h1>Hi! I'm Rachel.</h1>
                    <h4>Software Engineer</h4>
                    <p>JavaScript | React | Ruby on Rails </p>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;