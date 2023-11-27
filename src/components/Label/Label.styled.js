import styled, { css } from 'styled-components'

const DefaultStyledLabel = styled.label`
display: flex;
justify-content: center;
margin: 0.6rem 0;
color: ${props => props.theme.secondTextColor};
font-weight: 500;
cursor: pointer;
${
  props => props.required === true && css`
  &::before {
    content:'*'
  }
  `
}
`

const StyledLabel = styled(DefaultStyledLabel)(
  props => props.style
)

export { StyledLabel }
