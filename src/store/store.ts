import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import userReducer from './user/userSlice';
import categoryReducer from './category/categorySlice';
import cartReducer from './cart/cartSlice';

export const store = configureStore({
  reducer: { user: userReducer, category: categoryReducer, cart: cartReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
