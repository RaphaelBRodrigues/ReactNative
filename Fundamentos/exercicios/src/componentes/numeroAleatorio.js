import React from 'react';
import { Text } from 'react-native';
import Estilo from '../estilo'

export default (props) => {

    let aleatorio;
    const { min , max } = props ;
    console.warn(max);
    aleatorio = parseInt((Math.random()*((max - min + 1) ) + min)) ;


    return (
        <Text style={Estilo.txtGrande}>Número aleatório: {aleatorio}</Text>
    );
}
