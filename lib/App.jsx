import React from 'react';
//import { data } from './mockData';
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';
import filterData from './filterData';
import Daily from './Daily';
import Search from './Search';
import { key } from './.key';
import Welcome from './Welcome';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      location: '',
      current: {},
      hourly: [],
      daily: [],
      welcome: true
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
        console.log(this)
      })
      .catch( 
        error => this.setState( { error } ) 
      );
  }

  componentDidMount() {
    this.getWeather();
  }
  
  render() { 
    let { 
      error,
      welcome
    } = this.state;

    return (
      
      <div>

        {
          !welcome && (
            <div className="main-container">
              <div className="left">
                <Search />
                <h1>ATMOS</h1>
                <h2>weather</h2>
                <h3>CURRENT CONDITIONS</h3>
                <CurrentWeather data={this.state.current} />
              </div>
          
              <div className="right">
    
                <div className="hourly-container">
                  <h3 className="label-text">HOURLY</h3>
                  <div className="houly-card-container">
                    <SevenHour data={this.state.hourly} />
                  </div>
                </div>
    
                <div className="daily-container">
                  <h3 className="label-text">10 DAY</h3>
                  <div className="daily-card-container">
                    <Daily data={this.state.daily} />
                  </div>
                </div>
    
              </div>

              { error && <h1>404 City Not Found</h1>  }
          </div>
          )
        }
        
        {
          welcome && (
            <Welcome />
          )
        }

      </div>
    )
  }
}