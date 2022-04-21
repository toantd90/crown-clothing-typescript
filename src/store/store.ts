import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import userReducer from './user/userSlice';
import categoryReducer from './category/categorySlice';

export const store = configureStore({
  reducer: { user: userReducer, category: categoryReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
