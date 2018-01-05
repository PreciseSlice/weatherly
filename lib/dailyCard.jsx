import React from 'react';

export default class DailyCard extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="card">
        <h3>{this.props.data.day}</h3>
        <img src={this.props.data.img} alt="icon representing current conditions" />
        <h4>Condition: {this.props.data.condition}</h4>
        <h4>High: {this.props.data.high}</h4>
        <h4>Low: {this.props.data.low}</h4>
        <h4>Chance of Rain: {this.props.data.precip} </h4>
      </div>
    )
  }
}