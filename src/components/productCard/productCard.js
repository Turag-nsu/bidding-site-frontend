import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const ProductCard=({title, body, image, price, uploader })=> {
    console.log(image);
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>
            {title}
        </Card.Title>
        <Card.Text>
            {body}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
            Starting bid: {price}
        </ListGroup.Item>
        <ListGroup.Item>
            Uploaded by: {uploader}
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Save to cart</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;