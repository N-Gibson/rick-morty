import React from 'react';
import Character from '../Character/character';
import Episode from '../Episode/episode';
import Location from '../Location/location';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './body.scss';
import { PropTypes } from 'prop-types';

const Body = ({ episodes, characters, locations }) => {
  const episode = episodes.map(episode => {
    return <Episode 
      name={episode.name}
      episode={episode.episode}
      air_date={episode.air_date}
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

  const location = locations.map(location => {
    return <Location 
      name={location.name}
      dimension={location.dimension}
      type={location.type}
      key={location.id}
    />
  })

  return (
    <section className='body'>
      <Route exact path='/characters'>
        {character}
      </Route>
      <Route exact path='/episodes'>
        {episode}
      </Route>
      <Route exact path='/locations'>
        {location}
      </Route>
    </section>
  )
}

const mapPropsToState = ({ episodes, characters, locations }) => ({
  episodes,
  characters,
  locations
})

export default connect(mapPropsToState)(Body)

Body.propTypes = {
  episodes: PropTypes.array,
  characters: PropTypes.array,
  locations: PropTypes.array
}