import React, { useState } from 'react';
import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faGem } from '@fortawesome/free-solid-svg-icons';
import { uploadImage } from '../../services/firebaseService';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PostProduct = () => {
  const user = JSON.parse(localStorage.getItem('bidding-site-user'));

  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: 0,
    image: '', // Updated to hold the image URL
    category: 'electronics', // Default category
    quantity: 1,
    sold: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    bids: [],
    uploader: user.id,
  });
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();
  const categories = ['electronics', 'books', 'vehicles', 'clothing', 'other'];

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUploading(true);
    axios.post('https://bidding-site.onrender.com/api/products', product)
      .then(response => {
        console.log(response.data);
        alert('Product posted successfully!');
        navigate('/products');
      })
      .catch(error => {
        console.error('Error posting product:', error);
        alert('Error posting product!');
      });
  };

  return (
    <Container className="post-product-container">
      <Row>
        <Col xs={12} md={6}>
          <h2 className="mb-4">Post Your Product</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Product Name</Form.Label>
              <Form.Control type="text" name="name" value={product.name} onChange={handleChange} required />
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} name="description" value={product.description} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="price">
              <Form.Label>Starting Bid (BDT)</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text>৳</InputGroup.Text>
                <Form.Control type="number" name="price" value={product.price} onChange={handleChange} required />
              </InputGroup>
            </Form.Group>

            {product.image && (
              <div className="mb-3">
                <img
                 src={product.image} alt="Product" style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '5px' }} />
              </div>
            )}
            <Form.Group controlId="image">
              <Form.Label>Product Image</Form.Label>
              <Form.Control
                type="file"
                name="image"
                onChange={(e) => {
                  const file = e.target.files[0];
                  uploadImage(file)
                    .then(url => setProduct({ ...product, image: url }))
                    .catch(error => console.error('Error uploading image:', error));
                }}
              />
            </Form.Group>

            <Form.Group controlId="category">
              <Form.Label>Category</Form.Label>
              <Form.Select name="category" value={product.category} onChange={handleChange}>
                {categories.map((category, index) => (
                  <option key={index} value={category}>{category.charAt(0).toUpperCase() + category.slice(1)}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="quantity">
              <Form.Label>Quantity (Available)</Form.Label>
              <Form.Control type="number" name="quantity" value={product.quantity} onChange={handleChange} min={1} required />
            </Form.Group>

            <Button 
              disabled={uploading}
              variant="primary" 
              type="submit">
                {uploading ? 'Posting...' : 'Post Product'} <FontAwesomeIcon icon={faGem} className="ml-2" />
            </Button>
          </Form>
        </Col>
        {/* Second column with background image */}
        <Col xs={12} md={6} style={{ backgroundImage: `url('background-image.jpg')`, backgroundSize: 'cover' }}>
          <h3 className="text-white text-center mt-5">Showcase Your Product!</h3>
          <p className="text-white text-center">Add compelling images and descriptions to attract potential bidders.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default PostProduct;
