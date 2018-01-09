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

  it('should be an object', () => {
    expect(typeof wrapper).toEqual("object");
  });

  it('should render hourly forcast information when hourly props are passed down', () => {
    wrapper = mount(<Card key='0' hour={hour} />);

    expect(wrapper.find('h3').length).toEqual(1);
    expect(wrapper.find('img').length).toEqual(1);
    expect(wrapper.find('h4').length).toEqual(3);

    expect(wrapper.find('h3').text()).toEqual("Hour: 10:00 PM");
  });

  it('should render daily forcast information when daily props are passed down', () => {
    wrapper = mount(<Card key='0' day={day} />);

    expect(wrapper.find('h3').length).toEqual(1);
    expect(wrapper.find('img').length).toEqual(1);
    expect(wrapper.find('h4').length).toEqual(3);

    expect(wrapper.find('h3').text()).toEqual("Sunday");
  });
  
});