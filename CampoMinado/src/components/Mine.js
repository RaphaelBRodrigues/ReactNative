import React from 'react';
import { View, StyleSheet } from 'react-native';
import params from '../params';

export default () => {
    return (
        <View style={style.container}>
            <View style={style.coreMine} />
            <View style={style.line} />
            <View style={[style.line, { transform: [{ rotate: "45deg" }] }]} />
            <View style={[style.line, { transform: [{ rotate: "90deg" }] }]} />
            <View style={[style.line, { transform: [{ rotate: "135deg" }] }]} />
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",

    },
    coreMine: {
        height: 15,
        width: 15,
        borderRadius: 10,
        backgroundColor: "#111",
        alignItems: "center",
        justifyContent: "center"

    },
    line: {
        position: "absolute",
        height: 3,
        width: params.blockSize - (params.borderSize * 1.1),
        borderRadius: 3,
        backgroundColor: "black"
    }
});