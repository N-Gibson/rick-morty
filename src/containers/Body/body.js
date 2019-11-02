import React from 'react';
import Character from '../Character/character';
import Episode from '../Episode/episode'
import { Route } from 'react-router-dom';
import { connect } from 'react-redux'

const Body = ({ episodes, characters }) => {
  const episode = episodes.map(episode => {
    return <Episode 
      name={episode.name}
      episode={episode.episode}
      air_date={episode.air_date}
      // episode_characters={episode.characters}
      // characters={characters}
      key={episode.id}
    />
  });

  const character = characters.map(character => {
    return  <Character 
      name={character.name}
      status={character.status}
      species={character.species}
      gender={character.gender}
      image={character.image}
      episodes={character.episode}
      location={character.location.name}
      origin={character.origin.name}
      key={character.id}
    />
  });

  return (
    <section className='body'>
      <Route exact path='/characters'>
        {character}
      </Route>
      <Route exact path='/episodes'>
        {episode}
      </Route>
    </section>
  )
}

const mapPropsToState = ({ episodes, characters }) => ({
  episodes,
  characters
})

export default connect(mapPropsToState)(Body)