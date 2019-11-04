import React from 'react';
import Episode from '../Episode/episode';
import { shallow } from 'enzyme';

describe('Episode', () => {
  const wrapper = shallow(<Episode />)
  expect(wrapper).toMatchSnapshot()
});