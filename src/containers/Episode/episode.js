import React from 'react';

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