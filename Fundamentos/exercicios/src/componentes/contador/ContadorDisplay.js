import React from 'react';
import { Text, Button , StyleSheet } from 'react-native';
import Estilo from '../../estilo';

export default ({ numero}) => {

    return (
        <Text style={[Estilo.txtGrande , style.contador]}>{numero}</Text>
    );
}

const style = StyleSheet.create({
    contador:{
        width:200,
        backgroundColor:"#000",
        color:"#FFF",
        marginBottom:20
    }
})