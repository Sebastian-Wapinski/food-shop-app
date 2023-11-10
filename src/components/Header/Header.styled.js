import styled from 'styled-components'
import { responsiveSizes } from '../style/responsiveSizes'

const DefaultStyledHeader = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
padding: 1rem 1rem;
max-width: ${responsiveSizes.pageWidth};
`

const StyledHeader = styled(DefaultStyledHeader)(
  props => props.style
)

const StyledContainer = styled.div`

`

export { StyledHeader, StyledContainer }
