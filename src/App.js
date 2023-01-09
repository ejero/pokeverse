import React, {useEffect, useState} from 'react';
import { Navigation } from './components/Navigation';
import { PokemonCard } from './components/PokemonCard';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const LIMIT = 15;
const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [query, setQuery] = useState('');

  // Adding search query to console.log to check
  // console.log(pokemonList.filter(pokemonList => pokemonList.name.includes(query)));

  useEffect(() => {
    const fetchPokeApiData = async () => {
      // fetch pokemon data
      const pokeData = await fetch(pokeApi)
      // return data as json
      const pokeDataToJson = await pokeData.json();
      // set pokemon data array
      setPokemonList(pokeDataToJson.results);
    }

    // call the fetch function
    fetchPokeApiData();
  }, []);

   // Event handler for input change
   const handleChange = event => {
    setQuery(event.target.value);
  };
    

  return (
    <div data-testid="app">
      <Navigation/>
      <InputGroup className="mb-3" onChange={handleChange} >
        <InputGroup.Text>Search</InputGroup.Text>
        <Form.Control aria-label="Search" onChange={handleChange} />
      </InputGroup>
      {pokemonList
        .filter(card => card.name.toLowerCase().includes(query.toLowerCase()))
        .map(card => (
          <PokemonCard key={card.name} url={card.url} name={card.name} />
        ))}
    </div>
  );
}

export { App };
