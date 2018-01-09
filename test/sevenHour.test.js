import React from 'react';
import { mount, shallow } from 'enzyme';
import SevenHour from '../lib/SevenHour';
import { hour } from './testMockData';

describe('Daily', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SevenHour data={[hour]}/>);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  }); 

  it('should be an object', () => {
    expect(typeof wrapper).toEqual("object");
  });

  it('should render return a card with the props passed down', () => {

    expect(wrapper.find('Card').length).toEqual(1);
  });
  
});