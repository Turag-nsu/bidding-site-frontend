import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FiEdit } from 'react-icons/fi'; // Import edit icon from react-icons/fi
import { uploadImage } from '../../services/firebaseService';
import axios from 'axios';
const UserProfile = () => {
    const [user, setUser] = useState({});
    const [bids, setBids] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [updatedUser, setUpdatedUser] = useState({});
    const [updating, setUpdating] = useState(false);
    const [pageLoading, setPageLoading] = useState(true);
    const loggedInUser = JSON.parse(localStorage.getItem('bidding-site-user'));
    const userId = loggedInUser.id;
    const baseUrl = 'https://bidding-site.onrender.com/api';
    
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
    
    const handleEditClick = () => {
        setEditMode(true);
        // Initialize updatedUser with the current user data
        setUpdatedUser({ ...user });
    };

    const handleSaveClick = () => {
        setUpdating(true);
        axios.patch(`${baseUrl}/users/${userId}`, updatedUser)
            .then(response => {
                localStorage.setItem('bidding-site-user', JSON.stringify(response.data));
                setUser(response.data);
                setEditMode(false);
                setUpdating(false);
                window.location.reload();
            })
            .catch(error => console.error('Error updating user data:', error));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedUser(prevState => ({ ...prevState, [name]: value }));
    };

    return (
        <Container className="mt-4">
            <Row>
                <Col md={6}>
                    <h4>Welcome {user.name || 'User'}</h4>
                </Col>
                <Col md={6} style={{ textAlign: 'right' }}>
                    <Button variant="outline-secondary" onClick={handleEditClick}>
                        <FiEdit /> Edit Profile
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    {editMode ? (
                        <Form>
                            <Form.Group controlId="formImage">
                                <Form.Label>Profile Image:</Form.Label>
                                {updatedUser.image && (
                                    <img src={updatedUser.image} alt="User" style={styles.profilePic} />
                                )}
                                <Form.Control
                                    type="file"
                                    name="image"
                                    onChange={(e) => {
                                        const file = e.target.files[0];
                                        uploadImage(file)
                                            .then(url => setUpdatedUser({ ...updatedUser, image: url }))
                                            .catch(error => console.error('Error uploading image:', error));
                                    }}
                                />
                            </Form.Group>

                            <Form.Group controlId="formName">
                                <Form.Label>Name:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={updatedUser.name}
                                    onChange={handleInputChange}
                                    style={styles.input}
                                />
                            </Form.Group>
                            <Form.Group controlId="formEmail">
                                <Form.Label>Email:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="email"
                                    value={updatedUser.email}
                                    onChange={handleInputChange}
                                    style={styles.input}
                                />
                            </Form.Group>
                            {/* Add more form fields as needed */}
                            <Button variant="primary" onClick={handleSaveClick} disabled={updating} style={styles.saveButton}>
                                {updating ? 'Updating...' : 'Save Changes'}
                            </Button>
                        </Form>
                    ) : (
                        <div>
                            <img src={user.image} alt="User" style={styles.profilePic} />
                            <p><strong>Name:</strong> {user.name}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                        </div>
                    )}
                </Col>
            </Row>

            <h3 className="mt-4">Bids Made by User</h3>
            <Form.Group controlId="formBidFilter">
                <Form.Control as="select" style={styles.select}>
                    <option value="all">All Bids</option>
                    <option value="accepted">Accepted Bids</option>
                </Form.Control>
            </Form.Group>

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


export default UserProfile;
