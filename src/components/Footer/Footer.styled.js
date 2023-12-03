import styled from 'styled-components'
import Typography from '../Typography/Typography'
import { responsiveSizes } from '../style/responsiveSizes'

const DefaultStyledFooter = styled.div`
width: 100%;
background-color: ${props => props.theme.mainColor};
margin-top: 2rem;

@media (max-width: ${responsiveSizes.mediumSize}) {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 9.5rem;
}
`

const StyledFooter = styled(DefaultStyledFooter)(
  props => props.style
)

const TextContainer = styled(Typography)`
display: flex;
justify-content: center;
align-items: center;
padding: 1rem 0;

@media (max-width: ${responsiveSizes.mediumSize}) {
  width: ${responsiveSizes.mobileMenu};
}
`

export { StyledFooter, TextContainer }
