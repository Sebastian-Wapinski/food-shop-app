import styled from 'styled-components'

const DefaultStyledPreviewCartOverlay = styled.div`
position: absolute;
top: 100%;
right: 0;
border: 1px solid black;
background-color: white;
z-index: 201;
`

const StyledPreviewCartOverlay = styled(DefaultStyledPreviewCartOverlay)(
  props => props.style
)

export { StyledPreviewCartOverlay }
