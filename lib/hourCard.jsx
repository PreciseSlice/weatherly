import React from 'react';

export default class HourCard extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="card">
        <h3>Hour: {this.props.data.hour}</h3>
        <img src={this.props.data.img} alt="icon representing current conditions" />
        <h4>Condition: {this.props.data.condition}</h4>
        <h4>Temp: {this.props.data.temp}</h4>
        <h4>Chance of Rain: {this.props.data.precip} </h4>
      </div>
    )
  }
}