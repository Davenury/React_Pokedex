import React from 'react';
import {LinearProgress} from "@material-ui/core";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";

const MIN = 0
const MAX = 100

const normalise = value => (value - MIN) * 100 / (MAX - MIN);

export class StatComponent extends React.Component{

    getColorByStat = stat => {
        switch(stat){
            case 'hp': return '#ff0000';
            case 'attack': return '#F08030';
            case 'defense': return '#F8D030';
            case 'special-attack': return '#6890F0';
            case 'special-defense': return '#78C850';
            case 'speed': return '#F85888';
            default: return '#ffffff';
        }
    }

    theme = createMuiTheme({
        palette:{
            secondary: {
                main: this.getColorByStat(this.props.name)
            }
        }
    })

    render(){
        return (
            <div>
                {this.props.name}
                <MuiThemeProvider theme={this.theme}>
                <LinearProgress
                    color="secondary"
                    variant="determinate"
                    value={normalise(this.props.base)}/>
                </MuiThemeProvider>
            </div>
        )
    }
}
