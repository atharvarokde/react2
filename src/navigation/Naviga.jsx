import Card from 'react-bootstrap/Card';
 import Col from 'react-bootstrap/Col';
 import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import Service from '../pages/Service.jsx';
import Contact from '../pages/Contact.jsx';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function ColorSchemesExample() {
    return (
        <Router>
            <>
                <Navbar bg="dark" data-bs-theme="dark">
                    <Container>
                        <Navbar.Brand as={Link} to="/">My Logo</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/service">Service</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/service" element={<Service />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
        </Router>
    );
}

export default ColorSchemesExample;

