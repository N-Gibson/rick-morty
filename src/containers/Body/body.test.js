import React from 'react';
import Body from '../Body/body';

describe('Body', () => {
  it('should match snapshot', () => {
    expect(<Body />).toMatchSnapshot();
  });
});