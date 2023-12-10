import styled from 'styled-components'

const DefaultStyledUserActions = styled.div`
position: fixed;
top: 0;
left: 0;
z-index: 500;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
`

const StyledUserActions = styled(DefaultStyledUserActions)(
  props => props.style
)

const StyledDarkOverlay = styled.div`
position: fixed;
top: 0;
left: 0;
z-index: 500;
display: flex;
justify-content: center;
align-items: center;
background-color: rgba(0, 0, 0, 0.4);
width: 100%;
height: 100%;
`

export {
  StyledUserActions,
  StyledDarkOverlay
}
