export const getEpisodes = async () => {
  const response = await fetch('https://rickandmortyapi.com/api/episode')
  if (!response.ok) {
    throw new Error('There was an error loading the episodes')
  }
  const data = await response.json();
  return data.results;
}

export const getCharacters = async () => {
  const response = await fetch('https://rickandmortyapi.com/api/character')
  if (!response.ok) {
    throw new Error('There was an error loading the characters')
  }
  const data = await response.json();
  return data.results;
}

export const getLocations = async () => {
  const response = await fetch('https://rickandmortyapi.com/api/location')
  if (!response.ok) {
    throw new Error('There was an error loading the locations')
  }
  const data = await response.json();
  return data.results;
}