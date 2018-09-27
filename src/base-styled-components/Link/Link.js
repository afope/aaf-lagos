import PropTypes from 'prop-types';
import { Link as BaseLink } from 'react-router-dom';
import styled from 'styled-components';


import { color, fontSize } from '../../styles';


const Link = styled(BaseLink)`
  ${color};
  ${fontSize};
  transition: all .25s ease-in-out;
  text-decoration: none;

  &:hover {
  }
`;


Link.displayName = 'Link';

Link.propTypes = {
  colors: PropTypes.string,
};

Link.defaultProps = {
  fontSize: 0.9,
};


export default Link;
