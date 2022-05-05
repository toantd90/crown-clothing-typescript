import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/store';

import { Product, CartItem } from 'Cart-Types';

export interface CartState {
  isCartOpen: boolean;
  cartItems: CartItem[];
  cartCount: number;
  cartTotal: number;
}

const initialState: CartState = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem: (state, action: PayloadAction<Product>) => {
      const productToAdd = action.payload;
      const cartItem: CartItem | undefined = state.cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id,
      );

      state.cartCount = state.cartCount + 1;
      state.cartTotal = state.cartTotal + productToAdd.price;

      if (cartItem) {
        state.cartItems = state.cartItems.map((item) =>
          item.id !== cartItem.id
            ? item
            : { ...item, quantity: cartItem.quantity + 1 },
        );

        return;
      }

      state.cartItems = [...state.cartItems, { ...productToAdd, quantity: 1 }];
    },
    removeCartItem: (state, action: PayloadAction<Product>) => {
      const productToRemove = action.payload;
      const cartItem: CartItem | undefined = state.cartItems.find(
        (cartItem) => cartItem.id === productToRemove.id,
      );

      if (cartItem) {
        state.cartItems = state.cartItems.map((item) =>
          item.id !== cartItem.id
            ? item
            : {
                ...item,
                quantity: cartItem.quantity > 1 ? cartItem.quantity - 1 : 0,
              },
        );
        state.cartCount = state.cartCount - 1;
        state.cartTotal = state.cartTotal - productToRemove.price;
      }
    },
    clearCartItem: (state, action: PayloadAction<CartItem>) => {
      const cartItemToClear = action.payload;
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== cartItemToClear.id,
      );
      state.cartCount = state.cartCount - cartItemToClear.quantity;
      state.cartTotal =
        state.cartTotal - cartItemToClear.price * cartItemToClear.quantity;
    },
    setIsCartOpen: (state, action: PayloadAction<boolean>) => {
      state.isCartOpen = action.payload;
    },
  },
});

export const { addCartItem, removeCartItem, clearCartItem, setIsCartOpen } =
  cartSlice.actions;

const selectCart = (state: RootState) => state.cart;

export const selectIsCartOpen = createSelector(
  selectCart,
  (cartSlice) => cartSlice.isCartOpen,
);

export const selectCartItems = createSelector(
  selectCart,
  (cartSlice) => cartSlice.cartItems,
);

export const selectCartCount = createSelector(
  selectCart,
  (cartSlice) => cartSlice.cartCount,
);

export const selectCartTotal = createSelector(
  selectCart,
  (cartSlice) => cartSlice.cartTotal,
);

export default cartSlice.reducer;
