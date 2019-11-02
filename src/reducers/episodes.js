export const episodes = (state=[], action) => {
  switch(action.type) {
    case 'ADD_EPISODES':
      return action.episodes;
    default: 
      return state;
  }
}