export const addEpisodes = episodes => {
  return ({
    type: 'ADD_EPISODES',
    episodes
  })
}

export const addCharacters = characters => {
  return ({
    type: 'ADD_CHARACTERS',
    characters
  })
}

export const addLocations = locations => {
  return ({
    type: 'ADD_LOCATIONS',
    locations
  })
}