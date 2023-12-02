import styled, { css } from 'styled-components'
import Typography from '../Typography/Typography'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { responsiveSizes } from '../style/responsiveSizes'

const DefaultStyledIcons = styled.div`
position: relative;
display: flex;
justify-content: space-around;
width: 15rem;

@media (max-width: ${responsiveSizes.mediumSize}) {
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: ${props => props.theme.firstBackground};
  width: 100%;
  z-index: 300;
  padding: 0.5rem 0;
}
`

const StyledIcons = styled(DefaultStyledIcons)(
  props => props.style
)

const StyledIconContainer = styled.div`
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

const StyledParagraph = styled.p`
color: ${props => props.theme.secondTextColor};
`

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

const StyledImgContainer = styled.div`
position: relative;
width: 3.125rem;
height: 3.125rem;
display: flex;
justify-content: center;
align-items: center;
`

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
color: ${props => props.theme.mainColor};
font-size: 2.5rem;

@media (max-width: ${responsiveSizes.mediumSize}) {
  font-size: 2rem;
}
`

const StyledDarkOverlay = styled.div`
@media (max-width: ${responsiveSizes.mediumSize}) {
    position: fixed;
    top: 0;
    left: 0;
    
    ${
      props => props.$showMenu && css`
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    width: 100%;
    z-index: 400;
    `
  }
}
`

const StyledMenuBackground = styled.div`
@media (max-width: ${responsiveSizes.mediumSize}) {
  position: fixed;
  top: 0;
  left: 0;
  width: 0;
  transition: all 0.3s ease-in-out;
  height: 100%;
  background-color: white;
  overflow: hidden;

${
  props => props.$showMenu && css`
  width: ${responsiveSizes.mobileMenu};
  z-index: 401;
  `
}
}
`

export {
  StyledIcons,
  StyledIconContainer,
  StyledParagraph,
  CartIconProductsQuantity,
  StyledImgContainer,
  StyledFontAwesomeIcon,
  StyledDarkOverlay,
  StyledMenuBackground
}
