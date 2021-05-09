import React from 'react';
import { Navbar, Nav, Form, FormControl, Button,NavDropdown } from 'react-bootstrap';  /*이거못줄이나? navbar 사용 위해서 import*/
import 'bootstrap/dist/css/bootstrap.min.css'; //navbar 꾸미기 위해서 import
import './nav.css';

function Navigation() {

  return (
    <div className="Navigation">
     <Navbar collapseOnSelect expand="xl" bg="dark" variant="dark">
        <Navbar.Brand id="navbar-brand" href="#home">Movie Homepage</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
         <Nav className="col-xl-10"> 
             <Nav.Link href="#information_review">Information&Review</Nav.Link>
             <Nav.Link href="#location">Location</Nav.Link>
             <Nav.Link href="#reservation">Reservation</Nav.Link>
         </Nav>
         <Nav>
            <Nav.Link href="#login_or_register">Login Or Register</Nav.Link>
         </Nav>
        </Navbar.Collapse>
    </Navbar>
    </div>
  );
}

export default Navigation;

/*출처 https://react-bootstrap.github.io/components/navbar/#navbars-containers */