import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100%;
`;

export const Wraper = styled.section`
    width: 80%;
    height: 100%;

    background: ${props => props.theme.colors.dragon}; 

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    @media(max-width: 650px) {
        width: 100%;
    }

    .idName {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }

    .typeCard {
      width:100%; 
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      padding: 2rem;
      background: ${props => props.theme.colors.unknown}; 
    }
    
`;

export const Img = styled.img`
  width: 350px;

    margin-right: 1rem;
`;

export const PokeId = styled.h2`
`;

export const PokeName = styled.h1`

  font-size: 2rem;

    margin: 2rem 0.5rem;
`;

export const Types = styled.img`
  width: 60px;

  margin: 0.2rem;
`;

export const StatsCard = styled.div`
   background: ${props => props.theme.colors.unknown}; 
   width: 50%;
   padding: 2rem;
   margin-bottom: 2rem;

   @media(max-width: 1380px) {
      width: 90%;
    }
`;

export const Stats = styled.div`
  margin: 1rem 0;
`;

export const InfosCard = styled.div`
    width: 50%;
    padding: 2rem;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    margin: 2rem;

    background: ${props => props.theme.colors.unknown}; 
    
    @media(max-width: 1380px) {
      width: 100%;
    }

    div {
      h2 {
        font-size: 1rem;
      }

      margin: 0 3rem;

      @media(max-width: 1380px) {
        margin: 0;
      }
    }
`;

export const Infos = styled.p`
  margin: 1rem;
`;

export const Weaknesses = styled.div`

`;