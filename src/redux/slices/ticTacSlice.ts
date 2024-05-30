import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {GameState} from '../../interfaces';
import {getWinner} from '../../utils';

const initialState: GameState = {
  board: Array(3).fill(Array(3).fill(null)),
  currentPlayer: 'X',
  winner: null,
};

const ticTacSlice = createSlice({
  name: 'ticTacReducer',
  initialState,
  reducers: {
    playGame: (state, action: PayloadAction<{row: number; col: number}>) => {
      const {row, col} = action.payload;
      if (!state.winner && !state.board[row][col]) {
        state.board[row][col] = state.currentPlayer;
        state.currentPlayer = state.currentPlayer === 'X' ? 'O' : 'X';
        state.winner = getWinner(state.board);
      }
    },
    resetGame: state => {
      state.board = Array(3).fill(Array(3).fill(null));
      state.currentPlayer = 'X';
      state.winner = null;
    },
  },
});

export const {playGame, resetGame} = ticTacSlice.actions;
export default ticTacSlice.reducer;
