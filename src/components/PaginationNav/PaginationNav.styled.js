import styled, { css } from 'styled-components'

const DefaultStyledPaginationNav = styled.nav`

`

const StyledPaginationNav = styled(DefaultStyledPaginationNav)(
  props => props.style
)

const StyledUl = styled.ul`
list-style: none;
display: flex;
justify-content: center;
align-items: center;
`

const StyledLi = styled.li`
padding:  0.4rem 0.4rem;
margin:  0.4rem 0.4rem;
border: 1px solid ${props => props.theme.mainColor};
background: ${props => props.theme.firstBackground};
color: ${props => props.theme.mainColor};
transition: all 0.1s ease-in-out;
width: 100%;
max-width: 3rem;
text-align: center;

&:hover {
  cursor: pointer;
  background: ${props => props.theme.mainColor};
  color: ${props => props.theme.firstBackground};
}

${
  props => props.$isActive && css`
    background: ${props => props.theme.mainColor};
    color: ${props => props.theme.firstBackground};
  
    &:hover {
    cursor: not-allowed;
    background: ${props => props.theme.mainColor};
    color: ${props => props.theme.firstBackground};
  }
  `
}
`

const StyledDots = styled.p`
color: ${props => props.theme.mainColor};
`

const StyledPaginationContainer = styled.div`
max-width: 5rem;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`

export { StyledPaginationNav, StyledUl, StyledLi, StyledDots, StyledPaginationContainer }
