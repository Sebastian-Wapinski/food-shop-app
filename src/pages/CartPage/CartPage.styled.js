import styled from 'styled-components'

const DefaultStyledCartPage = styled.div`
min-height: calc(100vh - 234.59px);
`

const StyledCartPage = styled(DefaultStyledCartPage)(
  props => props.style
)

export { StyledCartPage }
