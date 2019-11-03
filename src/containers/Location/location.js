import React from 'react';
import './location.scss';
import { PropTypes } from 'prop-types';

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

Location.propTypes = {
  name: PropTypes.string,
  dimension: PropTypes.string,
  type: PropTypes.string
}