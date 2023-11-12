import styled from 'styled-components'

const DefaultStyledProductCard = styled.div`

`

const StyledProductCard = styled(DefaultStyledProductCard)(
  props => props.style
)

export { StyledProductCard }
