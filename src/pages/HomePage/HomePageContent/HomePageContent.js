import React from 'react'

import {
  StyledHomePageContent,
  StyledH1,
  StyledBody1,
  StyledH2,
  StyledAllImgContainer,
  StyledImg,
  StyledImgContainer,
  StyledImgTitle
} from './HomePageContent.styled'

export const HomePageContent = () => {
  return (
    <StyledHomePageContent>
      <StyledH2 variant={'h2'}>CHECK OUT MOST POPULAR PRODUCTS!!!</StyledH2>
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
      <StyledH1 variant={'h1'}>Welcome to the FOOD SHOP</StyledH1>
      <StyledBody1 variant={'body1'}>
        Discover health and vitality at FOOD SHOP, where we&apos;re committed to providing the finest quality fruits and vegetables for a healthier lifestyle. Immerse yourself in vibrant fresh produce, carefully selected to support local farmers and free from harmful chemicals. Choose from our range of wholesome fruits and vegetables, bursting with natural goodness, offering both incredible taste and overall health benefits. Embark on a journey to better health with our produce loaded with vitamins, minerals, and antioxidants. Celebrate a nourishing lifestyle and savor the difference that fresh, wholesome foods bring to your life. Your path to a healthier, happier you starts at FOOD SHOP—explore the vibrant world of health through our produce and embrace the delicious path to well-being!
      </StyledBody1>
    </StyledHomePageContent>
  )
}

export default HomePageContent
