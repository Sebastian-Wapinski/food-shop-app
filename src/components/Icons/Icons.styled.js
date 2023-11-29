import styled from 'styled-components'
import Typography from '../Typography/Typography'

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

const StyledImg = styled.img`

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

export { StyledIcons, StyledIconContainer, StyledImg, StyledParagraph, CartIconProductsQuantity }
