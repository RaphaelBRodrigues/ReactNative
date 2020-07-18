import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import Estilo from '../estilo';

export default (props) => {
    const [nome, setNome] = useState('dsa');
    return (
        <View>
            <Text style={Estilo.txtGrande}>{nome}</Text>
            <TextInput
                placeholder={"Digite seu nome"}
                value={nome}
                onChangeText={(nome) => {
                    setNome(nome)
                }}
            />
        </View>
    );
}