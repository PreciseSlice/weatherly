import React from 'react';
import data from './cities';
//import { PrefixTree } from  '@PreciseSlice/complete-me';

export default class Search extends React.Component {
  constructor() {
    super();

    this.state ={
      input: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleInputChange(e) {

    this.setState({
      input: e.target.value,
      getWeather: this.state.input
    });

  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.handleBtnClick();
    }
  }

  handleBtnClick () {

    if(isNaN(this.state.input) 
        && data.data.includes(this.state.input) 
        || this.state.input.length === 5 && !isNaN(this.state.input)) {

        this.props.getWeather(this.state.input);
        this.setState({ input: this.state.input });
        localStorage.setItem('location', this.state.input);
    } else { 
        alert('Invalid Input:\n\nPlease Enter City, State OR Zip Code\n\ne.g. Denver, CO OR 80202');
        this.setState({ input: '' });
        document.getElementById('searchInput').focus();
    }       
}

  render () {
    return (
      <div className="search">
        <input
          autoFocus
          id="userLocation"
          value={this.state.input}
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
          placeholder="zip code or city, state"
        />
        <button onClick={this.handleBtnClick}>SEARCH</button>
      </div>
    )
  }
}