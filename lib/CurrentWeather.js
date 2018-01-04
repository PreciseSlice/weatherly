import React from 'react';
import {data} from './mockData';

export default class CurrentWeather extends React.Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <div className="current-container">
        <h3>{data.hourly_forecast[0].FCTTIME.pretty}</h3>
        <h3>{data.current_observation.display_location.full}</h3>
        <h3>Condition: {data.current_observation.weather}</h3>
        <h3>Current Temp: {data.current_observation.temp_f}°F</h3>
        <h3>Today's High: {data.forecast.simpleforecast.forecastday[0].high.fahrenheit}°F</h3>
        <h3>Today's Low: {data.forecast.simpleforecast.forecastday[0].low.fahrenheit}°F</h3>
        <h3>Forcast: {data.forecast.txt_forecast.forecastday[0].fcttext}</h3>
        <img src={data.forecast.txt_forecast.forecastday[0].icon_url} alt="icon representing current conditions" />
      </div>
    )
  }
}