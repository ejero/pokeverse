import React, {useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';

function PokemonCard({ url, name }) {
  const [cardData, setCardData] = useState([]);
  async function fetchPokeCard(){
    try{
      const cardDatas = await fetch(url)
      // return data as json
      const cardDataToJson = await cardDatas.json();
      // set pokemon data array
      setCardData(cardDataToJson); 

    } catch(err){
      console.log("Unable to fetch Poke Card", err)
    }
  }

  useEffect(() => {
    fetchPokeCard();
    }, []);

  // console.log(cardData?.sprites?.front_default);
  // console.log(cardData?.abilities[0].ability.name);

  const getAbility = cardData?.abilities?.map(pokeAbility => 
      <ul><li>{pokeAbility.ability.name}</li></ul> 
    )

  return (
      <div className="grid-container">
        <div className="flex">
          <Card className="card" style={{ width: '18rem'}}>
          <Card.Img variant="top" src={cardData?.sprites?.front_default}/>
          <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text> Abilities:
            {getAbility}
          </Card.Text>
          </Card.Body>
        </Card>
        </div> 
      </div>
  );
}

export { PokemonCard };
