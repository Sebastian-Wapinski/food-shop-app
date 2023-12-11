import styled from 'styled-components'

const DefaultStyledFavoritesPage = styled.div`

`

const StyledFavoritesPage = styled(DefaultStyledFavoritesPage)(
  props => props.style
)

export { StyledFavoritesPage }
