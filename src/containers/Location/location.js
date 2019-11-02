import React from 'react';

const Location = ({ name, dimension, type }) => {
  return (
    <div className='location-card'>
      <h2>{name}</h2>
      <p>Dimension: {dimension}</p>
      <p>Type: {type}</p>
    </div>
  )
}

export default Location;