import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <Link to='/episodes'>
        <button className='episodes-nav' type='button'>Episodes</button>
      </Link>
      <Link to='/characters'>
        <button className='characters-nav' type='button'>Characters</button>
      </Link>
      <Link to='locations'>
        <button className='locations-nav' type='button'>Locations</button>
      </Link>
    </nav>
  )
}

export default Nav;