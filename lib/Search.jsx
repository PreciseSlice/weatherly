import React from 'react';
import data from './cities';
//import { PrefixTree } from  '@PreciseSlice/complete-me';

export default class Search extends React.Component {
  constructor() {
    super();

    this.state ={
      location: ''
    };
  }

  render () {
    return (
      <div>
        <label htmlFor="userLocation">Enter your location</label>
        <input 
          id="userLocation"
          value={this.state.location}
        />
        <button>Search</button>
      </div>
    )
  }
}