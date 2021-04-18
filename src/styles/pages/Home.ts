import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media(max-width: 950px) {
    flex-direction: column;
  }

  header {
    width: 100%;
    padding: 0.6rem;
  }
`;
