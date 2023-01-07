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

  console.log(pokemonList.filter(pokemonList => pokemonList.name.includes(query)));

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
      <Navigation/>
      <InputGroup className="mb-3" onChange={(e) => setQuery(e.target.value)} >
        <InputGroup.Text>Search</InputGroup.Text>
        <Form.Control aria-label="Search"/>
      </InputGroup>
      <div>{getPokeData}</div>
    </div>
  );
}

export { App };
