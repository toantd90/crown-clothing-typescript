import React, { createContext, useState } from 'react';

import { Product } from 'Product-Types';

import SHOP_DATA from 'shop-data.json';

const useValue = () => {
  const [products, setProducts] = useState<Product[]>(SHOP_DATA);

  return { products, setProducts };
};

export const ProductsContext = createContext({
  products: [] as Product[],
} as ReturnType<typeof useValue>);

export const ProductsProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const { products, setProducts } = useValue();

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};
