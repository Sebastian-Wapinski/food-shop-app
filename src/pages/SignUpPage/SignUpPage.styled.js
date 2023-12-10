import styled from 'styled-components'

const DefaultStyledSignUpPage = styled.div`
z-index: 501;
`

const StyledSignUpPage = styled(DefaultStyledSignUpPage)(
  props => props.style
)

export { StyledSignUpPage }
