import { characters } from './characters';

describe('Characters Reducer', () => {
  it('should return the initial state', () => {
    const expectedState = [];
    const result = characters(undefined, {});

    expect(result).toEqual(expectedState);
  });

  it('should return the characters', () => {
    const mockCharacters = ['characters', 'characters'];
    const mockAction = {
      type: 'ADD_CHARACTERS',
      characters: mockCharacters
    }

    const result = characters(undefined, mockAction);

    expect(result).toEqual(mockAction.characters);
  })
})