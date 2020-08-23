import React from 'react';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import Flag from './Flag';

export default (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.flagContainer}>
                <TouchableOpacity onPress={props.onFlagPress} style={StyleSheet.flagBUtton}>
                    <Flag bigger />
                </TouchableOpacity>
                <Text style={styles.flagsLeft}> = {props.flagsLeft}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={props.onNewGame}>
                <Text style={styles.buttonLabel}>
                    Novo Jogo
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        backgroundColor:"#EEe",
        alignItems:"center",
        justifyContent:"space-around",
        paddingTop:20,
        paddingHorizontal:20
    },
    flagsContainer:{
        flexDirection:"row",
    },
    flagsLeft:{
        fontWeight:"bold",
        paddingTop:5,
        marginLeft:20
    },
    flagButton:{
        marginTop:10,
        minWidth:30,
    },
    buttonLabel:{
        fontSize:20,
        color:"#DDD",
        fontWeight:"bold"
    },
    button:{
        backgroundColor:"#999",
        padding:5,
    },
});