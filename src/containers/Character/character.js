import React from 'react';
import './character.scss';
import { PropTypes } from 'prop-types';

const Character = ({ name, status, species, gender, image, location, origin }) => {
  return (
    <div className='character-card'>
      <h2>{name}</h2>
      <img src={image}></img>
      <div>
        <p>Species: {species}</p>
        <p>Status: {status}</p>
        <p>Location: {location}</p>
        <p>Gender: {gender}</p>
        <p>Origin: {origin}</p>
      </div>
    </div>
  )
}

export default Character

Character.propTypes = {
  name: PropTypes.string,
  status: PropTypes.string,
  species: PropTypes.string,
  gender: PropTypes.string,
  image: PropTypes.string,
  location: PropTypes.string,
  origin: PropTypes.string
}