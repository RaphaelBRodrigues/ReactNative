/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import Padrao from '../estilo/padrao.js';

export const Entrada = (props) => {
 return <TextInput
     value={props.texto}
     style={Padrao.input}
     onChangeText={props.quandoMudar}
    />
};

export class TextoSincronizado extends Component {
  state = {
    texto: '',
  };

  alterarTexto = (texto) => {
    this.setState({texto: texto});
  };

  render() {
    return (
      <View>
        <Text style={Padrao.fonte40}>{this.state.texto}</Text>
        <Entrada texto={this.state.texto} quandoMudar={this.alterarTexto}  />
      </View>
    );
  }
}
