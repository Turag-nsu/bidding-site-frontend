import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaShoppingBag, FaHeadset } from 'react-icons/fa';

const ServiceArea = () => {
    const serviceStyle = {
        background: '#f8f9fa',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
    };

    const iconStyle = {
        fontSize: '50px',
        color: '#007bff',
    };

    return (
        <Container className="mt-5">

            <Row className="justify-content-center"
                style={{
                    backgroundColor: 'lightgray',
                    padding: "1rem",
                    borderRadius: "10px",
                    margin: "0.5rem",
                }}
            >
                <Col md={4} className="mb-4">
                    <h2 className="text-center mb-4"
                        style={{
                            fontSize: '2.5rem',
                            fontWeight: 'bold',
                            backgroundColor: 'lightgray',
                            padding: '10px',
                            borderRadius: '10px',
                            boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >Our Services</h2>
                </Col>
                <Col md={4} className="mb-4">
                    <div style={serviceStyle}>
                        <FaShoppingBag style={iconStyle} />
                        <h4 className="mt-3">Bid a Product</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non enim sed justo gravida vestibulum.
                        </p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </Col>
                <Col md={4} className="mb-4">
                    <div style={serviceStyle}>
                        <FaHeadset style={iconStyle} />
                        <h4 className="mt-3">Customer Support</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non enim sed justo gravida vestibulum.
                        </p>
                        <button className="btn btn-primary">Contact Us</button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ServiceArea;
