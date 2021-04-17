import styled from 'styled-components';

export const H2 = styled.h2`
  text-align: center;
`;

export const Container = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  margin-bottom: 10px;
  border-bottom: 2px solid ${props => props.theme.colors.text};

  padding: 1.3rem;

  width: 100%; 
`;

export const Types = styled.img`
  width: 50px;
  height: auto;

  margin: 10px;
`;

export const SearchBox = styled.div`
  display: flex;
  display: column;
  justify-content: center;
`;

export const Input = styled.input`
  width: 500px;
  height: 40px;

  margin: 0.8rem;
  padding: 1%;

  font-size: 1.1rem;

  background: ${props => props.theme.colors.unknown};

  border: 1px solid ${props => props.theme.colors.fire};
  border-radius: 15px;
`;