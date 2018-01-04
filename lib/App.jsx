import React from 'react';
import {data} from './mockData';
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';

export default class App extends React.Component {
  constructor() {
    super();

  }

  render() { 
    return (
      <div>
        <CurrentWeather />,
        <SevenHour hourData={data} />
      </div>
    )
  }
}