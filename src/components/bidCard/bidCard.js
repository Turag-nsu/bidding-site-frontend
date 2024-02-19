import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import BidderProfile from './bidderProfile';
import axios from 'axios';

const BidCard = ({ bidderId, productId, userId, bidAmount, createdAt }) => {
  const [bidder, setBidder] = useState({});
  const [editable, setEditable] = useState(false);
  const [updatedBidAmount, setUpdatedBidAmount] = useState(bidAmount);
  const baseUrl = 'https://bidding-site.onrender.com/api';
  const loggedInUserId = JSON.parse(localStorage.getItem('bidding-site-user')).id;

  useEffect(() => {
    // Fetch bidder data
    axios.get(`${baseUrl}/users/${bidderId}`)
      .then(response => setBidder(response.data))
      .catch(error => console.error('Error fetching bidder data:', error));
  }, [bidderId]);

  const handleEditClick = () => {
    setEditable(true);
  };

  const handleSaveClick = () => {
    // Make API call to update bid amount
    // For example:
    // axios.patch(`${baseUrl}/bids/${bidId}`, { bidAmount: updatedBidAmount })
    //   .then(response => {
    //     // Handle successful update
    //   })
    //   .catch(error => {
    //     // Handle error
    //   });
    setEditable(false);
  };

  const handleChange = (e) => {
    setUpdatedBidAmount(e.target.value);
  };

  return (
    <Card className="text-center">
      <Card.Header>
        <BidderProfile
          id={bidderId}
          name={bidder.name}
          image={bidder.image}
        />
      </Card.Header>
      <Card.Body>
        <Card.Title>Product: {productId}</Card.Title>
        {editable ? (
          <input
            type="number"
            value={updatedBidAmount}
            onChange={handleChange}
          />
        ) : (
          <Card.Text>
            Bid: {bidAmount}
          </Card.Text>
        )}
        <Card.Text>
          Created At: {createdAt}
        </Card.Text>
        {userId === bidderId && (
          editable ? (
            <Button variant="primary" onClick={handleSaveClick}>Save</Button>
          ) : (
            <Button variant="secondary" onClick={handleEditClick}>Edit</Button>
          )
        )}
      </Card.Body>
    </Card>
  );
};

export default BidCard;
