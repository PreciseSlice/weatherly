import React from 'react';
import { mount, shallow } from 'enzyme';
import Welcome from '../lib/Welcome';

describe('Welcome', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Welcome />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  }); 

  it('should be an object', () => {
    expect(typeof wrapper).toEqual("object");
  });

  it('should render welcome text and search', () => {

    expect(wrapper.find('h1').length).toEqual(1);
    expect(wrapper.find('h2').length).toEqual(1);
    expect(wrapper.find('Search').length).toEqual(1);

    expect(wrapper.find('h1').text()).toEqual("ATMOS");
    expect(wrapper.find('h2').text()).toEqual("weather");
  });
  
});