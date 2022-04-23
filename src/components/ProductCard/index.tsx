import { useAppDispatch } from 'store/hooks';
import { addCartItem } from 'store/cart/cartSlice';

import { Button } from 'components';

import { Product } from 'Cart-Types';

import styles from './productCard.module.scss';

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const dispatch = useAppDispatch();

  const { name, price, imageUrl } = product;

  const handleAddProductToCart = () => dispatch(addCartItem(product));

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
