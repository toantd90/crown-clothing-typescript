import { Link } from 'react-router-dom';

import { ProductCard } from 'components';
import { Product } from 'Product-Types';

import styles from './categoryPreview.module.scss';

type CategoryPreviewProps = {
  title: string;
  products: Product[];
};

const CategoryPreview = ({ title, products }: CategoryPreviewProps) => {
  return (
    <div className={styles.categoryPreviewContainer}>
      <h2>
        <Link className={styles.title} to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className={styles.preview}>
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
