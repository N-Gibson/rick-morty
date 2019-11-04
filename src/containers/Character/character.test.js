import React from 'react';
import Character from '../Character/character';
import { shallow } from 'enzyme';

describe('Character', () => {
  const wrapper = shallow(<Character />);
  expect(wrapper).toMatchSnapshot();
});