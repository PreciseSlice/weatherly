import React from 'react';
import Search from './Search';

export default function Welcome (props) {
  return (
    <div className="welcome-container">
      <h1>ATMOS</h1>
      <h2>weather</h2>
      <Search getWeather={props.getWeather}/>
    </div>
  )
}