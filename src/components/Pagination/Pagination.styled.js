import styled from 'styled-components'
import { responsiveSizes } from '../style/responsiveSizes'

const DefaultStyledPagination = styled.div`
padding-bottom: 4rem;
max-width: ${responsiveSizes.pageWidth};
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: auto;
`

const StyledPagination = styled(DefaultStyledPagination)(
  props => props.style
)

export { StyledPagination }
