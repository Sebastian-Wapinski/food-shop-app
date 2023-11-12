import styled from 'styled-components'

const DefaultStyledAllProductsFromCategoryPage = styled.div`
min-height: calc(100vh - 234.59px);
`

const StyledAllProductsFromCategoryPage = styled(DefaultStyledAllProductsFromCategoryPage)(
  props => props.style
)

export { StyledAllProductsFromCategoryPage }
