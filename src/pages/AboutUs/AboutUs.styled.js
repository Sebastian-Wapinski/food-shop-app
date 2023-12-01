import styled from 'styled-components'
import { responsiveSizes } from '../../components/style/responsiveSizes'
import Typography from '../../components/Typography/Typography'

const DefaultStyledAboutUs = styled.div`
width: 100%;
max-width: ${responsiveSizes.pageWidth};
padding: 2rem 1rem;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
min-height: calc(100vh - 234.59px);
`

const StyledAboutUs = styled(DefaultStyledAboutUs)(
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

export { StyledAboutUs, StyledH1, StyledBody1 }
