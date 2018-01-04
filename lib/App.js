import React from 'react';
import {data} from './mockData';
import CurrentWeather from './CurrentWeather';

export default class App extends React.Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div>
        <CurrentWeather />
      </div>
    )
  }
}