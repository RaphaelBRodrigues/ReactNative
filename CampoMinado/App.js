import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import params from './src/params';
import MineField from './src/components/MineField';
import Header from './src/components/Header';
import { createMinedBoard, flagUsed, cloneBoard, openField, hasExplosion, wonGame, showMines, invertFlag } from './src/functions';
import LevelSelection from './src/screens/LevelSelection';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = this.createState();

  }

  minesAmount = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return Math.ceil(cols * rows * params.difficultLevel);
  }
  createState = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
      won: false,
      lost: false,
      showLevelSelection: false
    }
  }

  onSelectField = (row, column) => {
    const board = cloneBoard(this.state.board);
    invertFlag(board, row, column);
    const won = wonGame(board);

    if (won) {
      Alert.alert('Parabéns', 'Você venceu');
    }
    this.setState({ board, won });

  }

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board);
    openField(board, row, column);
    const lost = hasExplosion(board);
    const won = wonGame(board);

    if (lost) {
      showMines(board);
      Alert.alert('PEEEEEEEEEERDEU', 'IHAAAAAAAAAAAAAAAAA');
    }
    if (won) {
      Alert.alert('Parabéns', 'Você venceu');
    }

    this.setState({ board, lost, won });

  }

  onLevelSelected = (level) => {
    params.difficultLevel = level;
    this.createState();
  }

  render() {
    return (
      <View style={style.container}>
 <LevelSelection isVisible={this.state.showLevelSelection}
          onLevelSelected={this.onLevelSelected}
          onCancel={() => this.setState({ showLevelSelection: false })} />{/*   onCancel={this.setState({ showLevelSelection: false })}  */}
        <Header onFlagPress={() => this.setState({ showLevelSelection: true })}  flagsLeft={this.minesAmount() - flagUsed(this.state.board)} onNewGame={() => this.setState(this.createState())} />

        <View style={style.board}>
          <MineField board={this.state.board} onSelectField={this.onSelectField} onOpenField={this.onOpenField} />
        </View>

      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#299",
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  board: {
    alignItems: "center",
    backgroundColor: "#AAA"
  }
});