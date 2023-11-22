import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

const DefaultStyledNavContainer = styled.div`
transition: all 0.2s ease-in-out;
position: absolute;
height: 0;
top: 100%;
left: 0;
width: 100%;
background-color: ${props => props.theme.firstBackground};
overflow: hidden;
z-index: 9999;

${
  props => props.$isActive && css`
  height: 20rem;
  box-shadow: 0px 20px 30px -20px ${props => props.theme.mainColor};
  display: grid;
  justify-content: center;
  grid-template-columns: 20% 1% 79%;
  grid-template-rows: 20% 80%;
  grid-template-areas: 
  "StyledFirstFloorNavUlArea StyledVerticalLineArea StyledTabTitleArea"
  "StyledFirstFloorNavUlArea StyledVerticalLineArea StyledSecondFloorNavUlArea";
  `
}
`

const StyledNavContainer = styled(DefaultStyledNavContainer)(
  props => props.style
)

const StyledFirstFloorNavUl = styled.ul`
display: grid;
grid-area: StyledFirstFloorNavUlArea;
grid-template-columns: 1fr;
grid-template-rows: 3rem;
padding: 1rem;
`

const StyledFirstFloorNavLi = styled(NavLink)`
transition: all 0.2s ease-in-out;
list-style-type: none;
display: grid;
align-self: start;
padding: 1rem 2rem;
width: 100%;
cursor: pointer;
position: relative;
color: ${props => props.theme.secondTextColor};
&:hover{
  color: ${props => props.theme.thirdTextColor};
  &::after {
    content: ">";
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
    font-size: 1.3rem;
  }
}
`

const StyledSecondFloorNavUl = styled.ul`
list-style-type: none;
display: grid;
grid-area: StyledSecondFloorNavUlArea;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(4, 1fr);
grid-auto-flow: column;
padding: 2rem 2rem;
gap: 0.5rem;
`

const StyledSecondFloorNavLi = styled(NavLink)`
transition: all 0.2s ease-in-out;
display: grid;
padding: 1rem 3rem 1rem 0;
cursor: pointer;
color: ${props => props.theme.secondTextColor};

&:hover{
  color: ${props => props.theme.thirdTextColor};
}
`

const StyledTabTitle = styled.div`
display: grid;
grid-area: StyledTabTitleArea;
align-self: flex-start;
padding: 1rem 2rem;
margin: 1rem 0;
width: 90%;
font-size: 1.5rem;
border-bottom: 1px solid ${props => props.theme.mainColor};
color: ${props => props.theme.secondTextColor};
`

const StyledVerticalLine = styled.div`
display: grid;
grid-area: StyledVerticalLineArea;
border-left: 1px solid ${props => props.theme.mainColor};
margin: 1rem 0;
`

export {
  StyledNavContainer,
  StyledFirstFloorNavUl,
  StyledFirstFloorNavLi,
  StyledSecondFloorNavUl,
  StyledSecondFloorNavLi,
  StyledVerticalLine,
  StyledTabTitle
}
