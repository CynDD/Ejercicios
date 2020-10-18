import React, { useEffect, useState }  from "react";
import axios from 'axios';
import Breed from "./Breed";


function Breeds()  {

  const [breeds, setBreeds] = useState([]);
  useEffect(() => {
      async function fetchBreeds() {      
          const response = await axios.get(
            `https://dog.ceo/api/breeds/list/all`
          );    
          const json = await response.data;  
          console.log(json);   
          setBreeds(json.message);   
      }
      fetchBreeds();
    }, []);

  
  return (
    <div>
      <ul className="list-group list-group-flush">
        <dl>
          {Object.entries(breeds).map((breed) => (
            <Breed breed={breed} />
          ))}
        </dl>
      </ul>
    </div>
  );
}

export default Breeds;
