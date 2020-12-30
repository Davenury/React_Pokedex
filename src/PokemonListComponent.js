import React from 'react'
import {PokemonComponent} from "./PokemonComponent";

export class PokemonListComponent extends React.Component{
    render() {
        return this.props.pokemons
            .map((pokemonName, key) => {
                return <PokemonComponent name={pokemonName} key={key}/>
            })
    }
}