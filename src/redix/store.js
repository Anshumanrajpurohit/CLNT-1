import { configureStore } from '@reduxjs/toolkit';
import recommendedReducer from './recommendedSlice';

export const store = configureStore({
  reducer: {
    recommended: recommendedReducer,
  },
});
