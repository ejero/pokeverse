import React, {useEffect, useState} from 'react';
import { Navigation } from './components/Navigation';
import { PokemonCard } from './components/PokemonCard';

const LIMIT = 5;
const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokeApiData = async () => {
      // fetch pokemon data
      const pokeData = await fetch(pokeApi)
      // return data as json
      const pokeDataToJson = await pokeData.json();
    
      // set pokemon data array
      setPokemonList(pokeDataToJson.results); 
      
      // testing to see what is fetched and data ype
      console.log(pokemonList);
      console.log(typeof pokemonList);
    }

    // call the fetch function
    fetchPokeApiData();
  }, []);

// Map pokemon card data
  const getPokeData = pokemonList.map(p => (<>
    <PokemonCard url={p.url} name={p.name}/>
  </>))

  return (
    <div data-testid="app">
      <Navigation />
      <h1>Pokemon should appear here</h1>
      <div>{getPokeData}</div>
    </div>
  );
}

export { App };
