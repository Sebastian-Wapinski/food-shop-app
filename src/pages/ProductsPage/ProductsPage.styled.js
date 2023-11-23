import styled from 'styled-components'

const DefaultStyledProductsPage = styled.div`
min-height: calc(100vh - 234.59px);
`

const StyledProductsPage = styled(DefaultStyledProductsPage)(
  props => props.style
)

export { StyledProductsPage }
