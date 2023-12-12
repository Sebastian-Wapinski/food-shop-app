import styled, { css } from 'styled-components'

const DefaultStyledButton = styled.button`

${
  props => props.$variant === 'changeQuantity' && css`
  color: ${props => props.theme.secondTextColor};
  background-color: ${props => props.theme.firstBackground};
  font-size: 1.2rem;
  width: 2rem;
  height: 2rem;
  transition: all 0.1s ease-in-out;
  border: 1px solid ${props => props.theme.mainColor};

  &:hover {
    color: ${props => props.theme.thirdTextColor};
    cursor: pointer;
  }

  &:disabled {
    color: ${props => props.theme.secondTextColor};
    cursor: not-allowed;
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

${
  props => props.$variant === 'delete' && css`
  color: ${props => props.theme.firstTextColor};
  background-color: ${props => props.theme.mainColor};
  font-size: 0.8rem;
  width: 3rem;
  height: 3rem;
  transition: all 0.1s ease-in-out;
  border: 1px solid transparent;

  &:hover {
    color: ${props => props.theme.mainColor};
    background-color: ${props => props.theme.firstBackground};
    border: 1px solid ${props => props.theme.mainColor};
    cursor: pointer;
  }
  `
}

${
  props => props.$variant === 'customText' && css`
  color: ${props => props.theme.firstTextColor};
  background-color: ${props => props.theme.mainColor};
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.7rem 2rem;
  margin: 0 1rem;
  transition: all 0.1s ease-in-out;
  border: 1px solid transparent;

  &:hover {
    color: ${props => props.theme.mainColor};
    background-color: ${props => props.theme.firstBackground};
    border: 1px solid ${props => props.theme.mainColor};
    cursor: pointer;
  }

  &:disabled {
    cursor: not-allowed;
    color: ${props => props.theme.firstBackground};
    background-color: ${props => props.theme.mainColorLighterShade};
    border: 1px solid ${props => props.theme.mainColorLighterShade};
  }
  `
}

`

const StyledButton = styled(DefaultStyledButton)(
  props => props.style
)

export { StyledButton }
