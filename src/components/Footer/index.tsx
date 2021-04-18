import React from 'react';

import { Container } from './styles';

const Footer: React.FC = () => {
  return (
      <Container>
          <h2>Desenvolvido por: Luís Gabriel Marchió Batista</h2>
          
            <h3>Api's utilizadas:</h3>
            <p>PokeApi: <a href="https://pokeapi.co/">https://porkeapi.co/</a></p>
            <p><a href="https://pokeres.bastionbot.org/">https://pokeres.bastionbot.org/</a></p>
            <p>Veekun: <a href="https://veekun.com/">https://veekun.com/</a></p>

            <h3>Redes Sociais :</h3>
            <p>GitHub: <a href="https://github.com/LuisMarchio03/Pokemeta-2.0">https://github.com/LuisMarchio03/Pokemeta-2.0</a></p>
            <p>Instagram: <a href="https://www.instagram.com/luis_marchio/?hl=pt-br">https://www.instagram.com/luis_marchio/?hl=pt-br</a></p>
      </Container>
  );
}

export default Footer;