import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

function DefaultLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default DefaultLayout;
