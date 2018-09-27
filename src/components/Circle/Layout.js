import React from 'react';
import PropTypes from 'prop-types';

import Container from 'base-styled-components/Container';
import BodyText from 'base-styled-components/BodyText';
import { getInitials } from 'utils/string';
import colors from 'theme/colors';


const AvatarLayout = () => (
  <Container
    height={size}
    width={size}
    justifyContent="center"
    borderRadius="50%"
    flexible
    {...props}
  >
  </Container>
);

AvatarLayout.displayName = 'AvatarLayout';

AvatarLayout.propTypes = {
  size: PropTypes.number.isRequired,
  fullName: PropTypes.string,
  imageUrl: PropTypes.string,
  type: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
};

AvatarLayout.defaultProps = {
  type: 'circle',
  size: 2.3,
  background: colors.white,
};

export default AvatarLayout;
