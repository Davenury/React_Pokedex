import React from 'react'
import './App.css';
import {PokemonListComponent} from "./PokemonListComponent";
import {Button} from "@material-ui/core";

function remove(array, element){
    const index = array.indexOf(element)
    if(index !== -1)
        array.splice(index, 1)
}

export class App extends React.Component{

    state = {
        pokemons : []
    }

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleError = this.handleError.bind(this);
    }

    handleClick () {
        let pokemonName = document.getElementById("NewPokemonName").value.toLowerCase();
        this.state.pokemons.unshift(pokemonName);
        this.setState(
            { pokemons: this.state.pokemons}
        )
        document.getElementById("NewPokemonName").value = "";
    };

    handleError(pokemonName){
        remove(this.state.pokemons, pokemonName)
        this.setState({pokemons: this.state.pokemons})
    }

    render() {
        return (
            <div className="App">
                <input
                    id="NewPokemonName"
                    placeholder="Enter Pokemon Name"
                    type="text"
                    className="PokemonInput"/>
                <div className="center">
                    <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        onClick={this.handleClick}>Add Pokemon</Button>
                </div>
                <PokemonListComponent
                    pokemons={this.state.pokemons}
                    onError={this.handleError}
                />
            </div>
        );
    }
}

