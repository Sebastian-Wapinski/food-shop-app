import styled from 'styled-components'

const StyledProductsContainer = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
max-height: 20rem;
overflow-y: scroll;
padding: 1rem 0;

&::-webkit-scrollbar,
&::-webkit-scrollbar-thumb,
&::-webkit-scrollbar-track { 
    width: 0.8rem;
    border: none;
    background: transparent;
}

&::-webkit-scrollbar-track {
  background: ${props => props.theme.mainColorLighterShade};
}

&::-webkit-scrollbar-thumb {
  background-color: ${props => props.theme.mainColor};
}

&::-webkit-scrollbar-thumb:hover {
  background-color: ${props => props.theme.mainColorDarkerShade};
}
`

export { StyledProductsContainer }
