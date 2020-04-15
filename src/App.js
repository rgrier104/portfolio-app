import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <Router>
      <Container fluid>
        <Navigation />
        <Home />
      </Container>
    </Router>
    
  );
}

export default App;
