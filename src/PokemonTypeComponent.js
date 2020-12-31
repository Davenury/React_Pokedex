import React from 'react'

function getColorByPokemonType(pokemonType) {
    pokemonType = pokemonType.toLowerCase();
    switch(pokemonType){
        case "normal": return "#a8a878"
        case "fire": return "#f08030"
        case "water": return "#6890f0"
        case "grass": return "#78c850"
        case "electric": return "#f8d030"
        case "ice": return "#98d8d8"
        case "ground": return "#e0c068"
        case "flying": return "#a890f0"
        case "poison": return "#a040a0"
        case "fighting": return "#c03028"
        case "psychic": return "#f85888"
        case "dark": return "#705848"
        case "rock": return "#b8a038"
        case  "bug": return "#a8b820"
        case "ghost": return "#705898"
        case "steel": return "#b8b8d0"
        case "dragon": return "#7038F8"
        case "fairy": return "#ffaec9"
        default: return "#f0f0f0"
    }
}

export class PokemonTypeComponent extends React.Component{

    divStyle = {
        backgroundColor: getColorByPokemonType(this.props.type)
    }

    render(){
        return <div style={this.divStyle} className="PokemonType">{this.props.type}</div>
    }
}