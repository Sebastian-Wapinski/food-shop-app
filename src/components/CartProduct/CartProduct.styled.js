import styled from 'styled-components'

const DefaultStyledCartProduct = styled.div`

`

const StyledCartProduct = styled(DefaultStyledCartProduct)(
  props => props.style
)

const StyledImg = styled.div`

`

const StyledContainerProductInfo = styled.div`

`

const StyledName = styled.div`

`

const StyledProducer = styled.div`

`

const StyledUnitPrice = styled.div`

`

const StyledContainerPriceQuantity = styled.div`

`

const StyledPrice = styled.div`

`

const StyledAccessibility = styled.div`

`

export {
  StyledCartProduct,
  StyledImg,
  StyledContainerProductInfo,
  StyledName,
  StyledProducer,
  StyledUnitPrice,
  StyledContainerPriceQuantity,
  StyledPrice,
  StyledAccessibility
}
