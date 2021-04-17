import React, { useEffect, useState } from 'react';

import Card from '../components/Card';
import Navbar from '../components/Navbar';

import { Container } from '../styles/pages/Home';

const Home = (props) => {
  const { pokemons } = props;
  const [search, setSearch] = useState('');

  const pokeFilter = pokemons.filter((pokemon) => pokemon.name.includes(search.toLowerCase()));

  return (
    <Container>
        <header>
          <Navbar 
            value={search}
            onChange={(ev) => setSearch(ev.target.value)}
          />
        </header>

        {pokeFilter.map(poke => (
          <Card 
            url={`https://pokeapi.co/api/v2/pokemon/${poke.name}`}
            key={poke.name}
          />
        ))}
    </Container>
  )
}

export default Home;

export const getStaticProps = async () => {
  const pokemons = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1118')
    .then((respostaDoServer) => {
      if (respostaDoServer.ok) {
        return respostaDoServer.json();
      }

      throw new Error('Deu problema');
    })
    .then((respostaEmObjeto) => respostaEmObjeto.results);

  return {
    props: {
      pokemons,
    }
  };
}