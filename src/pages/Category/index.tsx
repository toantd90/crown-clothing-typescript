import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { selectCategoryMap } from 'store/category/categorySlice';
import { useAppSelector } from 'store/hooks';

import { ProductCard } from 'components';

import { Product } from 'Product-Types';

import styles from './category.module.scss';

const Category = () => {
  const { category } = useParams();
  console.log('rerender Category component');

  const categoriesMap = useAppSelector(selectCategoryMap);
  const [products, setProducts] = useState<Product[]>(
    categoriesMap[category || ''],
  );

  useEffect(() => {
    console.log('useEffect fired');
    setProducts(categoriesMap[category || '']);
  }, [categoriesMap, category]);

  return (
    <>
      <h2 className={styles.categoryTitle}>
        {category && category.toUpperCase()}
      </h2>
      <div className={styles.categoryContainer}>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Category;
