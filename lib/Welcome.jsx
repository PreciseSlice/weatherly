import React from 'react';
import Search from './Search';
import PropTypes from 'prop-types';

export default function Welcome (props) {
  return (
    <div className="welcome-container">
      <h1>ATMOS</h1>
      <h2>weather</h2>
      <Search getWeather={props.getWeather}/>
    </div>
  );
}

Welcome.propTypes = {
  getWeather: PropTypes.func
};