import React , { useState } from 'react';
import { Text , Button } from 'react-native';
import Estilo from '../estilo';

const contador = ({ inicial , soma = 1}) => {

   const [ numero , setNumero ] = useState(inicial);

 
    const inc = () => setNumero(numero + soma);
    const dec = () => setNumero(numero - soma);
    
        
    return (
        <>
            <Text style={Estilo.txtGrande}>{numero}</Text>
            <Button onPress={dec} title="-" />
            <Button onPress={inc} title="+" />
        </>
    );
}

export default contador;
