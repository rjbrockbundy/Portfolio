import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Toolbar from './Toolbar';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import About from './About.js'
import Project from './Projects';
import Contact from './Contact';
import { Container } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';

function FullPage() {
    return (
        <div>
            <App />
            <Toolbar />

            <Container fluid style={{ backgroundColor: 'black', zIndex: -1 }}>

                <About id="about" />
                <Project id="projects" />
                <Contact id="contact" />

            </Container>
        </div>
    )
}
export default FullPage;
