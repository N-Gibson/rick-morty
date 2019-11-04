import React from 'react';
import Nav from './nav';
import { addCurrentDisplay, addEpisodes, addCharacters, addLocations } from '../../actions/index';
import { shallow } from 'enzyme';

describe('Nav', () => {
  const mockSearchContent = jest.fn();

  it('should match snapshot', () => {
    expect(<Nav />).toMatchSnapshot();
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
  })
})