import ProductCard from 'components/ProductCard';
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
        <span className={styles.title}>{title.toUpperCase()}</span>
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
