import React from 'react';
import Episode from '../Episode/episode';
import { shallow } from 'enzyme';

describe('Episode', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Episode />)
    expect(wrapper).toMatchSnapshot()
  })
});