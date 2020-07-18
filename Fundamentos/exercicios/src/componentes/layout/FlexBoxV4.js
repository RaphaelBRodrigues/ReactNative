import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Estilo from '../../estilo';
 

export default (props) => {
return (
             <View style={Style.FlexV4}>
                 <View style={Style.v0}/>
                 <View style={Style.v1}/>
                 <View style={Style.v2}/>
             </View> 
    );
}

const Style = StyleSheet.create({
    FlexV4: { 
        width:100,
        flexGrow:1,
        backgroundColor: "#000"
    },
    v0:{
        height:200,
        backgroundColor:"#000"
        
    },
    v1:{
        flexGrow:9,
        backgroundColor:"#FF0",
    },
    v2:{
        flexGrow:1,
        backgroundColor:"#0FF"
    }

 
});