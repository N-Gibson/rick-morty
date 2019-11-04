import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { shallow } from 'enzyme';
import { mapStateToProps } from './App'

describe('App', () => {
  let wrapper;

  beforeEach(()=> {
    wrapper = shallow(<App />)
  });

  it('mapStateToProps', () => {
    const mockState = {
      episodes: [],
      characters: [],
      locations: [],
      error: ''
    }

    const expected = {
      episodes: [],
      characters: [],
      locations: []
    }

    const mappedProps = mapStateToProps(mockState)

    expect(mappedProps).toEqual(expected)
  })
})
