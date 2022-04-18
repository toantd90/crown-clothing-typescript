// import { Product } from 'Product-Types';

declare module 'Category-Types' {
  export type CategoryMap = {
    [key: string]: Array<Product>;
  };
}
