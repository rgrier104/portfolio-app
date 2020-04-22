import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <Router>
      <Container fluid>
        <Navigation />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/" component={Home} />
      </Container>
    </Router>
    
  );
}

export default App;
