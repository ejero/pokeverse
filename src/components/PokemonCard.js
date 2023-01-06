import React, {useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';

function PokemonCard({ url, name }) {
  const [cardData, setCardData] = useState([]);
  
  useEffect(() => {
    const fetchPokeApiData = async () => {
      // fetch pokemon card data
      const cardDatas = await fetch(url)
      // return data as json
      const cardDataToJson = await cardDatas.json();
    
      // set pokemon data array
      setCardData(cardDataToJson); 

      // Seeing what is in cardData
      console.log(cardData.abilities[0]);
      // console.log(cardDataToJson.sprites.front_default)
    }
    // call the fetch function
    fetchPokeApiData();
  }, []);


  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          {cardData.height}
        </Card.Text>
      </Card.Body>
    </Card>

    </div>
  );
}

export { PokemonCard };
