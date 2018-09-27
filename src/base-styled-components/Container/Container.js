import React from 'react';
import propTypes from 'prop-types';
import styled, { css } from 'styled-components';

import dimensions from '../../theme/dimensions';

import {
  alignItems,
  background,
  border,
  borderRadius,
  boxShadow,
  display,
  flex,
  flexBasis,
  flexDirection,
  flexWrap,
  height,
  justifyContent,
  position,
  space,
  width,
  overflow,
} from '../../styles';


const allowedHtmlTags = [
  'div',
  'section',
  'form',
  'aside',
  'header',
  'footer',
  'nav',
];

const applyColumnFormSpacing = ({ htmlTag, orientation }) => {
  if (htmlTag === 'form' && orientation === 'column') {
    return css`
      .ant-form-item {
        margin-bottom: .6rem;
        width: ${dimensions.full};
        ${({ alternate }) => alternate ? 'left: 2rem' : 'top: 2rem'};
      }
    `;
  }

  return null;
};

const makeFlexibleContainer = ({ flexible }) => flexible && css`
  display: flex;
  ${flex};
  ${flexDirection};
  ${alignItems};
  ${justifyContent};
  ${flexBasis};
  ${flexWrap};
`;


const ContainerWrapper = (props) => {
  const { htmlTag } = props;

  const Container = styled[htmlTag]`
    ${height};
    ${width};
    ${background};
    ${position};
    ${space};
    ${border};
    ${borderRadius};
    ${boxShadow};
    ${display};
    ${overflow};

    ${makeFlexibleContainer};
    ${applyColumnFormSpacing};
  `;

  return <Container {...props} />;
};


ContainerWrapper.displayName = 'ContainerWrapper';

ContainerWrapper.propTypes = {
  htmlTag: propTypes.oneOf(allowedHtmlTags),
};

ContainerWrapper.defaultProps = {
  htmlTag: 'div',
  flexible: false,
  orientation: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
};


export default ContainerWrapper;
