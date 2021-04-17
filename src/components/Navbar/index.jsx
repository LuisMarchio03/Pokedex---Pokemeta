import React, { ReactNode, useEffect, useState } from 'react';

import { H2, Container, Types, SearchBox, Input } from './styles';


const Navbar = (props) => {
  const [pokeTypes, setPokeTypes] = useState([]);

  useEffect(() => {
    async function PokeInfosFunc() {
      const pokeInfoData = await fetch('https://pokeapi.co/api/v2/type/');
      const data = await pokeInfoData.json();
      setPokeTypes(data.results);

    }

    PokeInfosFunc();
  }, []);

  return (
    <>
      <H2>Filtrar:</H2>
      <Container>
        {pokeTypes.map(types => (
          <Types key={types.name} src={`https://veekun.com/dex/media/types/en/${types.name}.png`}></Types>
        ))}
      </Container>
      <SearchBox>
        <Input type="search" placeholder="Pesquise pelo nome do pokemon" value={props.value} onChange={props.onChange} />
      </SearchBox>
    </>
  );
}

export default Navbar;