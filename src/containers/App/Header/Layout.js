import React from 'react';

import Image from '../../../base-styled-components/Image';
import Container from '../../../base-styled-components/Container';
import HeaderText from '../../../base-styled-components/HeaderText';

import Menu from './components/Menu';


const HeaderLayout = () => (
  <Container
    orientation="row"
    width="100%"
    flexible
    background="white"
    color="black"
    mx="1rem"
  >
    <HeaderText
      color="black"
      fontSize="60px"
      fontWeight="400"
      maxWidth="30%"
      lineHeight="65px"
      py="20px"
      pl="2rem"
      mt="1rem"
      ml="5rem"
      mb="1rem"
    >
      {"African Artists' Foundation"}
    </HeaderText>

    <Menu />

  </Container>
);

export default HeaderLayout;
