import React, { useState, useEffect } from "react";

const ShowAPI = (props) => {
  const [starWars, setStarWars] = useState("");

  useEffect(() => {
    fetch(`https://swapi.dev/api/${props.poke}/${props.id}`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setStarWars(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {props.poke == "people" ? (
        <>
          <h1>Name : {starWars.name}</h1>
          <p>Hight : {starWars.height}</p>
          <p>Mass : {starWars.mass}</p>
          <p>Hair Color : {starWars.hair_color}</p>
          <p>Skin Color : {starWars.skin_color}</p>
        </>
      ) : (
        <>
          <h1>Name : {starWars.name}</h1>
          <p>Climate : {starWars.climate}</p>
          <p>Terrain :{starWars.terrain}</p>
          <p>Surface Water : {starWars.surface_water}</p>
          <p>population : {starWars.population}</p>
        </>
      )}
    </div>
  );
};
export default ShowAPI;
