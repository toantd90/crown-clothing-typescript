import { useAppDispatch } from 'store/hooks';
import {
  addCartItem,
  removeCartItem,
  clearCartItem,
} from 'store/cart/slice';
import { CartItem } from 'Cart-Types';

import styles from './checkoutItem.module.scss';

type Props = {
  cartItem: CartItem;
};

const CheckoutItem = ({ cartItem }: Props) => {
  const dispatch = useAppDispatch();

  const { name, quantity, imageUrl, price } = cartItem;

  const handleAddCardItem = () => dispatch(addCartItem(cartItem));

  const handleRemoveCardItem = () => dispatch(removeCartItem(cartItem));

  const handleClearCartItem = () => dispatch(clearCartItem(cartItem));

  return (
    <div className={styles.checkoutItemContainer}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className={styles.name}>{name}</span>
      <span className={styles.quantity}>
        <div className={styles.arrow} onClick={handleRemoveCardItem}>
          &#10094;
        </div>
        <div className={styles.value}>{quantity}</div>
        <div className={styles.arrow} onClick={handleAddCardItem}>
          &#10095;
        </div>
      </span>
      <span className={styles.price}>{price}</span>
      <div className={styles.removeBtn} onClick={handleClearCartItem}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
