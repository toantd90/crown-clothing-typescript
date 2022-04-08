import React, { createContext, useState } from 'react';

import { CartItem, Product } from 'Product-Types';

const addCartItem = (cartItems: CartItem[], productToAdd: Product) => {
  const cartItemIndex = cartItems.findIndex(
    (cartItem) => cartItem.id === productToAdd.id,
  );

  if (cartItemIndex === -1) {
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  }

  return cartItems.map((cartItem) =>
    cartItem.id !== cartItemIndex
      ? cartItem
      : {
          ...cartItem,
          quantity: cartItem.quantity + 1,
        },
  );
};

const useValue = () => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([] as CartItem[]);
  const addItemToCart = (productToAdd: Product) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  return { isCartOpen, setIsCartOpen, cartItems, addItemToCart };
};

export const CartContext = createContext({} as ReturnType<typeof useValue>);

export const CartProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const { isCartOpen, setIsCartOpen, cartItems, addItemToCart } = useValue();

  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
