import React, { Component } from 'react';
import Nav from './containers/Nav/nav';
import { getEpisodes, getCharacters, getLocations } from './apiCalls';
import { addEpisodes, addCharacters, addLocations, addCurrentDisplay } from './actions/index';
import { connect } from 'react-redux';
import Body from './containers/Body/body';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      error: ''
    }
  }

  async componentDidMount() {
    const { addEpisodes, addCharacters, addLocations, addCurrentDisplay, current } = this.props;
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
  addLocations: allLocations => dispatch(addLocations(allLocations)),
  addCurrentDisplay: current => dispatch(addCurrentDisplay(current))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
