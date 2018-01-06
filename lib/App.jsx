import React from 'react';
//import { data } from './mockData';
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';
import filterData from './filterData';
import Daily from './Daily';
import Search from './Search';
import { key } from './.key.js';

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
  
  getWeather() {
    //const trieData = userLocation.split(', ');
    const url = `http://api.wunderground.com/api/${key}/conditions/forecast10day/hourly/q/CO/Denver.json`;

    fetch(url)
      .then(data => data.json())

      .then( data=> {
        let weather = filterData(data);
        
        this.setState({ 
          current: weather.currentConditionData,
          hourly: weather.sevenHourData,
          daily: weather.dailyData
        });
      })
      .catch( 
        error => this.setState( { error } ) 
      );
  }

  componentDidMount() {
    this.getWeather();
  }
  
  render() { 
    let { error } = this.state;
    return (
      <div>
        <Search />
        <CurrentWeather data={this.state.current} />
        <SevenHour data={this.state.hourly} />
        <Daily data={this.state.daily} />
        { error && <h1>404 City Not Found</h1>  }
      </div>
    )
  }
}