import React from 'react'

import {
  StyledHomePageContent,
  StyledH,
  StyledBody1,
  StyledAllImgContainer,
  StyledImg,
  StyledImgContainer,
  StyledImgTitle,
  StyledBestProductsContainer,
  StyledLeftButton,
  StyledRightButton,
  StyledFontAwesomeIcon,
  StyledBestProductsWrapper,
  StyledCarousel
} from './HomePageContent.styled'
import { useDispatch, useSelector } from 'react-redux'
import { checkIsLinkVisited, createBasicData, setDataFromFirebaseDatabase } from '../../../helper/helper'
import { actionAddData } from '../../../modules/CacheFirebaseData/CacheFirebaseData.actions'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import ProductCard from '../../../components/ProductCard/ProductCard'
import AddedToCartOverlay from '../../../overlays/AddedToCartOverlay/AddedToCartOverlay'

export const HomePageContent = () => {
  const [bestProducts, setBestProducts] = React.useState(null)
  const [isActiveAddedToCartLayer, setIsActiveAddedToCartLayer] = React.useState(false)
  const [windowInnerWidth, setWindowInnerWidth] = React.useState(false)
  const [isRightButtonDisabled, setIsRightButtonDisabled] = React.useState(false)
  const [slideValue, setSlideValue] = React.useState(0)
  const { visitedLinks, firebaseData } = useSelector(state => state.cacheFirebaseData)
  const dispatch = useDispatch()

  React.useEffect(() => {
    const isVisited = checkIsLinkVisited(visitedLinks, firebaseData, '/bestProducts', setBestProducts)
    if (isVisited) return
    dispatch(setDataFromFirebaseDatabase('/bestProducts', createBasicData, setBestProducts, actionAddData, '/bestProducts'))
  }, [dispatch, firebaseData, visitedLinks])

  React.useEffect(() => {
    setWindowInnerWidth(window.innerWidth)
  }, [])

  const slideLeft = React.useCallback(() => {
    if (slideValue === 0) {
      return
    }
    setSlideValue(prevState => prevState + 20)
    setIsRightButtonDisabled(false)
  }, [slideValue])

  const slideRight = React.useCallback(() => {
    if (windowInnerWidth > 1440) {
      if (slideValue === -60) {
        setIsRightButtonDisabled(true)
        return
      }
      setSlideValue(prevState => prevState - 20)
    } else if (windowInnerWidth > 1020 && windowInnerWidth <= 1440) {
      if (slideValue === -80) {
        setIsRightButtonDisabled(true)
        return
      }
      setSlideValue(prevState => prevState - 20)
    } else if (windowInnerWidth <= 1020) {
      if (slideValue === -100) {
        setIsRightButtonDisabled(true)
        return
      }
      setSlideValue(prevState => prevState - 20)
    }
  }, [slideValue, windowInnerWidth])

  return (
    <StyledHomePageContent>
      {
          isActiveAddedToCartLayer ?
            <AddedToCartOverlay
              setIsActiveAddedToCartLayer={setIsActiveAddedToCartLayer}
            />
            :
            null
          }
      <StyledH variant={'h1'}>Welcome to the FOOD SHOP</StyledH>
      <StyledAllImgContainer>
        <StyledImgContainer
          to={'products/vegetables/page/1'}
        >
          <StyledImg
            src={'./img/vegetables.png'}
            alt={'vegetables'}
          />
          <StyledImgTitle variant={'productImg'}>VEGETABLES</StyledImgTitle>
        </StyledImgContainer>
        <StyledImgContainer
          to={'products/fruits/page/1'}
        >
          <StyledImg
            src={'./img/fruits.png'}
            alt={'fruits'}
          />
          <StyledImgTitle variant={'productImg'}>FRUITS</StyledImgTitle>
        </StyledImgContainer>
      </StyledAllImgContainer>
      <StyledBody1 variant={'body1'}>
        Discover health and vitality at FOOD SHOP, where we&apos;re committed to providing the finest quality fruits and vegetables for a healthier lifestyle. Immerse yourself in vibrant fresh produce, carefully selected to support local farmers and free from harmful chemicals. Choose from our range of wholesome fruits and vegetables, bursting with natural goodness, offering both incredible taste and overall health benefits. Embark on a journey to better health with our produce loaded with vitamins, minerals, and antioxidants. Celebrate a nourishing lifestyle and savor the difference that fresh, wholesome foods bring to your life. Your path to a healthier, happier you starts at FOOD SHOP—explore the vibrant world of health through our produce and embrace the delicious path to well-being!
      </StyledBody1>
      <StyledH variant={'h2'}>Our Best Products</StyledH>
      <StyledCarousel>
        <StyledLeftButton
          variant={'customText'}
          onClick={slideLeft}
          isDisabled={slideValue === 0}
        >
          <StyledFontAwesomeIcon
            icon={faAngleLeft}
            $isDisabled={slideValue === 0}
          />
        </StyledLeftButton>
        <StyledBestProductsContainer>
          <StyledBestProductsWrapper
            $slideCarouselAmount={`${slideValue}rem`}
          >
            {
          bestProducts ?
            bestProducts.map(product => {
              const { img, price, producer, orderId, accessibility, variety, unit, category } = product
              return (
                <ProductCard
                  id={orderId}
                  img={img}
                  price={price}
                  producer={producer}
                  key={`${orderId}/bestProduct`}
                  accessibility={accessibility}
                  variety={variety}
                  unit={unit}
                  category={category}
                  setIsActiveAddedToCartLayer={setIsActiveAddedToCartLayer}
                />
              )
            })
            :
            null
        }
          </StyledBestProductsWrapper>
        </StyledBestProductsContainer>
        <StyledRightButton
          variant={'customText'}
          onClick={slideRight}
          isDisabled={isRightButtonDisabled}
        >
          <StyledFontAwesomeIcon
            icon={faAngleRight}
            $isDisabled={isRightButtonDisabled}
          />
        </StyledRightButton>
      </StyledCarousel>
    </StyledHomePageContent>
  )
}

export default HomePageContent
