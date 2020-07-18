import React from 'react';
import { Text } from 'react-native';
import Padrao from '../estilo/padrao';

export default () => {
    return <Text style={Padrao.ex}>Multi default</Text>
}

export const Inverter = ({ route }) =>{
    let texto = "tesa";
    texto =  route.params.user;
        const inv = texto.split("").reverse().join("");
return <Text style={Padrao.ex}>{inv}</Text>

}

export function TesteSolo(props){
    const txt = props.inverter.split("").reverse();
return <Text style={Padrao.ex}>{txt}</Text>
}

export const MegaSena = (props) => {
    const [min,max] = [10 , 60];
    let teste = parseInt(props.quantidade);
    const numeros = Array(teste || 6).fill(0);
    let rand = 0;
        for(let i = 0;i < numeros.length;i++){
            rand = Math.floor(Math.random()*max);
            while(rand < min){
                rand = Math.floor(Math.random()*max);
            }
            numeros[i] = rand;
        }

return <Text style={Padrao.ex}>{numeros.join(" | ")}</Text>
}

//Também pode ser feito o export de vários componentes nomeados de uma só vez

const Cp1 = () => {
    return <Text>Cp1</Text>
}

const Cp2 = () => {
    return <Text>Cp2</Text>
}
export {Cp1,Cp2};