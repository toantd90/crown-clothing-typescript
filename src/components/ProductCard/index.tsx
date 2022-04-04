import Button from 'components/Button';
import React from 'react';

import { Product } from 'Product-Types';

import styles from './productCard.module.scss';

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const { name, price, imageUrl } = product;
  return (
    <div className={styles.productCardContainer}>
      <img src={imageUrl} alt={`${name}`} />
      <div className={styles.footer}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>{price}</span>
      </div>
      <Button buttonType='inverted'>Add to card</Button>
    </div>
  );
};

export default ProductCard;
