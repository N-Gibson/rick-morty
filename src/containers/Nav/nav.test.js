import React from 'react';
import { Nav } from './nav';
import { addCurrentDisplay, addEpisodes, addCharacters, addLocations } from '../../actions/index';
import { mapStateToProps, mapDispatchToProps } from './nav';
import { shallow } from 'enzyme'

describe('Nav', () => {
  const mockSearchContent = jest.fn();
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Nav />)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should be able to search content', () => {
    const content = 'Morty';
    const mockResponse = [{
      'created': 'date',
      'episode': ['url', 'url'],
      'gender': 'male',
      'id' : 1,
      'image': 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      'location': {'name': 'earth', 'url': 'url'},
      'name': 'Rick Sanchez',
      'origin': {'name': 'Earth', 'url': 'url'},
      'species': 'Human',
      'status': 'Alive',
      'type': '',
      'url': ['url'],
    }]

    expect(mockSearchContent(content)).toEqual(mockResponse);
  });

  it('should be able to update the current display', () => {
    const mockEpisodes = [{name: 'Rickshank Rickdemption'}]
    wrapper.find('button').at(0).simulate('click');

    expect(addCurrentDisplay).toHaveBeenCalled()
  })
});

describe('mapDispatchToProps', () => {
  let mockDispatch, mappedDispatch

  beforeEach(() => {
    mockDispatch = jest.fn();
    mappedDispatch = mapDispatchToProps(mockDispatch)
  });

  it('addEpisodes', () => {
    const actionToDispatch = addEpisodes([{episode: 'Rixlaxation'}]);
    mappedDispatch.addEpisodes([{episode: 'Rixlaxation'}])

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('addCharacters', () => {
    const actionToDispatch = addCharacters([{name: 'Morty Sanchez'}]);
    mappedDispatch.addCharacters([{name: 'Morty Sanchez'}]);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('addLocations', () => {
    const actionToDispatch = addLocations([{name: 'Earth C-147'}]);
    mappedDispatch.addLocations([{name: 'Earth C-147'}]);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('addCurrentDisplay', () => {
    const actionToDispatch = addCurrentDisplay([{name: 'Earth C-147'}]);
    mappedDispatch.addCurrentDisplay([{name: 'Earth C-147'}]);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
})