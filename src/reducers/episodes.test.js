import { episodes } from './episodes';

describe('Episodes Reducer', () => {
  it('should return the initial state', () => {
    const expectedState = [];
    const result = episodes(undefined, {});

    expect(result).toEqual(expectedState);
  });

  it('should return the episodes', () => {
    const mockEpisodes = ['episodes', 'episodes'];
    const mockAction = {
      type: 'ADD_EPISODES',
      episodes: mockEpisodes
    }

    const result = episodes(mockEpisodes, mockAction);

    expect(result).toEqual(mockAction.episodes);
  })
})