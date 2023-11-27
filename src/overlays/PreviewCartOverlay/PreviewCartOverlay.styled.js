import styled from 'styled-components'
import CardButton from '../../components/CardButton/CardButton'
import TotalPrice from '../../components/TotalPrice/TotalPrice'

const DefaultStyledPreviewCartOverlay = styled.div`
position: absolute;
top: 100%;
right: 0;
background-color: white;
z-index: 201;
`

const StyledPreviewCartOverlay = styled(DefaultStyledPreviewCartOverlay)(
  props => props.style
)

const StyledProductsAndTotalPriceLayout = styled.div`
position: relative;
border: 1px solid ${props => props.theme.mainColor};
min-height: 15rem;
max-height: 32rem;
`

const StyledProductsContainer = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
max-height: 20rem;
overflow-y: scroll;
padding: 1rem 0;
width: 60rem;

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

const StyledCardButton = styled(CardButton)`
display: flex;
justify-content: center;
width: 100%;
margin: 0;
margin-bottom: 1rem;
border-left: none;
border-right: none;

&:hover{
  border-left: none;
  border-right: none;
}
`

const StyledTotalPrice = styled(TotalPrice)`
position: static;
`

export {
  StyledPreviewCartOverlay,
  StyledProductsAndTotalPriceLayout,
  StyledProductsContainer,
  StyledCardButton,
  StyledTotalPrice
}
