import { getEpisodes, getCharacters, getLocations } from './apiCalls';

describe('Get Episodes', () => {
  let mockEpisodesResponse = [{
    air_date: 'December 2, 2013',
    characters: ["https://rickandmortyapi.com/api/character/1"],
    created: '2017-11-10T12:56:33.798Z',
    episode: 'S01E01',
    id: 1,
    name: 'Pilot',
    url: 'https://rickandmortyapi.com/api/episode/'
  }]

  it('should return the characters if response is ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockEpisodesResponse)
      })
    })

    // expect(getEpisodes()).resolves.toEqual(mockEpisodesResponse);
    getEpisodes()
    expect(window.fetch).toHaveBeenCalled()
  });

  it('should throw an error if the response is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      Promise.resolve({
        ok: false
      })
    })

    expect(getEpisodes()).rejects.toEqual(Error('There was an error loading the episodes'))
  });
});

describe('Get Characters', () => {
  const mockCharactersResponse = [{
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

  it('should return a list of the characters', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockCharactersResponse)
      })
    })

    // expect(getCharacters()).resolves.toEqual(mockCharactersResponse)
    getCharacters()
    expect(window.fetch).toHaveBeenCalled();
  })

  it('should throw an error if the response is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      Promise.resolve({
        ok: false
      })
    })

    expect(getCharacters()).rejects.toEqual(Error('There was an error loading the characters'))
  });
});


describe('Get Locations', () => {
  const mockLocationsResponse = [
    {
      created: "2017-11-10T12:42:04.162Z",
      dimension: "Dimension C-137",
      id: 1,
      name: "Earth (C-137)",
      residents: ["https://rickandmortyapi.com/api/character/38"],
      type: "Planet",
      url: "https://rickandmortyapi.com/api/locations"
    }
  ]

  it('should return a list of the locations', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockLocationsResponse)
      })
    })

    // expect(getLocations()).resolves.toEqual(mockLocationsResponse)
    getLocations()
    expect(window.fetch).toHaveBeenCalled
  });

  it('should throw an error if the response is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      Promise.resolve({
        ok: false
      })
    })

    expect(getLocations()).rejects.toEqual(Error('There was an error loading the locations'))
  });
})