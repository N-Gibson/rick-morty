import React from 'react';

const Character = ({ name, status, species, gender, image, episodes, location, origin}) => {
  return (
    <div className='character-card'>
      <h2>{name}</h2>
      <img src={image}></img>
      <ul>
        <li>Species: {species}</li>
        <li>Status: {status}</li>
        <li>Location: {location}</li>
        <li>Gender: {gender}</li>
        <li>Origin: {origin}</li>
      </ul>
    </div>
  )
}

export default Character