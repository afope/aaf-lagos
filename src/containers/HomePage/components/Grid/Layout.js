import React, { Component } from 'react';
import StackGrid, { transitions } from "react-stack-grid";

import Image from '../../../../base-styled-components/Image';
import Container from '../../../../base-styled-components/Container';
import HeaderText from '../../../../base-styled-components/HeaderText';
import SubHeaderText from '../../../../base-styled-components/SubHeaderText';
import BodyText from '../../../../base-styled-components/BodyText';


import ImageOne from './assets/one.jpg';
import ImageTwo from './assets/two.jpg';
import ImageThree from './assets/three.jpg';
import ImageFour from './assets/four.jpg';
import ImageFive from './assets/five.jpg';
import ImageSix from './assets/six.jpg';
import ImageSeven from './assets/seven.jpg';


const { scaleDown } = transitions;

class GridLayout extends Component {
  render() {
    return (
      <Container
        flexible
        orientation="column"
      >

      </Container>

    );
  }
}

export default GridLayout;
