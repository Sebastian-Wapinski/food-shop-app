import styled, { css } from 'styled-components'
import Typography from '../Typography/Typography'

const DefaultStyledProductCard = styled.div`
margin: 1rem 2rem;
padding: 2rem 2rem 4rem 2rem;
position: relative;
height: 20rem;
width: 16.5rem;
z-index: 1;

&:hover {
  z-index: 2;
}
`

const StyledProductCard = styled(DefaultStyledProductCard)(
  props => props.style
)

const StyledProductContainer = styled.div`
position: absolute;
top: 0;
left: 0;
border: 1px solid transparent;
padding: 2rem 2rem 4rem 2rem;
z-index: 1;

${
  props => props.$isActive && css`
  &:hover {
    background-color: ${props => props.theme.firstBackground};
    border: 1px solid ${props => props.theme.mainColor};
    z-index: 2;
  }
  `
}

`

const StyledImg = styled.img`
width: 12.5rem;
height: 9.375rem;
`

const StyledName = styled(Typography)`
display: block;
padding: 0.5rem 0;
text-align: center;
`

const StyledProducer = styled(Typography)`
display: block;
text-align: center;
`

const StyledPriceAccessibilityContainer = styled.div`
display: flex;
justify-content: space-between;
padding: 1.5rem 0;
`

const StyledPrice = styled(Typography)`
display: block;
font-size: 2rem;
`

const StyledAccessibility = styled(Typography)`
display: block;
font-size: 0.7rem;
`

const StyledUnit = styled(Typography)`
display: block;
font-size: 0.7rem;
text-align: end;
padding: 0.5rem 0; 
`

const StyledAddToCartContainer = styled.div`
position: absolute;
height: 0;
top: calc(95% - 2rem);
left: 0;
width: 100%;
display: flex;

${
  props => props.$isActive && css`
  height: 2rem;
  `
}
`

const StyledOverlay = styled.div`
position: absolute;
left: 0;
top: 0;
background-color: rgba(0, 0, 0, 0.3);
height: 100%;
width: 100%;
padding: 2rem 2rem 4rem 2rem;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
z-index: 4;
`

const StyledText = styled.div`
color: ${props => props.theme.firstBackground};
font-size: 2rem;
font-weight: 600;
z-index: 4;
`

export {
  StyledProductCard,
  StyledImg,
  StyledName,
  StyledProducer,
  StyledPriceAccessibilityContainer,
  StyledPrice,
  StyledAccessibility,
  StyledUnit,
  StyledAddToCartContainer,
  StyledProductContainer,
  StyledOverlay,
  StyledText
}
