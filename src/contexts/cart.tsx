import React, { createContext, useState } from 'react';

const useValue = () => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  return { isCartOpen, setIsCartOpen };
};

export const CartContext = createContext({} as ReturnType<typeof useValue>);

export const CartProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const { isCartOpen, setIsCartOpen } = useValue();

  return (
    <CartContext.Provider value={{ isCartOpen, setIsCartOpen }}>
      {children}
    </CartContext.Provider>
  );
};
