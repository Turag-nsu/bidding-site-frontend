import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import aboutImg from '../../Images/about-us.png';

const AboutUs = () => {
  return (
    <Container className="mt-5">
      <Row className="align-items-center">
        <Col md={6}>
          {/* Your About Us content goes here */}
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            non enim sed justo gravida vestibulum. Proin id condimentum sem.
          </p>
          {/* Contact Us Button */}
          <Button variant="primary" className="mt-3">
            Contact Us
          </Button>
          {/* Social Media Icons */}
          <div className="mt-4">
            <FaFacebook size={30} className="mr-6 text-primary" />
            <FaInstagram size={30} className="mr-6 text-danger" />
            <FaWhatsapp size={30} className="text-success" />
          </div>
        </Col>
        <Col md={6} className="text-center">
          {/* Image */}
          <img
            src={aboutImg}
            alt="About Us"
            className="img-fluid rounded"
            style={{ filter: 'brightness(80%)', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
