import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux-toolkit/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
