import React, { Component } from 'react';
import Nav from './containers/Nav/nav';
import { getEpisodes, getCharacters, getLocations } from './apiCalls';
import { addEpisodes, addCharacters, addLocations } from './actions/index';
import { connect } from 'react-redux';
import Body from './containers/Body/body';
import './App.css';

class App extends Component {
  constructor() {
    super()
  }

  async componentDidMount() {
    const { addEpisodes, addCharacters, addLocations } = this.props;
    try {
      const episodeData = await getEpisodes();
      addEpisodes(episodeData);
      const characterData = await getCharacters();
      addCharacters(characterData);
      const locationData = await getLocations();
      addLocations(locationData)
    } catch {

    }
  }

  render() {
    console.log('props', this.props)
    return (
      <main>
        <h1>Rick and Morty</h1>
        <Nav />
        <Body />
      </main>
    );
  }
}

const mapStateToProps = ({ episodes, characters, locations }) => ({
  episodes,
  characters,
  locations
})

const mapDispatchToProps = (dispatch) => ({
  addEpisodes: allEpisodes => dispatch(addEpisodes(allEpisodes)),
  addCharacters: allCharacters => dispatch(addCharacters(allCharacters)),
  addLocations: allLocations => dispatch(addLocations(allLocations))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
