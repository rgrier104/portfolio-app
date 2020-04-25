import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Traveller from '../Traveller-Screenshot.png';
import MealPlan from '../mealPlannerScreenshot.png';

const Projects = () => {
    return (
        <Container className="mt-5">
            <Row>
                <Col xs={7}>
                    <h2>Traveller App</h2>
                    <p>An application that enables travellers to store and organize travel destination recommendations (hotel, restaurant, activity, etc.)</p>
                    <ul>
                        <li>Developed React/Redux frontend connected to Ruby on Rails backend API to create a dynamic and efficient user experience </li>
                        <li>Utilized Redux library to control state and Thunk middleware to enable asynchronous actions to communicate with server</li>
                        <li>Incorporated client-side routing using react-router and RESTful routes to allow for easy navigation through logical url paths</li>
                    </ul>
                </Col>
                <Col xs={5}>
                    <Image src={Traveller} fluid />
                </Col>
            </Row>
            <Row className="mt-3">
                <Col xs={5}>
                    <Image src={MealPlan} fluid />
                </Col>
                <Col xs={7}>
                    <h2>Meal Planner App</h2>
                    <p>A single page application that takes the stress out of weekly meal planning by enabling users to easily plan and organize recipes</p>
                    <ul>
                        <li>Developed a backend API using Ruby on Rails with a Postgres database applying MVC and RESTful conventions</li>
                        <li>Implemented a Javascript, HTML, and CSS frontend that employs AJAX calls for effective client-server communication</li>
                        <li>Translated JSON responses to Javascript model objects and built out methods on the model object prototype</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default Projects;