import React, { useState } from "react";
import axios from "axios";

const PokemonAPI = (props) => {
  const [pokemonList, setPokemonList] = useState([]);

  const fetchPokemon = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon').then(response=>{
    const results = response.data.results.map((pokemon) => pokemon.name);
    setPokemonList(results); })
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
