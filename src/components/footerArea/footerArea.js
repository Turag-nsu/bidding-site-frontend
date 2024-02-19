import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const FooterArea = () => {
  const footerStyle = {
    background: '#343a40',
    color: 'white',
    padding: '20px 0',
    marginTop: '50px',
  };

  return (
    <div style={footerStyle}>
      <Container>
        <Row>
          <Col md={6}>
            <h4>About Us</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non enim sed justo gravida vestibulum.
            </p>
          </Col>
          <Col md={6}>
            <h4>Contact Information</h4>
            <p>Email: info@example.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </Col>
        </Row>
        <hr style={{ borderTop: '1px solid white', margin: '20px 0' }} />
        <p className="text-center">&copy; 2024 Your Company</p>
      </Container>
    </div>
  );
};

export default FooterArea;
