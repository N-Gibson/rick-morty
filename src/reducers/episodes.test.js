import { episodes } from './current';

describe('Episodes Reducer', () => {
  it('should return the initial state', () => {
    const expectedState = [];
    const result = episodes(undefined, {});

    expect(result).toEqual(expectedState);
  });

  it('should return the episodes', () => {
    const mockCurrent = ['episodes', 'episodes'];
    const mockAction = {
      type: 'ADD_EPISODES',
      mockCurrent
    }

    const result = episodes(undefined, mockAction);

    expect(result).toEqual(mockCurrent);
  })
})