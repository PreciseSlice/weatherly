import React from 'react';

export default class CurrentWeather extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="current-container">
        <h3>{this.props.data.time}</h3>
        <h3>{this.props.data.place}</h3>
        <h3>Condition: {this.props.data.condition}</h3>
        <h3>Current Temp: {this.props.data.currentTemp}°F</h3>
        <h3>Today's High: {this.props.data.todaysHigh}°F</h3>
        <h3>Today's Low: {this.props.data.todaysLow}°F</h3>
        <img src={this.props.data.img} alt="icon representing current conditions" />
        <h3>Forcast: {this.props.data.forcast}</h3>
      </div>
    )
  }
}