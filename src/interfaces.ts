export type Player = 'X' | 'O' | null;
export type Board = Player[][];

export interface GameState {
  board: Board;
  currentPlayer: Player;
  winner: Player;
}

export interface SquareProps {
    value: 'X' | 'O' | null;
    onPress: () => void;
  }
  