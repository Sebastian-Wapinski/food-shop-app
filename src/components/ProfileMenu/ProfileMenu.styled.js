import { Link } from 'react-router-dom'
import styled from 'styled-components'

const DefaultStyledProfileMenu = styled.div`
position: absolute;
top: 100%;
left: 0;
width: 100%;
min-height: 5rem;
background-color: ${props => props.theme.firstBackground};
border: 1px solid ${props => props.theme.mainColor};
z-index: 501;
`

const StyledProfileMenu = styled(DefaultStyledProfileMenu)(
  props => props.style
)

const StyledUl = styled.ul`
list-style: none;
`

const StyledLi = styled.li`
padding: 0.7rem;
color: ${props => props.theme.secondTextColor};
background-color: ${props => props.theme.firstBackground};
z-index: 501;

&:hover {
  cursor: pointer;
  color: ${props => props.theme.firstTextColor};
  background-color: ${props => props.theme.mainColor};
}
`

const StyledLink = styled(Link)`

`

const StyledUserLi = styled.li`
width: 100%;
padding: 0.7rem;
text-align: center;
z-index: 501;
text-overflow: ellipsis;
overflow: hidden;
white-space: nowrap;
`

export {
  StyledProfileMenu,
  StyledUl,
  StyledLi,
  StyledLink,
  StyledUserLi
}
