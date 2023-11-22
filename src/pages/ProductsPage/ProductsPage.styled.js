import styled from 'styled-components'
import { responsiveSizes } from '../../components/style/responsiveSizes'

const DefaultStyledProductsPage = styled.div`
min-height: calc(100vh - 234.59px);
`

const StyledProductsPage = styled(DefaultStyledProductsPage)(
  props => props.style
)

const StyledProductsContainer = styled.div`
padding: 2rem 0 4rem 0;
max-width: ${responsiveSizes.pageWidth};
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: auto;
`

export { StyledProductsPage, StyledProductsContainer }
