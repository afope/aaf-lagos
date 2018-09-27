import React from 'react';

import Container from '../../base-styled-components/Container';

import ColoredLine from '../../components/ColoredLine';


import Slider from './components/Slider';
import Masonry from './components/Masonry';
import Video from './components/Video';
import Grid from './components/Grid';


const HomePageLayout = (props) => (
  <Container
    justifyContent="flex-start"
    orientation="column"
    justifyContent="flex-start"
    flexible
    margin-top="20px"
  >
    <ColoredLine color="#DCDCDC" />
    <Video />
    <ColoredLine color="#DCDCDC" />
    <Masonry />


  </Container>

);

export default HomePageLayout;
