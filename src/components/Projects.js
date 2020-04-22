import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Traveller from '../Traveller-Screenshot.png';

const Projects = () => {
    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    <h2>Traveller App</h2>
                </Col>
                <Col>
                    <Image src={Traveller} fluid />
                </Col>
            </Row>
        </Container>
    )
}

export default Projects;