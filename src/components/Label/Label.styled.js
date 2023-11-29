import styled, { css } from 'styled-components'

const DefaultStyledLabel = styled.label`

${
props => props.$variant === 'text' && css`
  display: flex;
  justify-content: flex-start;
  margin: 0.6rem 0;
  color: ${props => props.theme.secondTextColor};
  font-weight: 400;
  cursor: pointer;
  ${
    props => props.required === true && css`
    &::before {
      content:'*'
    }
    `
  }
`
}

${
props => props.$variant === 'radio' && css`
  color: ${props => props.theme.secondTextColor};
  font-weight: 400;
  font-size: 1.1rem;
  cursor: pointer;
`
}
`

const StyledLabel = styled(DefaultStyledLabel)(
  props => props.style
)

export { StyledLabel }
