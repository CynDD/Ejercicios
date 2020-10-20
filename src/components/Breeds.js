import React, { useEffect, useState }  from "react";
import axios from 'axios';
import Breed from "./Breed";
import ListGroup from 'react-bootstrap/ListGroup'


function Breeds()  {

  const [breeds, setBreeds] = useState([]);
  useEffect(() => {
      async function fetchBreeds() {      
          const response = await axios.get(
            `https://dog.ceo/api/breeds/list/all`
          );    
          const json = await response.data;  
          
          setBreeds(json.message);   
      }
      fetchBreeds();
    }, []);

     
    
  
  return (
    <div>
      <ListGroup key="#">
      <ListGroup.Item action href="#">
      {Object.entries(breeds).map((breed) => (
            <Breed key={breed.key} breed={breed} />
          ))}
      </ListGroup.Item>
      </ListGroup>
      
    </div>
  );
}

export default Breeds;
