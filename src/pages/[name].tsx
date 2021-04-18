import axios from 'axios';

import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import React, { useEffect, useState } from 'react';

import { Container, Wraper, Img, PokeName, PokeId, Types, StatsCard, Stats, InfosCard, Infos, Weaknesses } from '../styles/pages/pokemon/styles';

import Footer from '../components/Footer';


function pages(props) {
  const { pokemon  } = props;

  const [pokeTypes, setPokeTypes] = useState([]);
  const [pokeAbility, setPokeAbility] = useState([]);
  const [pokeStats, setPokeStats] = useState([]);

  useEffect(() => {
    async function PokeInfosFunc() {
      const pokeInfoData = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
      const data = await pokeInfoData.json();
      setPokeTypes(data.types);
      setPokeAbility(data.abilities);
      setPokeStats(data.stats)

    }

    PokeInfosFunc();
  }, []);
    
  return (
      <Container>
        <Wraper>

            <Img src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}></Img>
            <div className="idName">
              <PokeId>#{pokemon.id} - </PokeId>
              <PokeName>{pokemon.name}</PokeName>  
            </div>

            <div className="typeCard">
              {pokeTypes.map(types => (
                <Types key={types.type.name} className={types.type.name} src={`https://veekun.com/dex/media/types/en/${types.type.name}.png`} alt="Img dos tipos de pokemons"></Types>
              ))}

              <Weaknesses></Weaknesses>
            </div>

            <InfosCard>
              <div>
                <h2>Habilidades:</h2> 
                {pokeAbility.map(poke => (
                  <Infos>{poke.ability.name}</Infos>
                ))}
              </div>
              <div>
                <h2>Inoformações extras:</h2>
                <Infos>weight: {pokemon.weight}</Infos>
                <Infos>height: {pokemon.height}</Infos>
              </div>
            </InfosCard>

            <StatsCard>
              <h2>Status:</h2>
              {pokeStats.map(poke => (
                <Stats>{poke.stat.name} : {poke.base_stat}</Stats>
              ))}
            </StatsCard>

        </Wraper>

        <Footer></Footer>
      </Container>
  );
}

export default pages;

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    const name = context.query.name as string;

    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const pokemon = await response.data;

    return {
        props: { 
          pokemon,

        },
    };
};