import React from "react";
import { Card } from "react-bootstrap";
const Card1 = (props) => {

  const { color, id, img, type ,capacity} = props.car;
  // type, registration, 
  return (
    <Card className="my-5 mx-5">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <h5>
          <small>ID NO: {id}</small>
        </h5>
        <Card.Title>{type}</Card.Title>
        <Card.Text>Color: {color}</Card.Text>
        <Card.Text>Capacity: {capacity}</Card.Text>  
        {/* <Card.Text>Registration: {registration}</Card.Text>  */}
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
  );
};

export default Card1;
