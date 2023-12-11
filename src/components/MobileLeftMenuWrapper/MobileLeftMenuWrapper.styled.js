import styled, { css } from 'styled-components'
import { responsiveSizes } from '../style/responsiveSizes'

const StyledDarkOverlay = styled.div`
display: none;
@media (max-width: ${responsiveSizes.mediumSize}) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    
    ${
      props => props.$showWrapper && css`
      background-color: rgba(0, 0, 0, 0.5);
      height: 100%;
      width: 100%;
      z-index: 400;
    `
    }
}
`

const StyledMenuBackground = styled.div`
display: none;
@media (max-width: ${responsiveSizes.mediumSize}) {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 0;
  transition: all 0.3s ease-in-out;
  height: 100%;
  background-color: white;
  overflow: hidden;

${
  props => props.$showWrapper && css`
  width: ${responsiveSizes.mobileMenu};
  z-index: 401;
  `
}
}
`

export {
  StyledDarkOverlay,
  StyledMenuBackground
}
