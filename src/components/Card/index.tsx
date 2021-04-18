import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { CardContainer, Header, Img, Number, Types, PokeName } from './styles';

interface CardProps {
  url: string;
  key: string;
}

const Card: React.FC<CardProps> = (props) => {
  const [pokeId, setPokeId] = useState([]);
  const [pokeName, setPokeName] = useState([]);
  const [pokeTypes, setPokeTypes] = useState([]);

  useEffect(() => {
    async function PokeInfosFunc() {
      const pokeInfoData = await fetch(props.url);
      const data = await pokeInfoData.json();
      setPokeId(data.id);
      setPokeName(data.species.name);
      setPokeTypes(data.types);

    }

    PokeInfosFunc();
  }, []);

  return (
    <Link href={`/${pokeName}`}>
      <CardContainer key={props.key}>

      <Header>
        <Img src={`https://pokeres.bastionbot.org/images/pokemon/${pokeId}.png`}></Img>

        {pokeTypes.map(types => (
          <Types key={types.type.name} className={types.type.name} src={`https://veekun.com/dex/media/types/en/${types.type.name}.png`} alt="Img dos tipos de pokemons"></Types>
        ))}

        <Number>#{pokeId}</Number>

        <PokeName>{pokeName}</PokeName>
        
      </Header>

      </CardContainer>
    </Link>
  );
}

export default Card;