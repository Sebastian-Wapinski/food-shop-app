import styled from 'styled-components'

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
justify-content: center;
align-items: center;
width: 10rem;
height: 10rem;
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

const StyledTitle = styled.div`

z-index: 101;
`

const StyledProduct = styled.div`

z-index: 101;
`

const StyledImg = styled.div`

z-index: 101;
`

const StyledName = styled.div`

z-index: 101;
`

const StyledQuantity = styled.div`

z-index: 101;
`

const StyledPrice = styled.div`

z-index: 101;
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
  StyledPrice
}
