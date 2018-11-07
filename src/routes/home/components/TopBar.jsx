import React, { Component } from 'react';
import './TopBar.css';
import PropTypes from 'prop-types';
/**
 * BEM
 * Block
 * Element
 * Modifier
*/

const TopBar = ({ city, showCityLayer }) => {
  return(
    <div className="topBar">
      <div className="topBar__city" onClick={ showCityLayer }>{ city }</div>
      <div className="topBar__search"></div>
      <div className="topBar__scan"></div>
    </div>
  );
};

TopBar.propTypes = {
  city: PropTypes.string.isRequired,
  showCityLayer: PropTypes.func.isRequired,
};
export default TopBar;
