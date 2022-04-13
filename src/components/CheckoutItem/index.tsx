import { useContext } from 'react';
import { CartContext } from 'contexts/cart';
import { CartItem } from 'Product-Types';

import styles from './checkoutItem.module.scss';

type Props = {
  cartItem: CartItem;
};

const CheckoutItem = ({ cartItem }: Props) => {
  const { cartItemChange, cartItemRemove } = useContext(CartContext);
  const { name, quantity, imageUrl, price } = cartItem;

  const handleCardItemChange = (isIncrease: boolean = true) => {
    cartItemChange(cartItem, isIncrease);
  };

  const handleCartItemRemove = () => {
    cartItemRemove(cartItem);
  };

  return (
    <div className={styles.checkoutItemContainer}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className={styles.name}>{name}</span>
      <span className={styles.quantity}>
        <div
          className={styles.arrow}
          onClick={() => handleCardItemChange(false)}
        >
          &#10094;
        </div>
        <div className={styles.value}>{quantity}</div>
        <div className={styles.arrow} onClick={() => handleCardItemChange()}>
          &#10095;
        </div>
      </span>
      <span className={styles.price}>{price}</span>
      <div className={styles.removeBtn} onClick={() => handleCartItemRemove()}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
