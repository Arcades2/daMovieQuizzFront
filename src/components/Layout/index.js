import React from 'react';
import PropTypes from 'prop-types';
import { Reset } from 'styled-reset';
import Header from '../Header';
import { GlobalStyle, StyledMainContent } from './styles';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const Layout = ({ children }) => {
  return (
    <div>
      <Reset />
      <GlobalStyle />
      <Header />
      <StyledMainContent>{children}</StyledMainContent>
    </div>
  );
};

Layout.propTypes = propTypes;

export default Layout;
