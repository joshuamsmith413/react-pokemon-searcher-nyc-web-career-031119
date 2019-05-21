import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    frontSide: true
  }

  switchies = () => {
    this.setState({
      frontSide: !this.state.frontSide
    })
  }

  render() {
    const {name} = this.props.pokemon
    return (
      <Card>
        <div>
          <div className="image" onClick={this.switchies}>
            <img alt="oh no!"  src={this.state.frontSide === true ? this.props.pokemon.sprites.front : this.props.pokemon.sprites.back}/>
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats.map(stat => {
                if (stat.name === 'hp'){
                  return stat.value
                }
              })}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
