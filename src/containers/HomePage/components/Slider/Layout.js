import React from 'react';

import Container from '../../../../base-styled-components/Container';

import Slide from './components/Slide';
import LeftArrow from './components/Arrows/components/LeftArrow';
import RightArrow from './components/Arrows/components/RightArrow';

const SliderPageLayout = ({images, goToPrevSlide, goToNextSlide, translateValue}) => (
    <Container
      flexible
      vertical-align="middle"
      display="inline-block"
      width="100%"
      white-space="nowrap"
      overflow="auto"
      mt="40px"
      mb="40px"
    >

      {
        images.map((image, i) => (
          <Slide key={image.name} image={image} />
        ))
      }

    </Container>
);


export default SliderPageLayout;
