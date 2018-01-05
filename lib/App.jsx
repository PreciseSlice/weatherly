import React from 'react';
import { data } from './mockData';
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';
import filterData from './filterData';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      current: {},
      hourly: [],
      daily: []
    };

    this.getWeather = this.getWeather.bind(this); 
  }
  
  getWeather(data) {
    let weather = filterData(data);

    this.setState({ 
      current: weather.currentConditionData,
      hourly: weather.sevenHourData,
      daily: weather.dailyData
    });
  }

  componentDidMount() {
    this.getWeather(data);
  }
  
  render() { 
    return (
      <div>
        <CurrentWeather data={this.state.current} />
        <SevenHour data={this.state.hourly} />
        {/* <Daily dailyData={daily} /> */}
      </div>
    )
  }
}