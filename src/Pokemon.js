import React from 'react'

const Pokedex = require("pokeapi-js-wrapper");
const P = new Pokedex.Pokedex();

export class Pokemon extends React.Component{

    state = {
        pokemon: null
    };

    componentDidMount(){
        this.setPokemon(this.props.name);
    }

    setPokemon(name){
        this._asyncRequest = P.getPokemonByName(name)
            .then((pokemon) => {
                this._asyncRequest = null;
                this.setState({pokemon})
                console.log(pokemon)
            })
    }

    componentWillUnmount() {
        if(this._asyncRequest){
            this._asyncRequest.cancel();
        }
    }

    render(){
        if(this.state.pokemon === null){
            return <h1>Wait for it</h1>
        }
        else {
            return <h1>{this.state.pokemon.name}</h1>
        }
    }
}