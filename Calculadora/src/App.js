import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Botao from './components/Botao';
import Display from './components/Display';


const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
}


export default class App extends Component {

  state = {
    ...initialState
  };
  // state = initialState;


  adicionarDigito = (n) => {
    console.debug(typeof this.state.displayValue);

    if (this.state.displayValue == '0') {
      this.setState({ displayValue: n });
    } else {

      this.setState({ displayValue: this.state.displayValue + n });
    }
    if (n === '.' && !clearDisplay  &&this.state.displayValue.includes('.')) {
      return false;
    }
    const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay;
    const currentValue = clearDisplay ? '' : this.state.displayValue;
    const displayValue = currentValue + n;
    this.setState({ displayValue, clearDisplay: false });

    if (n !== '.') {
      const newValue = parseFloat(displayValue);
      const values = [...this.state.values];
      values[this.state.current] = newValue;
      this.setState({ values });
    }

  }
  limparDisplay = () => {
    this.setState({ ...initialState });
  }
  setOperation = (operation) => {
    if (this.state.current === 0) {
      this.setState({ operation, current: 1, clearDisplay: true });
    } else {
      const equals = operation === '=';
      const values = [...this.state.values];

      try {
        values[0] =
          eval(`${values[0]} ${this.state.operation} ${values[1]}`);
      } catch (e) {
        values[0] = this.state.values[0];
      }
      values[1] = 0;
      this.setState({
        displayValue: `${values[0]}`,
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values
      });
    }

  }


  render() {
    return (
      <View style={styles.container}>
        <Display value={this.state.displayValue} />
        <View style={styles.buttons}>
          <Botao label={'AC'} onClick={this.limparDisplay} triple />
          <Botao label={'/'} onClick={() => { this.setOperation('/') }} operation />
          <Botao label={7} onClick={this.adicionarDigito} />
          <Botao label={8} onClick={() => { this.adicionarDigito('8') }} />
          <Botao label={9} onClick={() => { this.adicionarDigito('9') }} />
          <Botao label={'*'} onClick={() => { this.setOperation('*') }} operation />
          <Botao label={4} onClick={() => { this.adicionarDigito('4') }} />
          <Botao label={5} onClick={() => { this.adicionarDigito('5') }} />
          <Botao label={6} onClick={() => { this.adicionarDigito('6') }} />
          <Botao label={'-'} onClick={() => { this.setOperation('-') }} operation />
          <Botao label={1} onClick={() => { this.adicionarDigito('1') }} />
          <Botao label={2} onClick={() => { this.adicionarDigito('2') }} />
          <Botao label={3} onClick={() => { this.adicionarDigito('3') }} />
          <Botao label={'+'} onClick={() => { this.setOperation('+') }} operation />
          <Botao label={0} onClick={() => { this.adicionarDigito('0') }} double />
          <Botao label={'.'} onClick={() => { this.adicionarDigito('.') }} />
          <Botao label={'='} onClick={() => { this.setOperation('=') }} operation />
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
