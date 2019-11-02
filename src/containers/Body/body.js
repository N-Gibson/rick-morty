import React from 'react';
import Character from '../Character/character';
import { connect } from 'react-redux'

const Body = ({ characters }) => {
  const character = characters.map(character => {
    return  <Character 
      name={character.name}
      status={character.status}
      species={character.species}
      gender={character.gender}
      image={character.image}
      episodes={character.episode}
      location={character.location.name}
      origin={character.origin.name}
      key={character.id}
    />
  })
  console.log(character)
  return (
    <section className='body'>
      {character}
    </section>
  )
}

const mapPropsToState = ({ characters }) => ({
  characters
})

export default connect(mapPropsToState)(Body)