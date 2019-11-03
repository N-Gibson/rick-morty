import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCurrentDisplay, addEpisodes, addCharacters, addLocations } from '../../actions/index';
import './nav.scss';

class Nav extends Component {
  constructor() {
    super()
    this.state = {
      content: ''
    }
  }

  searchContent(content) {
    const { current, addEpisodes, addCharacters, addLocations } = this.props;
    const lowerContent = content.toLowerCase();

    if(current[0].url.includes('https://rickandmortyapi.com/api/episode/')) {
      const foundEpisodes = current.filter(episode => episode.name.toLowerCase().includes(lowerContent))
      addEpisodes(foundEpisodes);
    }

    if(current[0].url.includes('https://rickandmortyapi.com/api/character/')) {
      const foundCharacters = current.filter(character => character.name.toLowerCase().includes(lowerContent))
      addCharacters(foundCharacters);
    }

    if(current[0].url.includes('https://rickandmortyapi.com/api/location/')) {
      const foundLocations = current.filter(location => location.name.toLowerCase().includes(lowerContent))
      addLocations(foundLocations)
    }
  }

  render() {
    const { characters, episodes, locations, addCurrentDisplay } = this.props;

    return (
      <nav>
        <Link to='/episodes'>
          <button 
            className='episodes-nav' 
            type='button'
            onClick={() => {
              addCurrentDisplay(episodes)
            }}>
            Episodes
          </button>
        </Link>
        <Link to='/characters'>
          <button 
            className='characters-nav' 
            type='button'
            onClick={() => {
              addCurrentDisplay(characters)
            }}>
            Characters
          </button>
        </Link>
        <Link to='locations'>
          <button 
            className='locations-nav' 
            type='button'
            onClick={() => {
              addCurrentDisplay(locations)
            }}>
            Locations
          </button>
        </Link>
        <div className='search-div'>
          <input 
            type='text' 
            name='search-input' 
            value={this.state.content}
            placeholder='Search Content' 
            onChange={(e) => {
              this.setState({content: e.target.value})
            }}>
            </input>
          <button 
            className='search-button'
            type='button' 
            onClick={() => {
            this.searchContent(this.state.content)
            this.setState({content: ''})
            }}>
            Search
          </button>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = ({ characters, episodes, locations, current }) => ({
  characters,
  episodes,
  locations,
  current
})

const mapDispatchToProps = ( dispatch ) => ({
  addCurrentDisplay: current => dispatch(addCurrentDisplay(current)),
  addEpisodes: episodes => dispatch(addEpisodes(episodes)),
  addCharacters: characters => dispatch(addCharacters(characters)),
  addLocations: locations => dispatch(addLocations(locations))
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav);