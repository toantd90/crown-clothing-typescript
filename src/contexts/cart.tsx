import React, { createContext, useState } from 'react';

import { CartItem, Product } from 'Cart-Types';

const handleRemoveCartItem = (
  cartItems: CartItem[],
  cartItemToRemove: CartItem,
) => cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);

const handleCartItemChange = (
  cartItems: CartItem[],
  productToAdd: Product,
  isIncrease: boolean,
) => {
  const cartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id,
  );

  if (!cartItem) {
    return isIncrease
      ? [...cartItems, { ...productToAdd, quantity: 1 }]
      : cartItems;
  }

  const quantity = isIncrease ? cartItem.quantity + 1 : cartItem.quantity - 1;
  return quantity === 0
    ? cartItems.filter((item) => item.id !== cartItem.id)
    : cartItems.map((item) =>
        item.id !== cartItem.id ? item : { ...item, quantity },
      );
};

const useValue = () => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([] as CartItem[]);
  const cartItemChange = (
    productToAdd: Product,
    isIncrease: boolean = true,
  ) => {
    setCartItems(handleCartItemChange(cartItems, productToAdd, isIncrease));
    setCardCount(
      isIncrease ? cartCount + 1 : cartCount - 1 > 0 ? cartCount - 1 : 0,
    );
    setCartTotal(
      cartTotal + (isIncrease ? productToAdd.price : -productToAdd.price),
    );
  };
  const cartItemRemove = (cartItemToRemove: CartItem) => {
    setCartItems(handleRemoveCartItem(cartItems, cartItemToRemove));
    setCardCount(cartCount - cartItemToRemove.quantity);
    setCartTotal(
      cartTotal - cartItemToRemove.quantity * cartItemToRemove.price,
    );
  };
  const [cartCount, setCardCount] = useState<number>(0);
  const [cartTotal, setCartTotal] = useState<number>(0);

  return {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    cartItemChange,
    cartItemRemove,
    cartCount,
    cartTotal,
  };
};

export const CartContext = createContext({} as ReturnType<typeof useValue>);

export const CartProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    cartItemChange,
    cartItemRemove,
    cartCount,
    cartTotal,
  } = useValue();

  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        cartItems,
        cartItemChange,
        cartItemRemove,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
