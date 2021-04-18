import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 1rem;

    text-align: center;

  background: ${props => props.theme.colors.shadow};

  h2 {
      font-size: 1.2rem;

      margin-top: 1.2rem;
  }

  h3 {
      margin: 2rem;
      color: ${props => props.theme.colors.fire};
  }

  p {
      margin: 0.8rem;

      a {
          text-decoration: underline;
          color: ${props => props.theme.colors.fire};
      }
  }
`;
