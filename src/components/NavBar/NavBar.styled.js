import styled, { css } from 'styled-components'
import { responsiveSizes } from '../style/responsiveSizes'

const DefaultStyledNavBar = styled.div`
display: flex;
justify-content: center;
width: 100%;
background-color: ${props => props.theme.mainColor};
`

const StyledNavBar = styled(DefaultStyledNavBar)(
  props => props.style
)

const StyledNavUl = styled.ul`
list-style-type: none;
display: flex;
width: 100%;
max-width: ${responsiveSizes.pageWidth};
padding: 0 1rem;

${
  props => props.$floorUl === '1Floor' && css`
  position: absolute;
  left: 0;
  top: 100%;
  font-size: 2rem;
  `
}
`

const StyledNavLi = styled.li`
font-size: 3rem;
position: relative;

${
  props => props.$floor === '1Floor' && css`
  display: block;
  /* position: absolute;
  left: 0;
  top: 100%; */
  font-size: 2rem;
  `
}

${
  props => props.$floor === '2Floor' && css`
  font-size: 1rem;
  display: none;
  `
}
`

export { StyledNavBar, StyledNavUl, StyledNavLi }
