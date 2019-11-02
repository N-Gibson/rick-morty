import { getEpisodes, getCharacters, getLocations } from './apiCalls';

describe('Api Calls', () => {
  const mockEpisodeResponse = 
  [{
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
    }, {
      'created': 'date',
      'episode': ['url', 'url'],
      'gender': 'male',
      'id' : 1,
      'image': 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      'location': {'name': 'earth', 'url': 'url'},
      'name': 'Morty Sanchez',
      'origin': {'name': 'Earth', 'url': 'url'},
      'species': 'Human',
      'status': 'Alive',
      'type': '',
      'url': ['url'],
    }]

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockEpisodeResponse)
        })
      })
    })

  it('should fetch the characters', () => {
    expect(getEpisodes).resolve.toEqual(mockEpisodeResponse);
  })
})