import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Estilo from '../../estilo';
import Quadrado from './Quadrado';


export default (props) => {
    return (
             <View style={Style.FlexV1}>
                <Quadrado cor={"#FF0"} />
                <Quadrado cor={"#F00"} />
                <Quadrado cor={"#0F0"} />
                <Quadrado cor={"#00f"} />
            </View> 
    );
}

const Style = StyleSheet.create({
    FlexV1: {
        flexGrow: 1,
        justifyContent:"space-evenly",
        backgroundColor: "#000"
    }
});