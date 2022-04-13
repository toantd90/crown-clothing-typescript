import { useContext } from 'react';

import { CartContext } from 'contexts/cart';

import Button from 'components/Button';

import { Product } from 'Product-Types';

import styles from './productCard.module.scss';

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const { name, price, imageUrl } = product;
  const { cartItemChange } = useContext(CartContext);

  const handleAddProductToCart = () => cartItemChange(product);

  return (
    <div className={styles.productCardContainer}>
      <img src={imageUrl} alt={`${name}`} />
      <div className={styles.footer}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>{price}</span>
      </div>
      <Button buttonType='inverted' onClick={handleAddProductToCart}>
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
