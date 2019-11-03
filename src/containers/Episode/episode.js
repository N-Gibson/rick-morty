import React from 'react';
import './episode.scss';
import { PropTypes } from 'prop-types';

const Episode = ({ name, episode, air_date }) => {
  return (
    <div className='episode-card'>
      <h2>{name}</h2>
      <p>Episode: {episode}</p>
      <p>Air Date: {air_date}</p>
    </div>
  )
}

export default Episode

Episode.propTypes = {
  name: PropTypes.string, 
  episode: PropTypes.string,
  air_date: PropTypes.string
}