import React from 'react';
import { Text ,FlatList} from 'react-native';
import Eslito from '../../estilo';
import produtos from './Produtos';




export default (props) => {

  
    return (
        <>
        <Text>
            Lista de produtos(V2)
        </Text>
        <FlatList 
            data={produtos}
            keyExtractor={(i)=>`${i.id}`}
            renderItem={({item : produto})=>{
            return <Text>{produto.nome}{produto.preco}</Text>
            }}
        />
        </> 
    );
}
