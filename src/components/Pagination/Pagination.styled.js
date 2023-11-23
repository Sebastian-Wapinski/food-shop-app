import styled from 'styled-components'
import { responsiveSizes } from '../style/responsiveSizes'

const DefaultStyledPagination = styled.div`
padding: 2rem 0 2rem 0;
max-width: ${responsiveSizes.pageWidth};
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: auto;
`

const StyledPagination = styled(DefaultStyledPagination)(
  props => props.style
)

export { StyledPagination }
