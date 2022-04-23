import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/userSlice';
import categoryReducer from './category/categorySlice';
import cartReducer from './cart/cartSlice';

const reducers = combineReducers({
  user: userReducer,
  category: categoryReducer,
  cart: cartReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
