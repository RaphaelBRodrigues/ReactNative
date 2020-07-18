//Importando o componente pai da biblioteca
import React, {Component} from 'react';

//Importando os componentes do react-native { }
import {View, StyleSheet} from 'react-native';

//Importando componente
import Simples from './componentes/simples';
import Mod from './componentes/parImpar';
import Solo from './componentes/sozinho.js';

//Componentes exportados como default não precisam de chaves,já componentes nomeados sim
import Multi, {
  Inverter,
  TesteSolo,
  MegaSena,
  Cp1,
} from './componentes/multi.js';
//Exportando um 'tela' que está sendo importando no index.js
//Com classe
export default class App extends Component {
  //A tela que será renderizada

  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={styles.f20}>Olá Classe!</Text> */}
        {/* 'texto' é um dos parâmetros que seŕa passado para a função */}
        <Simples texto="Parâmetro" />
        <Mod numero="4" />
        <Solo dia="4" />

        <Multi />
        <Cp1 />
        <Inverter texto="Raphael" />
        <TesteSolo inverter="MultiSolo" />
        <MegaSena quantidade="7" />
      </View>
    );
  }
}

/*
//Com função
export default function(){
  return(
    <View style={styles.container}>
          <Text style={styles.f20}>Olá Função!</Text>
      </View>
  );
}r
*/

/*O stylesheet é um objeto da classe Stylesheet,o design dos
elementos são objetos dentro do objeto*/
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
