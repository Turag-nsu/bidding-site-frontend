import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
const CustomNavbar = () => {
  const user = JSON.parse(localStorage.getItem('bidding-site-user'));

  const logout = () => {
    localStorage.removeItem('bidding-site-user');
    window.location.reload();
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">Bid-On</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
          </Nav>
          {user ? (
            <NavDropdown title={<Image src={user.image} roundedCircle style={{ width: '30px', height: '30px' }} />} id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to='/profile'>View Profile</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/post-product'>Add Product</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/my-products'>My Products</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/my-bids'>My Bids</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
            </NavDropdown>
          ) : (
            <Button href="/login" variant="outline-success">Login</Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
