import React, { useState } from 'react';
import { Text, Button } from 'react-native';
import Display from './ContadorDisplay';
import Controle from './ContadorBotoes';

export default (props) => {

    const [numero, setNumero] = useState(0);

    const incNumero = () => {
        setNumero(numero + 1);
    }
    const decNumero = () => {
        setNumero(numero - 1);
    }



    return (
        <>
            <Display numero={numero} />
            <Controle decrementarFunc={decNumero} incrementarFunc={incNumero} />
        </>
    );
}