export const current = (state=[], action) => {
  switch(action.type) {
    case 'ADD_CURRENT':
      return action.current;
    default: 
      return state;
  }
}