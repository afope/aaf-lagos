import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import { color, fontFamily, fontSize, lineHeight, space, textAlign, fontWeight, maxWidth } from '../../styles';


const SubHeaderTextWrapper = ({ htmlTag, ...props }) => {
  const SubHeaderText = styled[htmlTag]`
    ${fontFamily};
    ${fontWeight};
    ${maxWidth};
    ${color};
    ${lineHeight};
    ${space};
    ${fontSize};
    ${textAlign};
  `;

  return <SubHeaderText {...props} />;
};


SubHeaderTextWrapper.displayName = 'SubHeaderTextWrapper';

SubHeaderTextWrapper.propTypes = {
  htmlTag: propTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
};

SubHeaderTextWrapper.defaultProps = {
  htmlTag: 'h4',
  fontFamily: 'Asul, Lato, Tahoma',
  fontSize: '18px',
  lineHeight: '22px',
  fontWeight: '400',
};


export default SubHeaderTextWrapper;
