import styled from 'styled-components'
import Typography from '../Typography/Typography'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DefaultStyledIcons = styled.div`
position: relative;
display: flex;
justify-content: space-around;
width: 15rem;
`

const StyledIcons = styled(DefaultStyledIcons)(
  props => props.style
)

const StyledIconContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const StyledParagraph = styled.p`
color: ${props => props.theme.secondTextColor};
`

const CartIconProductsQuantity = styled(Typography)`
position: absolute;
top: 40%;
right: 0.6rem;
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
width: 3.125rem;
height: 3.125rem;
display: flex;
justify-content: center;
align-items: center;
`

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
color: ${props => props.theme.mainColor};
font-size: 2.5rem;
`

export {
  StyledIcons,
  StyledIconContainer,
  StyledParagraph,
  CartIconProductsQuantity,
  StyledImgContainer,
  StyledFontAwesomeIcon
}
