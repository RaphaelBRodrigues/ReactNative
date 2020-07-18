import React from 'react';
import { Text , StyleSheet} from 'react-native';

//Importando o stylesheet
import Padrao from '../estilo/padrao.js';

//Componente Funcional

// export default function(props){
//     //o props é o conjunto dos parâmetros passados
//     return <Text style={styles.texto}>{props.texto}</Text>;
// }


//Arrow function
// export default props => <Text>Teste</Text>;
// export default (props) => <Text>Teste</Text>

export default (props) => {
     //Padrao é o stylesheet importado e o styles é o local
     return <Text style={[Padrao.ex,styles.texto]}>Arrow:{props.texto}</Text>;
}
   



const styles = StyleSheet.create({
    texto:{
        fontSize:40,
        color:'white'
    
    }
});