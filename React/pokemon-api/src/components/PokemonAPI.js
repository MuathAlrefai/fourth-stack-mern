import React, { useState } from "react";

const PokemonAPI = (props) => {
  const [pokemonList, setPokemonList] = useState([]);

  const fetchPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data) => {
        const results = data.results.map((pokemon) => pokemon.name);
        setPokemonList(results);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div style={{fontFamily: 'consolas'}}>
      <button onClick={fetchPokemon}>Fetch Pokemon</button>

      {pokemonList.length > 0 && (
        <ol>
          {pokemonList.map((name, i) => (
            <li key={i}>{name}</li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default PokemonAPI;
