import Axios from "axios";
import React, { useState } from "react";
import { Card,  ListGroup, ListGroupItem } from "react-bootstrap";


function Breed  ({ breed })  {

    const [image, setImage] = useState();
    const [imageView, setImageView] = useState(false);
    

    const fetchBreedImg =  async() =>{      
        const response = await Axios.get(
        `https://dog.ceo/api/breed/${breed[0]}/images/random`
        );    
        const json = await response.data;  
        setImage(json.message); 
        
        setImageView(true);  
    }

  return (
    <Card style={{ width: '18rem' }}>
        {imageView ? (
            <Card.Img variant="top" src={image} />
        ): (
            <Card.Img variant="top"/>
            )}
        <Card.Body>
            <Card.Link key={breed[0]} onClick={fetchBreedImg}>
                <strong>{breed[0]}</strong>
            </Card.Link>    
        </Card.Body>
        {breed[1] != null ? 
            <ListGroup className="list-group-flush">
                <ListGroupItem>{breed[1].join(' , ')}</ListGroupItem>
            </ListGroup>
        :(<ListGroup/>)}
        
    </Card>
  );
};

export default Breed;
