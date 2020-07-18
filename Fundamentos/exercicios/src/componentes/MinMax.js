import React from 'react';
import { Text } from 'react-native';
import Estilo from '../estilo';


export default (props) => {
    return (
    <Text style={Estilo.txtGrande}>
        O valor de {props.max} é maior que o de {props.min}
    </Text>
    )
}