import React from 'react';


import Container from '../../../../../base-styled-components/Container';


import Nav from './components/Nav';


const MenuLayout = () => (
  <Container
    orientation="column"
    justifyContent="space-between"
    width="100%"
    flexible
    mx="1rem"
  >
    < Nav />

  </Container>
);

export default MenuLayout;
