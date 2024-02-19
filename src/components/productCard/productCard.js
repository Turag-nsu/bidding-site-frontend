import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
const ProductCard=({id, title, body, image, price, uploader })=> {
    // console.log(image);
  return (
    <Card style={{ 
      borderRadius: "10px",
      padding: "10px",
      boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
      margin: "1rem",
      width: '18rem' }}>
      <Card.Img 
      variant="top" 
      src={image} 
      style={{
        height: "200px",
        objectFit: "cover",
        borderRadius: "10px",
        marginBottom: "10px",
      }}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {/* keep 300 charecter */}
          {body.length > 300 ? body.substring(0, 300) + "..." : body}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Price: {price}</ListGroup.Item>
        {/* <ListGroup.Item>Uploader: {uploader}</ListGroup.Item> */}
      </ListGroup>
      <Card.Body>
        <Link to={`/products/${id}`} className="btn btn-primary">View</Link>
        {/* <Button
         variant="success"
         >Bid</Button> */}
      </Card.Body>
    </Card>
  );
}

export default ProductCard;