import styled, { css } from 'styled-components'
import Typography from '../../../components/Typography/Typography'
import { responsiveSizes } from '../../../components/style/responsiveSizes'
import { Link } from 'react-router-dom'
import Button from '../../../components/Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DefaultStyledHomePageContent = styled.div`
width: 100%;
max-width: ${responsiveSizes.pageWidth};
padding: 2rem 1rem;
display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
min-height: calc(100vh - 234.59px);
`

const StyledHomePageContent = styled(DefaultStyledHomePageContent)(
  props => props.style
)

const StyledH = styled(Typography)`
padding: 0 0 1rem 0;
text-indent: 2rem;
text-align: justify;

@media (max-width: ${responsiveSizes.mediumSize}) {
  text-align: center;
  text-indent: 0;
}
`

const StyledBody1 = styled(Typography)`
padding: 3rem 0;
text-indent: 2rem;
text-align: justify;
`

const StyledAllImgContainer = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
max-width: ${responsiveSizes.pageWidth};
width: 100%;
padding: 2rem 0;

@media (max-width: ${responsiveSizes.mediumSize}) {
  justify-content: center;
  flex-direction: column;
}
`

const StyledImgContainer = styled(Link)`
position: relative;
`

const StyledImg = styled.img`
width: calc(320px * 1.5);
height: calc(171px * 1.5);

@media (max-width: ${responsiveSizes.mediumSize}) {
width: calc(320px * 0.8);
height: calc(171px * 0.8);
}
`

const StyledImgTitle = styled(Typography)`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

@media (max-width: ${responsiveSizes.mediumSize}) {
font-size: 1.5rem;
}
`

const StyledCarousel = styled.div`
width: 90%;
height: 30rem;
display: grid;
grid-template-columns: 5rem 1fr 5rem;
grid-template-areas: 
'StyledLeftButton StyledBestProductsContainer StyledRightButton';

@media (max-width: ${responsiveSizes.smallSize}) {
  grid-template-areas: 
'StyledBestProductsContainer StyledBestProductsContainer'
'StyledLeftButton  StyledRightButton';
grid-template-columns: 1fr;
grid-template-rows: 1fr 3rem;
height: 35rem;
}
`

const StyledLeftButton = styled(Button)`
display: flex;
justify-content: center;
align-items: center;
padding: 0;
grid-area: StyledLeftButton;
align-self: center;
height: 3.5rem;

@media (max-width: ${responsiveSizes.smallSize}) {
width: 5rem;
}
`

const StyledRightButton = styled(Button)`
display: flex;
justify-content: center;
align-items: center;
padding: 0;
grid-area: StyledRightButton;
align-self: center;
height: 3.5rem;

@media (max-width: ${responsiveSizes.smallSize}) {
width: 5rem;
}
`

const StyledBestProductsContainer = styled.div`
position: relative;
width: 60rem;
height: 100%;
overflow: hidden;
justify-self: center;
grid-area: StyledBestProductsContainer;

@media (max-width: ${responsiveSizes.pageWidth}) {
  width: 40rem;
}

@media (max-width: ${responsiveSizes.mediumSize}) {
  width: 20rem;
}

@media (max-width: ${responsiveSizes.smallSize}) {
width: 15rem;
}
`

const StyledBestProductsWrapper = styled.div`
position: absolute;
top: 0;
left: ${props => props.$slideCarouselAmount};
width: 120rem;
height: 100%;
display: flex;
justify-content: center;
align-items: flex-start;
transition: all 0.5s ease-in-out;

@media (max-width: ${responsiveSizes.smallSize}) {
  left: calc(-2.9rem + ${props => props.$slideCarouselAmount})
}
`

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
width: 1rem;
height: 1rem;
padding: 1rem;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.1s ease-in-out;

&:hover {
  color: ${props => props.theme.mainColor}
}

${
  props => props.$isDisabled && css`
    &:hover {
      color: ${props => props.theme.firstBackground}
    }
    `
}
`

export {
  StyledHomePageContent,
  StyledH,
  StyledBody1,
  StyledAllImgContainer,
  StyledImg,
  StyledImgContainer,
  StyledImgTitle,
  StyledBestProductsContainer,
  StyledLeftButton,
  StyledRightButton,
  StyledFontAwesomeIcon,
  StyledBestProductsWrapper,
  StyledCarousel
}
