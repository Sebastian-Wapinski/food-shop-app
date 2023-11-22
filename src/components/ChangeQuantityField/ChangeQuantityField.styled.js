import styled from 'styled-components'

const DefaultStyledChangeQuantityField = styled.input`
width: 2rem;
height: 2rem;
text-align: center;
border: 1px solid ${props => props.theme.mainColor};

  &::-webkit-inner-spin-button, &::-webkit-outer-spin-button {
    display: none;
  }
`

const StyledChangeQuantityField = styled(DefaultStyledChangeQuantityField)(
  props => props.style
)

export { StyledChangeQuantityField }
