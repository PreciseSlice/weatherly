import React from 'react';

export default class Card extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="card">
        { 
          this.props.hour && (
            <div className="hourCard">
              <h3>Hour: {this.props.hour.hour}</h3>
              <img src={this.props.hour.img} alt="icon representing current conditions" />
              <h4>Condition: {this.props.hour.condition}</h4>
              <h4>Temp: {this.props.hour.temp}</h4>
              <h4>Chance of Rain: {this.props.hour.precip} </h4>
            </div>
          )
        }

        { 
          this.props.day && (
            <div className="dailyCard">
              <h3>{this.props.day.day}</h3>
              <img src={this.props.day.img} alt="icon representing current conditions" />
              <h4>Condition: {this.props.day.condition}</h4>
              <h4>High: {this.props.day.high}   |   Low: {this.props.day.low}</h4>
              <h4>Chance of Rain: {this.props.day.precip} </h4>
            </div>
          )
        }  
      </div>
    )
  }
}