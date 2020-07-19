import React from 'react';
import { Text, StyleSheet, Dimensions, TouchableHighlight } from 'react-native';

export default (props) => {
    const stylesButton = [style.button];

    if (props.double) { stylesButton.push(style.buttonDouble) }
    if (props.triple) { stylesButton.push(style.buttonTriple) }
    if (props.operation) { stylesButton.push(style.operationButton) }

    return (
        <>
            <TouchableHighlight 
            activeOpacity={0.1}
                style={stylesButton} onPress={(() => props.onClick(`${props.label}`))}>
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
    operationButton: {
        color: '#fff',
        backgroundColor: "#F74"
    },
    buttonDouble: {
        width: (Dimensions.get("window").width / 4) * 2
    },
    buttonTriple: {
        width: (Dimensions.get("window").width / 4) * 3
    },
    texto: {
        fontSize: 30
    }
});