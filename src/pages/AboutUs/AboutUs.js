import React from 'react'

import { StyledAboutUs, StyledH1, StyledBody1 } from './AboutUs.styled'
import { Helmet } from 'react-helmet-async'

export const AboutUs = () => {
  return (
    <StyledAboutUs>
      <Helmet>
        <title>About Us</title>
        <meta
          name={'About Us'}
          content={'Describes FOOD SHOP journey in local market'}
        />
      </Helmet>
      <StyledH1 variant={'h1'}>About FOOD SHOP</StyledH1>
      <StyledBody1 variant={'body1'}>
        Since its humble beginnings in 2010, Food Shop has been a local entrepreneurial venture that has evolved with the changing times. What started as a brick-and-mortar establishment quickly adapted to the digital age, venturing into the online marketplace to reach a wider audience. The journey began with a simple mission: to provide the community with access to the freshest, high-quality, and eco-friendly food products.

      </StyledBody1>
      <StyledBody1 variant={'body1'}>
        In the early years, Food Shop established itself as a cornerstone of the community, offering a diverse range of locally-sourced goods. As the demand for online shopping grew, the store recognized the need to embrace e-commerce. With a dedicated team and a commitment to customer satisfaction, Food Shop took its offerings to the digital realm, making its products accessible to customers beyond the confines of the local neighborhood.

      </StyledBody1>
      <StyledBody1 variant={'body1'}>
        As the years passed, Food Shop continued to refine its focus on quality and sustainability. Today, the store stands as a beacon of excellence in the online food retail landscape. While the initial product range consisted of a broad selection of locally produced items, Food Shop has currently narrowed its focus to provide exclusively selected, premium organic vegetables and fruits. This strategic shift ensures that customers receive only the finest and freshest produce, reflecting the store&apos;s unwavering dedication to delivering excellence in every order.

      </StyledBody1>
      <StyledBody1 variant={'body1'}>
        Food Shop&apos;s journey is not just a story of growth and adaptation; it&apos;s a testament to the commitment of a small local business to its community and the environment. From the early days as a local grocer to its current status as a prominent online purveyor of top-tier fresh and eco-conscious food items, Food Shop continues to evolve, leaving a lasting impact on the culinary landscape.

      </StyledBody1>
    </StyledAboutUs>
  )
}

export default AboutUs
