import React, { useState, useEffect } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import styled from 'styled-components';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import BidCard from '../components/bidCard/bidCard';

// Styled components
const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
`;

const BidButton = styled(Button)`
  background-color: #4caf50;
  color: #fff;

  &:hover {
    background-color: #45a049;
  }
`;

const BidInput = styled(Form.Control)`
  margin-top: 16px;
`;

const SingleProductPage = () => {
  const productId = useParams().productId;
  const [product, setProduct] = useState({});
  const [bids, setBids] = useState([]);
  const [bidAmount, setBidAmount] = useState('');
  const baseUrl = 'https://bidding-site.onrender.com/api';
  const user = JSON.parse(localStorage.getItem('bidding-site-user'));
  useEffect(() => {
    // Fetch product data
    axios.get(`${baseUrl}/products/${productId}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error('Error fetching product data:', error));

    // Fetch bids for the product
    axios.get(`${baseUrl}/bids?productId=${productId}`)
      .then(response => setBids(response.data))
      .catch(error => console.error('Error fetching bids:', error));

    //fetch uploader data

  }, [productId]);
  if (product.uploader) {
    //if product.uploader is an object then return
    if (typeof product.uploader !== 'object') {
      axios.get(`${baseUrl}/users/${product.uploader}`)
      // .then(response => setProduct(...product, {uploader: response.data}))
      .then(response => setProduct({ ...product, uploader: response.data }))
      .catch(error => console.error('Error fetching uploader data:', error));
    }
    
    // console.log(product.uploader);
  }
  const handleBidClick = () => {
    // confirm if the user want to bid this
    if (window.confirm(`Are you sure you want to place a bid of $${bidAmount} for this product?`)) {
      // Send bid to the server
      axios.post(`${baseUrl}/bids`, {
        price: bidAmount,
        productId: productId,
        bidderId: user.id,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      })
        .then(response => {
          // Update the bids state
          setBids([...bids, response.data]);
          // reload the page
          window.location.reload();
        })
        .catch(error => console.error('Error placing bid:', error));
    }
  };

  return (

    <Container className="mt-4">
      <Helmet>
        <title>{product.name}</title>
      </Helmet>
      <h4>
        {product.name}
      </h4>
      <div className="row">
        <div className="col-md-6">
          <ProductImage
            src={product.image}
            alt={product.name}
          />
        </div>
        <div className="col-md-6">
          {product.uploader && (
            <p className="mb-2">
              <strong>Uploader:</strong> <Link to={`/profile/${product.uploader?.id}`}>{product.uploader.name}</Link>
            </p>
          )}
          <p className="mb-2">
            <strong>Description:</strong> {product.description}
          </p>
          <p className="mb-2">
            <strong>Price:</strong> ${product.price}
          </p>
          <p className="mb-2">
            <strong>Category:</strong> {product.category}
          </p>
          <p className="mb-2">
            <strong>Quantity:</strong> {product.quantity}
          </p>
          {!product.sold && product.uploader !==user.id && (
            <>
              <BidInput
                type="number"
                placeholder="Enter Bid Amount"
                className="mb-2"
                value={bidAmount}
                onChange={(e) => setBidAmount(e.target.value)}
              />
              <BidButton
                variant="success"
                onClick={handleBidClick}
                className="mt-2"
              >
                Place Bid
              </BidButton>
            </>
          )}
        </div>
      </div>

      <h5 className="mt-4">
        Bids for this Product
      </h5>
      <ul>
        {bids.map(bid => (
          <li key={bid.id}>
            <BidCard
              bidderId={bid.bidderId}
              productId={bid.productId}
              bidAmount={bid.price}
              createdAt={bid.createdAt}
              userId={user?.id}
            />
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default SingleProductPage;
