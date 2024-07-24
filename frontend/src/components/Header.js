import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" collapseOnSelecet>
      <Container fluid>
        <Navbar.Brand href="#">Parts Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-aut"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/cart"><i className='fas fa-shopping-cart' ></i> Cart</Nav.Link>
            <Nav.Link href="/login"><i className='fas fa-user' ></i> Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;