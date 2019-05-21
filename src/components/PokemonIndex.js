import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    pokemons: []
  }



    componentDidMount() {
      fetch('http://localhost:3000/pokemon')
      .then(r => r.json())
      .then(data => {
        this.setState(
          {pokemons: data}
        )
      })
    }

    filter = () => {
      console.log(this.state.pokemon);
    }

    render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <Search onChange={this.filter} />
        <br />

        <br />
        <PokemonCollection pokemons={this.state.pokemons}/>
        <br />
        <PokemonForm />
      </div>
    )
  }
}

export default PokemonPage
