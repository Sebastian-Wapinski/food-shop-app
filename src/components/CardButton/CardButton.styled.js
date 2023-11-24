import styled, { css } from 'styled-components'

const DefaultStyledCardButton = styled.button`

${
  props => props.$variant === 'changeQuantity' && css`
  color: ${props => props.theme.secondTextColor};
  background-color: ${props => props.theme.firstBackground};
  font-size: 1.2rem;
  width: 2rem;
  height: 2rem;
  transition: all 0.1s ease-in-out;

  &:hover {
    color: ${props => props.theme.thirdTextColor};
    cursor: pointer;
  }
  `
}

${
  props => props.$variant === 'addToCart' && css`
  color: ${props => props.theme.firstTextColor};
  background-color: ${props => props.theme.mainColor};
  font-size: 0.8rem;
  width: 100%;
  transition: all 0.1s ease-in-out;
  border: 1px solid transparent;
  margin: 0 0 0 0.5rem;

  &:hover {
    color: ${props => props.theme.mainColor};
    background-color: ${props => props.theme.firstBackground};
    border: 1px solid ${props => props.theme.mainColor};
    cursor: pointer;
  }
  `
}

`

const StyledCardButton = styled(DefaultStyledCardButton)(
  props => props.style
)

export { StyledCardButton }
