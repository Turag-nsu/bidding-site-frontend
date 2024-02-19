import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const OtherUserProfile = () => {
    const [user, setUser] = useState({});
    const [bids, setBids] = useState([]);
    const [pageLoading, setPageLoading] = useState(true);
    const baseUrl = 'https://bidding-site.onrender.com/api';
    const userId  = useParams().userId;
    console.log(userId);
    useEffect(() => {
        // Fetch user data
        axios.get(`${baseUrl}/users/${userId}`)
            .then(response => setUser(response.data))
            .catch(error => console.error('Error fetching user data:', error));

        // Fetch bids made by the user
        axios.get(`${baseUrl}/bids?userId=${userId}`)
            .then(response => setBids(response.data))
            .catch(error => console.error('Error fetching bids:', error));
        setPageLoading(false);
    }, [userId]);
    
    return (
        <Container className="mt-4">
            <Row>
                <Col md={6}>
                    <h4>User Profile</h4>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <div>
                        <img src={user.image} alt="User" style={styles.profilePic} />
                        <p><strong>Name:</strong> {user.name}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                    </div>
                </Col>
            </Row>

            <h3 className="mt-4">Bids Made by User</h3>

            <ul>
                {bids.map(bid => (
                    <li key={bid.id}>
                        <strong>Bid Amount:</strong> {bid.price}
                        {/* Display other bid information */}
                    </li>
                ))}
            </ul>
        </Container>
    );
};

const styles = {
    container: {
        marginTop: '50px',
    },
    profilePic: {
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        marginBottom: '20px',
    },
    input: {
        marginBottom: '15px',
        width: '100%',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        boxSizing: 'border-box',
    },
    saveButton: {
        marginTop: '20px',
        padding: '10px 20px',
        borderRadius: '5px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
    saveButtonDisabled: {
        backgroundColor: '#ccc',
        cursor: 'not-allowed',
    },
    select: {
        width: '100%',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        boxSizing: 'border-box',
    },
    bidList: {
        listStyle: 'none',
        padding: 0,
    },
    bidListItem: {
        marginBottom: '10px',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        backgroundColor: '#f9f9f9',
    },
};
export default OtherUserProfile;
