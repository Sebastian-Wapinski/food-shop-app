import styled, { css } from 'styled-components'

const DefaultStyledTypography = styled.span`

${
  props => props.$variant === 'h1' && css`
  font-family: Lato;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 2.25rem;
  letter-spacing: 0.15px;
  text-align: left;
  color: ${props => props.theme.secondTextColor};
  `
}

${
  props => props.$variant === 'h2' && css`
  font-family: Lato;
  font-size: 2rem;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: 0.15px;
  text-align: left;
  color: ${props => props.theme.secondTextColor};
  `
}

${
  props => props.$variant === 'body1' && css`
  font-family: Lato;
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.5rem;
  letter-spacing: 0.15px;
  text-align: left;
  color: ${props => props.theme.secondTextColor};
  `
}

${
  props => props.$variant === 'body2' && css`
  font-family: Lato;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1rem;
  letter-spacing: 0.15px;
  text-align: center;
  color: ${props => props.theme.firstTextColor};
  `
}

${
  props => props.$variant === 'productImg' && css`
  font-family: Lato;
  font-size: 3.5rem;
  font-weight: 600;
  line-height: 1.5rem;
  letter-spacing: 0.15px;
  text-align: center;
  color: ${props => props.theme.firstTextColor};
  `
}

`

const StyledTypography = styled(DefaultStyledTypography)(
  props => props.style
)

export { StyledTypography }
