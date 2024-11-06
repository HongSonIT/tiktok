import React from 'react';
import ProTypes from 'prop-types';
import './GlobalStyle.scss';

const GlobalStyle = ({ children }) => {
    return React.Children.only(children);
};

GlobalStyle.prototype = {
    children: ProTypes.node.isRequired,
};

export default GlobalStyle;
