import React, { createContext, useState } from 'react';

import { CartItem, Product } from 'Product-Types';

const addCartItem = (cartItems: CartItem[], productToAdd: Product) => {
  const cartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id,
  );

  if (!cartItem) {
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  }

  return cartItems.map((item) =>
    item.id !== cartItem.id
      ? item
      : {
          ...item,
          quantity: item.quantity + 1,
        },
  );
};

const useValue = () => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([] as CartItem[]);
  const addItemToCart = (productToAdd: Product) => {
    setCartItems(addCartItem(cartItems, productToAdd));
    setCardCount(cartCount + 1);
  };
  const [cartCount, setCardCount] = useState<number>(0);

  return { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount };
};

export const CartContext = createContext({} as ReturnType<typeof useValue>);

export const CartProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount } =
    useValue();

  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
