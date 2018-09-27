import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';


import { color, fontFamily, fontSize, fontWeight, lineHeight, space, textAlign } from '../../styles';


const BodyTextWrapper = (props) => {
  const { htmlTag } = props;

  const BodyText = styled[htmlTag]`
    ${color};
    ${fontSize};
    ${textAlign};
    ${space};
    ${lineHeight};
    ${fontFamily};
    ${fontWeight};

    ${({ bold }) => bold && 'font-family: Helvetica'};
  `;

  return <BodyText {...props} />;
};


BodyTextWrapper.displayName = 'BodyTextWrapper';

BodyTextWrapper.propTypes = {
  htmlTag: propTypes.oneOf(['p', 'span', 'label']),
};

BodyTextWrapper.defaultProps = {
  htmlTag: 'p',
  fontSize: '13px',
  lineHeight: '21px',
  fontFamily: 'Lato, Tahoma'
};


export default BodyTextWrapper;
