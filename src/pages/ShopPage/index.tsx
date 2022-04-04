import { useContext } from 'react';

import { ProductCard } from 'components';
import { ProductsContext } from 'contexts/products';

import styles from './shopPage.module.scss';

const ShopPage = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className={styles.productsContainer}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ShopPage;
