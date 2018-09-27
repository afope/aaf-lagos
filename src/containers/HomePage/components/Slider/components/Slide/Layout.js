import React from 'react'

import Image from '../../../../../../base-styled-components/Image';

const Slide = ({ image }) => (
  <Image
    src={image.source}
    width="40%"
    height="auto"
    display="inline-block"
  >

  </Image>
);

export default Slide;
