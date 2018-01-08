import React from 'react';
import { mount, shallow } from 'enzyme';
import Card from '../lib/Card';
import { day, hour } from './testMockData';

describe('Card', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Card />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it("should be an object", () => {
    expect(typeof wrapper).toEqual("object");
  });

  it.skip('should render hour when the state of hour is passed down', () => {
    wrapper = mount(<Card key='0' data={hour} />);

    expect(wrapper.find('h3').length).toEqual(1);
    expect(wrapper.find('h3').text()).toEqual('')
  });
});