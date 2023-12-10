import styled from 'styled-components'

const DefaultStyledRecoveryPasswordPage = styled.div`
z-index: 501;
`

const StyledRecoveryPasswordPage = styled(DefaultStyledRecoveryPasswordPage)(
  props => props.style
)

export { StyledRecoveryPasswordPage }
