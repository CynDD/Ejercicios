import Axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    <div className="row">
        <Fragment key={breed[0]}>
        <dt>
            <Link to="/signup"><strong>{breed[0]}</strong></Link>
            <div className="col-sm-4">
                <img
                    className="img-fluid"
                    src={image}
                    alt="Imagen de la película"
                />
            </div>
        </dt>
        <dd>{breed[1].join(' , ')}</dd>
        <hr />
        </Fragment>
    </div>
  );
};

export default Breed;
