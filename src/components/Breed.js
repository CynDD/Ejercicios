import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Card,  ListGroup, ListGroupItem } from "react-bootstrap";


function Breed  ({ breed })  {

    const [image, setImage] = useState();
    useEffect(() => {
        async function fetchBreedImg() {      
            const response = await Axios.get(
            `https://dog.ceo/api/breed/${breed[0]}/images/random`
            );    
            const json = await response.data;  
            console.log(json);   
            setImage(json.message);   
        }
        fetchBreedImg();
    }, );

  return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
            <Card.Link key={breed[0]} href="/signup">
                <strong>{breed[0]}</strong>
            </Card.Link>    
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroupItem>{breed[1].join(' , ')}</ListGroupItem>
        </ListGroup>
    </Card>
  );
};

export default Breed;
