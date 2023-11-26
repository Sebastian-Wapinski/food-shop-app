import styled from 'styled-components'
import Typography from '../../components/Typography/Typography'
import { responsiveSizes } from '../../components/style/responsiveSizes'

const DefaultStyledProductsPage = styled.div`
min-height: calc(100vh - 234.59px);
width: ${responsiveSizes.pageWidth};
`

const StyledProductsPage = styled(DefaultStyledProductsPage)(
  props => props.style
)

const StyledPageTitle = styled(Typography)`
display: block;
width: 100%;
padding: 1.5rem 2rem;
border-bottom: 1px solid ${props => props.theme.secondTextColor};
`

export {
  StyledProductsPage,
  StyledPageTitle
}
