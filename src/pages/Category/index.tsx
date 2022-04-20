import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { CategoriesContext } from 'contexts/categories';
import { Product } from 'Product-Types';

import styles from './category.module.scss';
import { ProductCard } from 'components';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState<Product[]>(
    categoriesMap[category || ''],
  );

  useEffect(() => {
    setProducts(categoriesMap[category || '']);
  }, [categoriesMap, category]);

  return (
    <div className={styles.categoryContainer}>
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default Category;
