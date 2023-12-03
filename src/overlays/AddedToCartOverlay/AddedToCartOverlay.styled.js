import styled from 'styled-components'
import Typography from '../../components/Typography/Typography'
import { responsiveSizes } from '../../components/style/responsiveSizes'

const StyledContainer = styled.div`
position: absolute;
top: 0;
left: 0;
z-index: 102;
`

const StyledAddedToCartContainer = styled.div`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;
width: 45rem;
height: 15rem;
background-color: white;
z-index: 102;

@media (max-width: ${responsiveSizes.mediumSize}) {
  width: 20rem;
  height: 20rem;
}
`

const StyledDarkOverlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.5);
z-index: 101;
`

const StyledTitle = styled(Typography)`
align-self: center;
font-size: 1.7rem;
padding: 1rem 0 1rem 2rem;

@media (max-width: ${responsiveSizes.mediumSize}) {
  padding: 1rem 0;
}
`

const StyledProduct = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 100%;

@media (max-width: ${responsiveSizes.mediumSize}) {
  justify-content: center;
  flex-direction: column;
}
`

const StyledImg = styled.img`
width: 5rem;
`

const StyledName = styled(Typography)`
font-size: 1.1rem;

@media (max-width: ${responsiveSizes.mediumSize}) {
  text-align: center;
  padding: 1rem 0;
}
`

const StyledQuantity = styled(Typography)`
font-size: 1.1rem;

@media (max-width: ${responsiveSizes.mediumSize}) {
  padding: 0 0 0.7rem 0;
}
`

const StyledPrice = styled(Typography)`
font-size: 1.5rem;
`

const StyledButtonsContainer = styled.div`
display: flex;
justify-content: flex-end;
padding: 1rem 0;
width: 100%;
`

export {
  StyledDarkOverlay,
  StyledContainer,
  StyledAddedToCartContainer,
  StyledTitle,
  StyledProduct,
  StyledImg,
  StyledName,
  StyledQuantity,
  StyledPrice,
  StyledButtonsContainer
}
