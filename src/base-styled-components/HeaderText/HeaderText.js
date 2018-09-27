import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import { color, fontFamily, fontSize, lineHeight, space, textAlign, fontWeight, maxWidth } from '../../styles';


const HeaderTextWrapper = ({ htmlTag, ...props }) => {
  const HeaderText = styled[htmlTag]`
    ${fontFamily};
    ${fontWeight};
    ${maxWidth};
    ${color};
    ${lineHeight};
    ${space};
    ${fontSize};
    ${textAlign};
  `;

  return <HeaderText {...props} />;
};


HeaderTextWrapper.displayName = 'HeaderTextWrapper';

HeaderTextWrapper.propTypes = {
  htmlTag: propTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
};

HeaderTextWrapper.defaultProps = {
  htmlTag: 'h1',
  fontFamily: 'Tahoma',
  fontSize: '20px',
  lineHeight: '20px',
  fontWeight: '400',
};


export default HeaderTextWrapper;
