import { current } from './current';

describe('Current Reducer', () => {
  it('should return the initial state', () => {
    const expectedState = [];
    const result = current(undefined, {});

    expect(result).toEqual(expectedState);
  });

  it('should return the current selection', () => {
    const mockCurrent = ['current', 'current'];
    const mockAction = {
      type: 'ADD_CURRENT',
      current: mockCurrent
    }

    const result = current(undefined, mockAction);

    expect(result).toEqual(mockAction.current);
  })
})