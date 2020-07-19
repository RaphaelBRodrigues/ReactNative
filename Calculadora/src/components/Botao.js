import React from 'react';
import { Text, StyleSheet, Dimensions, TouchableHighlight } from 'react-native';

export default (props) => {
    return (
        <>
            <TouchableHighlight style={style.button} onPress={(props.onClick)}>
                <Text style={style.texto} >{props.label}</Text>
            </TouchableHighlight>
        </>
    );
}







const style = StyleSheet.create({
    button: {
        padding: 20,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#888",
        height: Dimensions.get("window").width / 4,
        width: Dimensions.get("window").width / 4
    },
    texto: {
        fontSize:  30
    }
});