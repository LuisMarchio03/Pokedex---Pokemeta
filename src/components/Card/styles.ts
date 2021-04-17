import styled from 'styled-components';

export const CardContainer = styled.div`
    width: 21%;
    padding: 1rem;

    margin: 1.5rem; 

    background: rgb(118,190,254);
    background: linear-gradient(90deg, rgba(118,190,254,1) 35%, rgba(73,208,176,1) 100%);
    border: 2px solid ${props => props.theme.colors.grass};


    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

        /* .normal {
            background: ${props => props.theme.colors.normal};
        }
        .fighting {
            background: ${props => props.theme.colors.fire};
        }
        .flying {
            background: ${props => props.theme.colors.steel};
        }
        .poison {
            background: ${props => props.theme.colors.dragon};
        }
        .ground {
            background: ${props => props.theme.colors.rock};
        }
        .rock {
            background: ${props => props.theme.colors.rock};
        }
        .bug {
            background: ${props => props.theme.colors.grass};
        }
        .ghost {
            background: ${props => props.theme.colors.normal};
        }
        .steel {
            background: ${props => props.theme.colors.steel};
        }
        .fire {
            background: ${props => props.theme.colors.fire};
        }
        .water {
            background: ${props => props.theme.colors.water};
        }
        .grass {
            background: ${props => props.theme.colors.grass};
        }
        .electric {
            background: ${props => props.theme.colors.electric};
        }
        .psychic {
            background: ${props => props.theme.colors.fairy};
        }
        .ice {
            background: ${props => props.theme.colors.water};
        }
        .dragon {
            background: ${props => props.theme.colors.dragon};
        }
        .dark {
            background: ${props => props.theme.colors.shadow};
        }
        .fairy {
            background: ${props => props.theme.colors.fairy};
        }
        .shadow {
            background: ${props => props.theme.colors.shadow};
        }
        .unknown {
            background: ${props => props.theme.colors.unknown};
        } */
`;

//! Header
export const Header = styled.header`

    color: ${props => props.theme.colors.unknown};
`;

    export const Img = styled.img`
        width: 150px;
        height: auto; 

    `;
      
    export const Number = styled.div`
        padding-top: 10px;
    `;
  
    export const Types = styled.img`
        width: 50px;
        margin: 2px;
    `;
//! End Header

export const PokeName = styled.h2`
  padding: 5px 0;
`;
