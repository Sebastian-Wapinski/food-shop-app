import styled from 'styled-components'
import Button from '../../components/Button/Button'
import Typography from '../../components/Typography/Typography'
import { responsiveSizes } from '../../components/style/responsiveSizes'

const DefaultStyledPageNotFound = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
min-height: calc(100vh - 234.59px);
`

const StyledPageNotFound = styled(DefaultStyledPageNotFound)(
  props => props.style
)

const StyledParagraph = styled(Typography)`
display: block;
margin: 3rem 0;
font-size: 3rem;

@media (max-width: ${responsiveSizes.mediumSize}) {
  font-size: 2rem;
}
`

const StyledButton = styled(Button)`

`

export { StyledPageNotFound, StyledParagraph, StyledButton }
