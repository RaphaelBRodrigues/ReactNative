import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Botao from './components/Botao';
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttons}>
          <Botao label={'AC'} onClick={() => { }} />
          <Botao label={0} onClick={() => { }} />
          <Botao label={'/'} onClick={() => { }} />
          <Botao label={7} onClick={() => { }} />
          <Botao label={8} onClick={() => { }} />
          <Botao label={9} onClick={() => { }} />
          <Botao label={'*'} onClick={() => { }} />
          <Botao label={4} onClick={() => { }} />
          <Botao label={5} onClick={() => { }} />
          <Botao label={6} onClick={() => { }} />
          <Botao label={'-'} onClick={() => { }} />
          <Botao label={2} onClick={() => { }} />
          <Botao label={3} onClick={() => { }} />
          <Botao label={'+'} onClick={() => { }} />
          <Botao label={0} onClick={() => { }} />
          <Botao label={'.'} onClick={() => { }} />
          <Botao label={'='} onClick={() => { }} />
        </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  buttons: {
    flexDirection: "row",
    flexWrap: "wrap"
  }

});
