import React, { Component } from 'react';
import Vimeo from '@u-wave/react-vimeo';
import ReactPlayer from 'react-player'



import Container from '../../../../base-styled-components/Container';

const divStyle = {
  background: 'white',
};


 class VideoLayout extends Component {
   render() {
     return (
       <Container
        flexible
        justifyContent="center"
        width="100%"
        mx="1rem"
        my="1rem"
        bg="white"
       >
        <ReactPlayer
          url='https://vimeo.com/265735518'
          width={1000}
          height={600}
          style={divStyle}
          muted={true}
          playing
          loop
        />
       </Container>

     );
   }
 }



 export default VideoLayout;
