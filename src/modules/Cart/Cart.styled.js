import styled from 'styled-components'
import { responsiveSizes } from '../../components/style/responsiveSizes'
import Typography from '../../components/Typography/Typography'

const DefaultStyledCart = styled.div`
width: ${responsiveSizes.pageWidth};
`

const StyledCart = styled(DefaultStyledCart)(
  props => props.style
)

const StyledTitle = styled(Typography)`
display: block;
padding: 1.5rem 2rem;
width: 100%;
border-bottom: 1px solid ${props => props.theme.secondTextColor};
`
const StyledInfoContainer = styled.div`
margin-top: 2rem;
grid-column-gap: 3rem;
grid-row-gap: 2rem;
display: grid;
grid-template-columns: 3fr 1fr;
grid-template-rows: 25rem 10rem;
grid-template-areas: 
'StyledProductsContainer StyledShippingContainer'
'StyledNote StyledPayWithStripe';
`
const StyledProductsContainer = styled.div`
grid-area: StyledProductsContainer;
border: 1px solid ${props => props.theme.secondTextColor};
display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
max-height: 25rem;
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
const StyledShippingContainer = styled.div`
grid-area: StyledShippingContainer;
border: 1px solid ${props => props.theme.secondTextColor};
`
const StyledNote = styled.div`
grid-area: StyledNote;
border: 1px solid ${props => props.theme.secondTextColor};
`
const StyledPayWithStripe = styled.div`
grid-area: StyledPayWithStripe;
border: 1px solid ${props => props.theme.secondTextColor};
display: flex;
justify-content: center;
align-items: center;
`
export {
  StyledCart,
  StyledTitle,
  StyledInfoContainer,
  StyledProductsContainer,
  StyledShippingContainer,
  StyledNote,
  StyledPayWithStripe
}
