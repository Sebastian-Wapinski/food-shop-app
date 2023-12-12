import styled from 'styled-components'
import Typography from '../../components/Typography/Typography'
import { responsiveSizes } from '../../components/style/responsiveSizes'

const DefaultStyledOrdersPage = styled.div`
min-height: calc(100vh - 234.59px);
width: ${responsiveSizes.pageWidth};

@media (max-width: ${responsiveSizes.pageWidth}) {
  width: ${responsiveSizes.mediumSize};
}

@media (max-width: ${responsiveSizes.mediumSizeCart}) {
  width: ${responsiveSizes.mobileMenu};
}
`

const StyledOrdersPage = styled(DefaultStyledOrdersPage)(
  props => props.style
)

const StyledTitle = styled(Typography)`
display: block;
padding: 1.5rem 2rem;
width: 100%;
border-bottom: 1px solid ${props => props.theme.secondTextColor};

@media (max-width: ${responsiveSizes.mediumSizeCart}) {
  text-align: center;
}
`

const StyledOrdersContainer = styled.div`
width: 100%;
`

export {
  StyledOrdersPage,
  StyledTitle,
  StyledOrdersContainer
}
