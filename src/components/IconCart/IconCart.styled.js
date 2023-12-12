import styled, { css } from 'styled-components'
import Typography from '../Typography/Typography'
import { responsiveSizes } from '../style/responsiveSizes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DefaultStyledIconCart = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

${
  props => props.$menu === true && css`
  display: none;

  @media (max-width: ${responsiveSizes.mediumSize}) {
    display: flex;
  }
  `
}

&:hover {
  cursor: pointer;
}
`

const StyledIconCart = styled(DefaultStyledIconCart)(
  props => props.style
)

const CartIconProductsQuantity = styled(Typography)`
position: absolute;
top: 60%;
right: 0;
width: 1.5rem;
height: 1.5rem;
background-color: ${props => props.theme.mainColor};
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
font-size: 0.7rem;
`

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
color: ${props => props.theme.mainColor};
font-size: 2.5rem;

@media (max-width: ${responsiveSizes.mediumSize}) {
  font-size: 2rem;
}
`

const StyledImgContainer = styled.div`
position: relative;
width: 3.125rem;
height: 3.125rem;
display: flex;
justify-content: center;
align-items: center;
`

const StyledParagraph = styled.p`
color: ${props => props.theme.secondTextColor};
`

export {
  StyledIconCart,
  StyledImgContainer,
  StyledFontAwesomeIcon,
  CartIconProductsQuantity,
  StyledParagraph
}
