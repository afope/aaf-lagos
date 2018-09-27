import React, { Component } from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

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



// The number of columns change by resizing the window
class MasonryLayout extends Component {
  render() {
    return (
      <Container
        flexible
        orientation="column"
      >

      <Masonry columnsCount={3} gutter={40}>
        <Container>
          <Image
            src={ImageOne}
            max-width="100%"
            width="100%"
            height="auto"
          >
          </Image>
          <SubHeaderText
            mb="10px"
          >
            Lorem Ipsum
          </SubHeaderText>
          <BodyText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis diam vel velit venenatis aliquet.
          </BodyText>
        </Container>

        <Container>
          <Image
            src={ImageTwo}
            max-width="100%"
            width="350px"
            height="auto"
          >
          </Image>
          <SubHeaderText
            mb="10px"
          >
            Lorem Ipsum
          </SubHeaderText>
          <BodyText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis diam vel velit venenatis aliquet.
          </BodyText>
        </Container>

        <Container>
          <Image
            src={ImageThree}
            max-width="100%"
            width="350px"
            height="auto"
          >
          </Image>
          <SubHeaderText
            mb="10px"
          >
            Lorem Ipsum
          </SubHeaderText>
          <BodyText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis diam vel velit venenatis aliquet.
          </BodyText>
        </Container>

        <Container>
          <Image
            src={ImageFour}
            max-width="100%"
            width="350px"
            height="auto"
          >
          </Image>
          <SubHeaderText
            mb="10px"
          >
            Lorem Ipsum
          </SubHeaderText>
          <BodyText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis diam vel velit venenatis aliquet.
          </BodyText>
        </Container>

        <Container>
          <Image
            src={ImageFive}
            max-width="100%"
            width="350px"
            height="auto"
          >
          </Image>
          <SubHeaderText
            mb="10px"
          >
            Lorem Ipsum
          </SubHeaderText>
          <BodyText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis diam vel velit venenatis aliquet.
          </BodyText>
        </Container>

        <Container>
          <Image
            src={ImageSix}
            max-width="100%"
            width="350px"
            height="auto"
          >
          </Image>
          <SubHeaderText
            mb="10px"
          >
            Lorem Ipsum
          </SubHeaderText>
          <BodyText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis diam vel velit venenatis aliquet.
          </BodyText>
        </Container>


      </Masonry>
      </Container>

    );
  }
}

export default MasonryLayout;
