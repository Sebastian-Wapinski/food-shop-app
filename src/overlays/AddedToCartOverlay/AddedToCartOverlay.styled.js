import styled from 'styled-components'
import Typography from '../../components/Typography/Typography'

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
`

const StyledProduct = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 100%;
`

const StyledImg = styled.img`
width: 5rem;
`

const StyledName = styled(Typography)`
font-size: 1.1rem;
`

const StyledQuantity = styled(Typography)`
font-size: 1.1rem;
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
