import styled from 'styled-components'
import Button from '../../components/Button/Button'
import TotalPrice from '../../components/TotalPrice/TotalPrice'
import Cart from '../../modules/Cart/Cart'

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

const StyledCart = styled(Cart)`
width: 60rem;
`

const StyledButton = styled(Button)`
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
  StyledCart,
  StyledButton,
  StyledTotalPrice
}
