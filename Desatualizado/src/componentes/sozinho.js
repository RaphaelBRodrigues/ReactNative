import React from 'react';
import {Text, ImagePropTypes} from 'react-native';
import estilo from '../estilo/sozinho';

export default (props) =>{
return <Text style={estilo.texto}>Teste solo dia {props.dia}</Text>
}