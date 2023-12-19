import React from 'react';
import { Container, Row, Nav, Navbar, NavDropdown, Col } from 'react-bootstrap';

function UserHeader() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Row>
          <Col lg={2}>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          </Col>
          <Col lg={10}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">About Me</Nav.Link>
                <Nav.Link href="#link">Services</Nav.Link>
                <Nav.Link href="#link">Portfolio</Nav.Link>
                <NavDropdown title="Blog" id="blog-drop-down">
                  <NavDropdown.Item href="#action/3.1">
                    Blog
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Blog detail
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#link">Contact</Nav.Link>
                <Nav.Link href="#link">Hire Me</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default UserHeader;