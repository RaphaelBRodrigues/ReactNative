import React from 'react';
import { View, Text } from 'react-native';
import Estilo from '../estilo';

export default (props) => {
         return (
            <View>
                <Text style={Estilo.txtGrande}>
                    {props.num % 2 === 0 ? "Par" : "Ímpar"}
                </Text>
            </View>
        );
    }

