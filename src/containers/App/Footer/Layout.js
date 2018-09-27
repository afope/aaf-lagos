import React from 'react';

import Image from '../../../base-styled-components/Image';
import Container from '../../../base-styled-components/Container';
import BodyText from '../../../base-styled-components/BodyText';


const FooterLayout = () => (
  <Container
    orientation="column"
    mt="50px"
    alignItems="center"
    justifyContent="center"
    flexible
    width="100%"
    background="#000"
    color="white"
    height="400px"
  >

    <BodyText
      color="white"
    >
      Twitter
    </BodyText>
    <BodyText
      color="white"
    >
      Facebook
    </BodyText>
    <BodyText
      color="white"
    >
      Instagram
      </BodyText>
  </Container>
);

export default FooterLayout;
