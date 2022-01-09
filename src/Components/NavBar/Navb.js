import React from 'react'
import {Link} from "react-router-dom"
import { Navbar, Nav, Container,NavDropdown, Offcanvas} from 'react-bootstrap';
const Navb = () => {
    return (
      <Navbar bg='light' expand={false}>
  <Container fluid>
    <Navbar.Brand style={{fontWeight:'bolder'}} href="#">NASA OBSERVER</Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
      
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">NASA OBSERVER</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          
          <Nav.Link href='/about'>About</Nav.Link>

          <NavDropdown title="Events Category" id="offcanvasNavbarDropdown">
            <NavDropdown.Item href="/wildfire">Wild Fire</NavDropdown.Item>
            <NavDropdown.Item href="#action4">coming soon...</NavDropdown.Item>
            
           
          </NavDropdown>
        </Nav>
       
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
    )
}

export default Navb
