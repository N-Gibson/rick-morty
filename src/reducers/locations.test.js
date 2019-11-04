import { locations } from './locations';

describe('Locations Reducer', () => {
  it('should return the initial state', () => {
    const expectedState = [];
    const result = locations(undefined, {});

    expect(result).toEqual(expectedState);
  });

  it('should return the locations', () => {
    const mockLocations = ['locations', 'locations'];
    const mockAction = {
      type: 'ADD_LOCATIONS',
      locations: mockLocations
    }

    const result = locations(undefined, mockAction);

    expect(result).toEqual(mockAction.locations);
  })
})