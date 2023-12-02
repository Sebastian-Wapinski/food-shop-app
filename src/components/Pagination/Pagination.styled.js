import styled from 'styled-components'
import { responsiveSizes } from '../style/responsiveSizes'

const DefaultStyledPagination = styled.div`
padding-bottom: 4rem;
max-width: ${responsiveSizes.pageWidth};
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: auto;

@media (max-width: ${responsiveSizes.pageWidth}) {
  grid-template-columns: repeat(3, 1fr);
}

@media (max-width: ${responsiveSizes.mediumSize}) {
  grid-template-columns: repeat(2, 1fr);
}

@media (max-width: ${responsiveSizes.smallSize}) {
  grid-template-columns: repeat(1, 1fr);
}
`

const StyledPagination = styled(DefaultStyledPagination)(
  props => props.style
)

export { StyledPagination }
