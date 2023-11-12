import styled from 'styled-components'
import Typography from '../../../components/Typography/Typography'
import { responsiveSizes } from '../../../components/style/responsiveSizes'
import { Link } from 'react-router-dom'

const DefaultStyledHomePageContent = styled.div`
width: 100%;
max-width: ${responsiveSizes.pageWidth};
padding: 2rem 1rem;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const StyledHomePageContent = styled(DefaultStyledHomePageContent)(
  props => props.style
)

const StyledH1 = styled(Typography)`
padding: 1rem 0;
text-indent: 2rem;
text-align: justify;
`

const StyledBody1 = styled(Typography)`
padding: 1rem 0;
text-indent: 2rem;
text-align: justify;
`

const StyledH2 = styled(Typography)`
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
`

const StyledImgContainer = styled(Link)`
position: relative;
`

const StyledImg = styled.img`
width: calc(320px * 1.5);
height: calc(171px * 1.5);
`

const StyledImgTitle = styled(Typography)`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`

export {
  StyledHomePageContent,
  StyledH1,
  StyledBody1,
  StyledH2,
  StyledAllImgContainer,
  StyledImg,
  StyledImgContainer,
  StyledImgTitle
}
