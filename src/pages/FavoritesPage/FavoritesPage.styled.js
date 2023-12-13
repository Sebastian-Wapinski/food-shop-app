import styled from 'styled-components'
import { responsiveSizes } from '../../components/style/responsiveSizes'
import Typography from '../../components/Typography/Typography'

const DefaultStyledFavoritesPage = styled.div`
min-height: calc(100vh - 234.59px);
width: ${responsiveSizes.pageWidth};

@media (max-width: ${responsiveSizes.pageWidth}) {
  width: ${responsiveSizes.mediumSize};
}

@media (max-width: ${responsiveSizes.mediumSize}) {
  width: ${responsiveSizes.smallSize};
}

@media (max-width: ${responsiveSizes.smallSize}) {
  width: ${responsiveSizes.mobileMenu};
}
`

const StyledFavoritesPage = styled(DefaultStyledFavoritesPage)(
  props => props.style
)

const StyledTitle = styled(Typography)`
display: block;
padding: 1.5rem 2rem;
width: 100%;
border-bottom: 1px solid ${props => props.theme.secondTextColor};
`

export { StyledFavoritesPage, StyledTitle }
