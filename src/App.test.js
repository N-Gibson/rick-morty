import React from 'react';
import { App } from './App';
import { shallow } from 'enzyme';
import { mapStateToProps, mapDispatchToProps } from './App';
import { addEpisodes, addCharacters, addLocations, addCurrentDisplay } from './actions/index';

describe('App', () => {
  let wrapper, mockDispatch, mappedDispatch;

  beforeEach(()=> {
    wrapper = shallow(<App />);
    mockDispatch = jest.fn();
    mappedDispatch = mapDispatchToProps(mockDispatch)
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
  });

  it('mapDispatchToProps addEpisodes', () => {
    const actionToDispatch = addEpisodes([{episode: 'Rixlaxation'}]);
    mappedDispatch.addEpisodes([{episode: 'Rixlaxation'}])

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('mapDispatchToProps addCharacters', () => {
    const actionToDispatch = addCharacters([{name: 'Morty Sanchez'}]);
    mappedDispatch.addCharacters([{name: 'Morty Sanchez'}]);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('mapDispatchToProps addLocations', () => {
    const actionToDispatch = addLocations([{name: 'Earth C-147'}]);
    mappedDispatch.addLocations([{name: 'Earth C-147'}]);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('mapDispatchToProps addCurrentDisplay', () => {
    const actionToDispatch = addCurrentDisplay([{name: 'Earth C-147'}]);
    mappedDispatch.addCurrentDisplay([{name: 'Earth C-147'}]);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  })
})
