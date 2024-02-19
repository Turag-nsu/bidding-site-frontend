import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

const CarouselImage = ({ img, title, subtitle }) => {
    return (
        <div>
            <Row>
                <Col sm={12} lg={6}>
                    <img
                        className="w-100"
                        src={img}
                        alt="First slide"
                        style={{
                            // padding: '1rem',
                            margin: '1rem',
                            borderRadius: "10px",
                            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)"
                        }}
                    />
                </Col>
                <Col sm={12} lg={6}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                        }}
                    >
                        <h1 style={{
                            fontSize: "3em",
                            fontWeight: "bold",
                            color: "black"
                        }}>{title}</h1>
                        <p>{subtitle}</p>
                    </div>
                </Col>
            </Row>
        </div>
    );
}


export default CarouselImage;
