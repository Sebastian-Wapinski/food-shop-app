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
      <StyledH1 variant={'h1'}>Welcome to the FOOD SHOP</StyledH1>
      <StyledBody1 variant={'body1'}>
        Discover the vibrant world of health and vitality with our exquisite selection of wholesome foods! At FOOD SHOP,
        we believe in the transformative power of nutrition and the impact it has on your overall well-being. Our commitment
        to providing you with the finest quality fruits and vegetables stems from a passion for promoting a healthier lifestyle.
      </StyledBody1>
      <StyledBody1 variant={'body1'}>
        Immerse yourself in the colors and flavors of our bountiful array of fresh produce. From crisp, succulent apples
        to the juiciest berries, each item has been carefully selected to ensure that you and your family receive the nutrients
        essential for a balanced diet. We take pride in supporting local farmers who share our dedication to sustainable and organic
        farming practices.
      </StyledBody1>
      <StyledBody1 variant={'body1'}>
        Why choose our range of fruits and vegetables? Not only do they burst with natural goodness, but they are also
        free from harmful chemicals and pesticides. We understand the importance of offering you food that not only tastes
        incredible but also contributes to your overall health. Whether you are an avid chef crafting culinary masterpieces
        or someone seeking simple, nutritious snacks, our selection caters to every palate.
      </StyledBody1>
      <StyledBody1 variant={'body1'}>
        Embark on a journey to better health and vitality by incorporating our fresh produce into your daily meals. Loaded
        with vitamins, minerals, and antioxidants, these natural wonders provide a multitude of benefits for your body and mind.
        Boost your immune system, enhance your energy levels, and indulge in the pure pleasure of flavors that only Mother Nature
        can provide.
      </StyledBody1>
      <StyledBody1 variant={'body1'}>
        Join us in celebrating the beauty of a nourishing lifestyle. Explore our collection of fruits and vegetables, each brimming
        with the goodness that nature intended. Make a choice for your health, and savor the difference that fresh, wholesome foods
        can bring to your life. Your journey to a healthier, happier you starts here at FOOD SHOP. Explore the
        vibrant world of health through our produce and embrace the delicious path to well-being!
      </StyledBody1>
      <StyledH2 variant={'h2'}>CHECK OUT MOST POPULAR PRODUCTS!!!</StyledH2>
      <StyledAllImgContainer>
        <StyledImgContainer
          to={'products/vegetables'}
        >
          <StyledImg
            src={'./img/vegetables.png'}
            alt={'vegetables'}
          />
          <StyledImgTitle variant={'productImg'}>VEGETABLES</StyledImgTitle>
        </StyledImgContainer>
        <StyledImgContainer
          to={'products/fruits'}
        >
          <StyledImg
            src={'./img/fruits.png'}
            alt={'fruits'}
          />
          <StyledImgTitle variant={'productImg'}>FRUITS</StyledImgTitle>
        </StyledImgContainer>
      </StyledAllImgContainer>
    </StyledHomePageContent>
  )
}

export default HomePageContent
