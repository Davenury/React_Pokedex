import React from 'react'
import {PokemonComponent} from "./PokemonComponent";

function remove(array, element){
    const index = array.indexOf(element)
    if(index !== -1)
        array.splice(index, 1)
}

export class PokemonListComponent extends React.Component{

    pokemons = this.props.pokemons

    handleError = (pokemonName) => {
        remove(this.pokemons, pokemonName)
        this.props.onError(pokemonName)
    }

    render() {
        let elements = this.pokemons
            .map(pokemonName => {
                return <PokemonComponent
                    name={pokemonName}
                    key={pokemonName}
                onError={this.handleError}/>
            })
        return elements
    }
}