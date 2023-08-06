import React, { useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Footer() {

    return (
        <Navbar fixed="bottom" collapseOnSelect bg="primary" variant="dark" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-end" style={{ width: "100%" }}>

            <Nav.Link 
            href="https://github.com/hinnenk2"
            target="_blank"
            >GitHub
            </Nav.Link>
            <Nav.Link 
            href="https://www.linkedin.com/in/ian-hinnenkamp-4a1a2398/"
            target="_blank"
            >Linkedin
            </Nav.Link>
            <Nav.Link 
            href="mailto:ianhinnenkamp@gmail.com"
            >ianhinnenkamp@gmail.com
            </Nav.Link>
  
        </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default Footer;