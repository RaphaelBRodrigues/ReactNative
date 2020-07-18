import React from 'react';
import { Button } from 'react-native';

export default (props) =>{

    const executar = () =>{
        console.warn("Executado");
    }

    return(
        <>
            <Button title="Clique 1" onPress={executar} />
            <Button title="Clique 2" onPress={()=>console.warn("Botao 2")} />
        </>
    );
}