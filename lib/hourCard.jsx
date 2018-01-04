import React from 'react';

export default class HourCard extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="card">
        <h3>Hour: {props.hour}</h3>
        <img src={props.img} alt="icon representing current conditions" />
        <h3>Temp: {props.temp}</h3>
      </div>
    )
  }
}