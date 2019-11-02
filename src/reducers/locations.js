export const locations = (state=[], action) => {
  switch(action.type) {
    case 'ADD_LOCATIONS':
      return action.locations;
    default:
      return state;
  }
}