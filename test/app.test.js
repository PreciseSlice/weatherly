import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../lib/App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('It should have a default state of location set to an empty string', () => {
    expect( wrapper.state('location') ).toEqual('');
  });

  it('It should have a default state of current set to an empty object', () => {
    expect( wrapper.state('current') ).toEqual({});
  });

  it('It should have a default states of hourly and daily set to empty arrays', () => {
    expect( wrapper.state('hourly') ).toEqual([]);
    expect( wrapper.state('daily') ).toEqual([]);
  });

  it('It should have a default state of welcome set to true', () => {
    expect( wrapper.state('welcome') ).toEqual(true);
  });
  
  it('should render welcome component when the state of welcome is true', () => {
    expect(wrapper.find('Welcome').length).toEqual(1);
  });

  it('should render an Search, h1, h2, h3, CurrentWeather, SevenHour and Daily components when the state of welcome is false', () => {
    wrapper.setState({welcome: false});

    expect(wrapper.find('Search').length).toEqual(1);
    expect(wrapper.find('h1').length).toEqual(1);
    expect(wrapper.find('h2').length).toEqual(1);
    expect(wrapper.find('h3').length).toEqual(3);
    expect(wrapper.find('CurrentWeather').length).toEqual(1);
    expect(wrapper.find('SevenHour').length).toEqual(1);
    expect(wrapper.find('Daily').length).toEqual(1);
  });

});