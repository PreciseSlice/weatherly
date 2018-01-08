import React from 'react';
import data from './cities';
//import { PrefixTree } from  '@PreciseSlice/complete-me';

export default class Search extends React.Component {
  constructor() {
    super();

    this.state ={
      input: ''
    };
  }

  handleInputChange(e) {

    this.setState({
      inputVal: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let { input } = this.state;

    input = input.toLowerCase();
  }

  render () {
    return (
      <div className="search">
        <input
          id="userLocation"
          value={this.state.input}
          onChange={this.handleInputChange.bind(this)}
          placeholder="city, state"
        />
        <button>SEARCH</button>
      </div>
    )
  }
}