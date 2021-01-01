import React from 'react';
import ProgressBar from "./ProgressBar";

const MIN = 0
const MAX = 100

const normalise = value => (value - MIN) * 100 / (MAX - MIN);

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const splitStat = (string) => {
    if(string.includes('-')){
        let array = string.split('-')
        return array.join(' ')
    }
    return string;
}

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

    render(){
        return (
            <div>
                {splitStat(capitalizeFirstLetter(this.props.name))}
                <ProgressBar bgcolor={this.getColorByStat(this.props.name)} completed={normalise(this.props.base)}/>
            </div>
        )
    }
}
