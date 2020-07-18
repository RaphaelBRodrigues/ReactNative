import React from 'react';
import { Text } from 'react-native';
import If from './if';

export default ({usuario = {}}) => {
    return(
        <If teste={usuario && Object.keys(usuario).length != 0}>
        <Text>
            Usuário logado:{usuario.nome} {usuario.sobrenome}
        </Text>
        </If>
    );
}
