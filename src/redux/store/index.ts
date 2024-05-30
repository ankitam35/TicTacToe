import { configureStore } from '@reduxjs/toolkit';
import ticTacReducer from '../slices/ticTacSlice';

export const store = configureStore({
  reducer: {
    game: ticTacReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
