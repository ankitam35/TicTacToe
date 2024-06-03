import React from 'react';
import {View, Button, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {playGame, resetGame} from '../redux/slices/ticTacSlice';
import Square from './Square';
import styles from '../styles';
import { RootState } from '../redux/store/rootReducer';

const Game = () => {
  const dispatch = useDispatch();
  const {board, currentPlayer, winner} = useSelector(
    (state: RootState) => state.game,
  );

  return (
    <View style={styles.container}>
      <Text style={styles.status}>
        {winner ? `Winner is: ${winner}` : `Next player is : ${currentPlayer}`}
      </Text>
      {board.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((cell, colIndex) => (
            <Square
              key={colIndex}
              value={cell}
              onPress={() => dispatch(playGame({row: rowIndex, col: colIndex}))}
            />
          ))}
        </View>
      ))}
      <View style={styles.marginTop20}>
        <Button title="Restart" onPress={() => dispatch(resetGame())} />
      </View>
    </View>
  );
};

export default Game;
