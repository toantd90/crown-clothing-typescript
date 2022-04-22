declare module 'Category-Types' {
  export type Product = {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
  };
  export type Category = {
    title: string;
    items: Product[];
  };

  export type CategoryMap = {
    [key: string]: Product[];
  };
}
