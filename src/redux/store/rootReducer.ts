// rootReducer.ts
import { combineReducers } from 'redux';
import ticTacReducer from '../slices/ticTacSlice';

const rootReducer = combineReducers({
  game: ticTacReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
