import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import {Typography} from "@material-ui/core";

const Pokedex = require("pokeapi-js-wrapper");
const P = new Pokedex.Pokedex();


const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


class Pokemon{
    constructor(apiResult) {
        this._apiResult = apiResult
        this._name = apiResult.name;
        this._image = apiResult.sprites.front_default;
    }

    get name(){
        return capitalizeFirstLetter(this._name);
    }

    get image(){
        return this._image;
    }

    get types(){
        let types = []
        this._apiResult.types
            .map(type => types.push(type.type.name))
        types = types.map(type => capitalizeFirstLetter(type))
        return types.join(", ");
    }
}

export class PokemonComponent extends React.Component {

    state = {
        pokemon: null
    };

    constructor(props) {
        super(props);
        console.log(this.props.name)
    }

    componentDidMount() {
        this.setPokemon(this.props.name);
    }

    setPokemon(name) {
        this._asyncRequest = P.getPokemonByName(name)
            .then((response) => {
                this._asyncRequest = null;
                this.setState({pokemon: new Pokemon(response)})
            })
    }

    componentWillUnmount() {
        if (this._asyncRequest) {
            this._asyncRequest.cancel();
        }
    }

    render() {
        if (this.state.pokemon === null) {
            return <CircularProgress/>
        } else {
            return (
                <Card className="PokemonCard">
                    <CardMedia className="PokemonImage" image={this.state.pokemon.image}/>
                    <CardContent>
                        <Typography variant={"h5"}>
                            {this.state.pokemon.name}
                        </Typography>
                        <Divider/>
                        {this.state.pokemon.types}
                    </CardContent>
                </Card>
            );
        }
    }
}