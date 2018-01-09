import React from 'react';
import { mount, shallow } from 'enzyme';
import Search from '../lib/Search';

describe('Search', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Search />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('It should have a default state of input set to an empty string', () => {
    expect( wrapper.state('input') ).toEqual('');
  });

  it('It should have a default state of suggestedCities set to an empty array', () => {
    expect( wrapper.state('suggestedCities') ).toEqual([]);
  });
  
  it('should render an input, datalist and button component', () => {
    expect(wrapper.find('input').length).toEqual(1);
    expect(wrapper.find('datalist').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(1);
  });

  it('Should update state when an input is recived', () => {
    const wrapper = mount(<Search />);
    const event = {target: {value: 'Abc, DE'}};
    
    wrapper.find('input').simulate('change', event);
    expect(wrapper.state('input')).toEqual('Abc, DE');
  });

  it('Should make suggestions upon reciving an input', () => {
    const wrapper = mount(<Search />);
    const event = {target: {value: "denv"}};
    
    wrapper.find('input').simulate('change', event);
    expect( wrapper.state('suggestedCities') ).toEqual(['denver, co']);
  });

  it('Should be able to make various suggestions based on the input recived', () =>{
    const wrapper = mount(<Search />);
    const event = {target: {value: "elkh"}};
    
    wrapper.find('input').simulate('change', event);
    expect( wrapper.state('suggestedCities') ).toEqual(['elkhart, in']);
  });

});