import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import {Typography} from "@material-ui/core";
import swal from 'sweetalert';
import {PokemonTypeComponent} from "./PokemonTypeComponent";
import Box from '@material-ui/core/Box';
import ReactCardFlip from "react-card-flip";
import {StatComponent} from "./StatComponent";

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
        this._stats = apiResult.stats
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
        types = types.map((type, idx) => <Box mr={1} display="inline"><PokemonTypeComponent type={type} key={idx} /></Box>)
        return types;
    }

    get stats(){
        return this._stats
            .map((stat, idx) => <StatComponent name={stat.stat.name} base={stat.base_stat} key={idx}/>)
    }
}

export class PokemonComponent extends React.Component {

    state = {
        pokemon: null,
        isFlipped: false
    };

    componentDidMount() {
        this.mounted = true;
        this.setPokemon(this.props.name);
    }

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    setPokemon(name) {
        this.name = name
        P.getPokemonByName(name)
            .then((response) => {
                if (this.mounted) {
                    this.setState({pokemon: new Pokemon(response)})
                }
            })
            .catch(() => {
                this.setState({pokemon: undefined})
            })
    }


    componentWillUnmount() {
        this.mounted = false;
    }

    handleClick() {
        this.setState(prevState =>({ isFlipped: !prevState.isFlipped }))
    }


    render() {
        if (this.state.pokemon === undefined) {
            swal("Looks like we didn't catch this Pokemon either!",
                "Maybe you've misspelled it's name?", "error")
            this.state.pokemon = null
            this.props.onError(this.name)
            return <div></div>;
        }
        if (this.state.pokemon === null) {
            return <CircularProgress/>
        } else {
                return (
                    <ReactCardFlip
                        isFlipped={this.state.isFlipped}
                        infinite="true">
                            <div onClick={this.handleClick}>
                                <Card className="PokemonCard"
                                      key={this.state.pokemon.name}>
                                    <CardMedia
                                        className="PokemonImage"
                                        image={this.state.pokemon.image}/>
                                    <CardContent>
                                        <Typography variant={"h5"}>
                                            {this.state.pokemon.name}
                                        </Typography>
                                        <Divider/>
                                        <Box mt={2}>
                                            {this.state.pokemon.types}
                                        </Box>
                                    </CardContent>
                                </Card>
                            </div>

                            <div onClick={this.handleClick}>
                                <Card className="PokemonCard">
                                    <CardContent>
                                        {this.state.pokemon.name}
                                        {this.state.pokemon.stats}
                                    </CardContent>
                                </Card>
                            </div>
                    </ReactCardFlip>
                );
        }
    }
}