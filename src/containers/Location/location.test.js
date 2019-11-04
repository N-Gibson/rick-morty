import React from 'react';
import Location from './location';

describe('Location', () => {
  it('should match snapshot', () => {
    expect(<Location />).toMatchSnapshot()
  });
})