import styled from 'styled-components'

const DefaultStyledChangeQuantityField = styled.input`
width: 2rem;
height: 2rem;
text-align: center;
`

const StyledChangeQuantityField = styled(DefaultStyledChangeQuantityField)(
  props => props.style
)

export { StyledChangeQuantityField }
