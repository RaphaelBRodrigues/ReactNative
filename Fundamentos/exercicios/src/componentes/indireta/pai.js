import React, { useState } from 'react';
import { Text } from 'react-native'
import Filho from './filho';
import Estilo from '../estilo';

export default () => {

    const [ numero , setNumero ] = useState(0);


    const exibir = (num) => {
        setNumero(num);
    }


    return (
       <>
        <Filho min={0} max={65} funcao={exibir} />
        <Text style={Estilo.js}>
            {numero}
        </Text>
    </>
    );
}