import styled from 'styled-components'

const DefaultStyledCartButton = styled.div`

`

const StyledCartButton = styled(DefaultStyledCartButton)(
  props => props.style
)

export { StyledCartButton }
