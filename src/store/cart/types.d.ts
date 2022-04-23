declare module 'Cart-Types' {
  export type Product = {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
  };

  export type CartItem = Product & {
    quantity: number;
  };
}
