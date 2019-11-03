import React, { Component } from 'react';
import Nav from './containers/Nav/nav';
import { getEpisodes, getCharacters, getLocations } from './apiCalls';
import { addEpisodes, addCharacters, addLocations, addCurrentDisplay } from './actions/index';
import { connect } from 'react-redux';
import Body from './containers/Body/body';
import './App.css';
import PropTypes from 'prop-types';

export class App extends Component {
  constructor() {
    super()
    this.state = {
      error: ''
    }
  }

 async componentDidMount() {
    const { addEpisodes, addCharacters, addLocations, addCurrentDisplay } = this.props;
    try {
      const episodeData = await getEpisodes();
      addEpisodes(episodeData);
      addCurrentDisplay(episodeData);
      const characterData = await getCharacters();
      addCharacters(characterData);
      const locationData = await getLocations();
      addLocations(locationData)
    } catch(error) {
      this.setState({error: error})
    }
  }

  render() {
    console.log(this.props)
    return (
      <main>
        <style>
          @import url('https://fonts.googleapis.com/css?family=Creepster&display=swap');
        </style>
        <h1>Rick and Morty</h1>
        <Nav />
        <Body />
      </main>
    );
  }
}

export const mapStateToProps = ({ episodes, characters, locations }) => ({
  episodes,
  characters,
  locations
})

export const mapDispatchToProps = (dispatch) => ({
  addEpisodes: allEpisodes => dispatch(addEpisodes(allEpisodes)),
  addCharacters: allCharacters => dispatch(addCharacters(allCharacters)),
  addLocations: allLocations => dispatch(addLocations(allLocations)),
  addCurrentDisplay: current => dispatch(addCurrentDisplay(current))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  getEpisodes: PropTypes.func,
  getCharacters: PropTypes.func,
  getLocations: PropTypes.func,
  addEpisodes: PropTypes.func,
  addCharacters: PropTypes.func,
  addLocations: PropTypes.func,
  addCurrentDisplay: PropTypes.func,
  episodes: PropTypes.array,
  characters: PropTypes.array,
  locations: PropTypes.array,
  error: PropTypes.string
}