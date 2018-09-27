import PropTypes from 'prop-types';
import styled from 'styled-components';

import { height, width } from '../../styles';


const Image = styled.img`
  ${width};
  ${height};
`;


Image.displayName = 'Image';

Image.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

Image.defaultProps = {};


export default Image;
