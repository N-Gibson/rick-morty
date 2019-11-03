import React from 'react';
import Character from '../Character/character';

describe('Character', () => {
  expect(<Character />).toMatchSnapshot()
});