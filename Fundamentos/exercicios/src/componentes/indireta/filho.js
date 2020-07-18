import React, { useState } from 'react';
import { Button, Text } from 'react-native';


export default (props) => {
    let min = props.min;
    let max = props.max;
    let exibir = props.funcao;
    



    const gerarAleatorio = (min,max) => {
        let delta = max - min + 1;
        return aleatorio = parseInt(Math.random() * (delta) + min);
    }


    
    return (
        <>
            <Button
                title="Executar"
                onPress={() => {
                   const numero = gerarAleatorio(min,max);
                   exibir(numero);

                }}
            />
        </>
    );
}