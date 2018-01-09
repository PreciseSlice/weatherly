import React from 'react';
import { mount, shallow } from 'enzyme';
import { current } from './testMockData';
import CurrentWeather from '../lib/CurrentWeather.jsx';

describe('CurrentWeather', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<CurrentWeather data={current}  />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should be an object', () => {
    expect(typeof wrapper).toEqual("object");
  });

  it('should render current forcast information', () => {

    expect(wrapper.find('h3').length).toEqual(7);
    expect(wrapper.find('img').length).toEqual(1);
  });
  
});