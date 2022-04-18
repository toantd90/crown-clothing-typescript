import { useContext } from 'react';

import { ProductCard } from 'components';
import { CategoriesContext } from 'contexts/categories';

import styles from './shopPage.module.scss';

const ShopPage = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categoriesMap).map((title: string) => (
        <>
          <h2>{title.toUpperCase()}</h2>
          <div className={styles.productsContainer}>
            {categoriesMap[title].slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      ))}
    </>
  );
};

export default ShopPage;
