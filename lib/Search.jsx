import React from 'react';
import data from './cities';
import { PrefixTrie } from  '@PreciseSlice/complete-me';
import PropTypes from 'prop-types';

export default class Search extends React.Component {
  constructor() {
    super();
    this.trie = new PrefixTrie();
    this.trie.populate(data.data);

    this.state = {
      input: '',
      suggestedCities: []
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  suggestCity (word) {
    let suggestions = this.trie.suggest(word);

    this.setState({
      suggestedCities: suggestions
    });
  }

  handleInputChange(e) {
    this.setState({
      input: e.target.value,
      getWeather: this.state.input
    });
    this.suggestCity(e.target.value);
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.handleBtnClick();
    }
  }

  handleBtnClick () {
    
    if (isNaN(this.state.input) &&
    data.data.includes(this.state.input) ||
    this.state.input.length === 5 &&
    !isNaN(this.state.input)) {
      
      this.props.getWeather(this.state.input);
      this.setState({ input: this.state.input });
      localStorage.setItem('location', this.state.input);
      this.setState({ input: '' });
    } else { 
      alert(`Invalid Input:\n\nPlease Enter City,State 
      or Zip Code\n\ne.g. Denver, CO OR 80202`);
      this.setState({ input: '' });
      document.getElementById('searchInput').focus();
    }
  }

  render () {
    return (
      <div className="search">

        <input
          autoFocus
          id="userLocationInput"
          value={this.state.input}
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
          placeholder="zip code or city, state"
          list="dropDown"
        />

        <datalist id="dropDown">
          {
            this.state.suggestedCities.map( (city, i) => {
              let capSuggestion = city.split(', ');

              capSuggestion[1] = capSuggestion[1].toUpperCase();
              capSuggestion[0] = capSuggestion[0].charAt(0).toUpperCase()
                + capSuggestion[0].slice(1);

              capSuggestion = capSuggestion.join(', ');

              return <option value={capSuggestion} key={i}/>; 
            }).slice(0, 5)
          }
        </datalist>

        <button onClick={this.handleBtnClick}>SEARCH</button>

      </div>
    );
  }
}

Search.propTypes = {
  getWeather: PropTypes.func
};