import React from 'react';
import Location from './location';
import { shallow } from 'enzyme';

describe('Location', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Location />)
    expect(wrapper).toMatchSnapshot()
  });
})