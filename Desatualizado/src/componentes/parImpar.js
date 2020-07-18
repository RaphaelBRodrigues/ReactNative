import React from 'react';
import { View, Text } from 'react-native';
import Padrao from '../estilo/padrao.js';
import If from './if.js';


// //Renderização condicional
// export default (props) => {

//     if(props.numero % 2 == 0){
//         return <Text>Par</Text>;
//     }else if(props.numero % 2 == 1){
//         return <Text>Impar</Text>;
//     }
//     return <Text>Valor inválido</Text>;
// };



// export default (props) => 
//     <View>
//         {
//             props.numero % 2 == 0 
//             ?
//             <Text style={[Padrao.ex]}>
//                 Par
//             </Text>
//             :
//             <Text style={[Padrao.ex]}>
//                 Impar
//             </Text>
//         }
//     </View>




//Teste com função
function parImparFunction(numero){
    if(numero % 2 == 0){
        return <Text>Par</Text>
    }else{
        return <Text>Impar</Text>

    }
}

export default class parImpar extends React.Component {
    render() {
        return parImparFunction(this.props.numero);
    };
}


/*
//Teste com a tag IF importado renderizando o .children
export default (props) => {
    return (
    <View>
    <If test={props.numero % 2 == 0}>
        <Text>Par</Text>
    </If>
    <If test={props.numero % 2 == 1}>
     <Text>Impar</Text>
 </If>
 </View>
    )
}
*/