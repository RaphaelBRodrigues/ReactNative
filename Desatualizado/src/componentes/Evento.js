import React , { Component } from 'react';
import { View , Text , TextInput } from 'react-native';
import Padrao from '../estilo/padrao.js';

export default class Evento extends Component{


    state = {
        texto:null
    }

     alterarTexto = texto => {
        // this.setState({texto}); DA NA MESMA
        this.setState({texto:texto});
    }

    render(){

        return (
            <View>
                <Text style={Padrao.fonte40}>{this.state.texto}</Text>
                
                <TextInput value={this.state.texto} 
                     style={Padrao.input}
                     onChangeText={this.alterarTexto}
                />
                </View>
       
        )
    }

}