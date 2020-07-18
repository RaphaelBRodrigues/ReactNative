import React from 'react';
import { Text } from 'react-native';
import Eslito from '../../estilo';
import produtos from './Produtos';




export default (props) => {

    const lista = () => {
        return produtos.map((produto) => {
            return <Text key={produto.id}>
                {produto.id} - {produto.nome} - R${produto.preco}
                </Text>
        });
    } 
    return (
        <>
        <Text>
            Lista de produtos
        </Text>
        {lista()}

        </> 
    );
}
