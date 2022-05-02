import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  selectCategoryMap,
  selectIsLoading,
} from 'store/category/slice';
import { useAppSelector } from 'store/hooks';

import { ProductCard, Spinner } from 'components';

import { Product } from 'Cart-Types';

import styles from './category.module.scss';

const Category = () => {
  const { category } = useParams();

  const categoriesMap = useAppSelector(selectCategoryMap);
  const isLoading = useAppSelector(selectIsLoading);
  const [products, setProducts] = useState<Product[]>(
    categoriesMap[category || ''],
  );

  useEffect(() => {
    setProducts(categoriesMap[category || '']);
  }, [categoriesMap, category]);

  return (
    <>
      <h2 className={styles.categoryTitle}>
        {category && category.toUpperCase()}
      </h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className={styles.categoryContainer}>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      )}
    </>
  );
};

export default Category;
