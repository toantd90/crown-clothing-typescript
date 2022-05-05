import { useAppSelector } from 'store/hooks';

import { CheckoutItem, PaymentForm } from 'components';
import { selectCartItems, selectCartTotal } from 'store/cart/slice';

import styles from './checkout.module.scss';

const Checkout = () => {
  const cartItems = useAppSelector(selectCartItems);
  const cartTotal = useAppSelector(selectCartTotal);

  return (
    <div className={styles.checkoutContainer}>
      <div className={styles.checkoutHeader}>
        <div className={styles.headerBlock}>
          <span>Product</span>
        </div>
        <div className={styles.headerBlock}>
          <span>Description</span>
        </div>
        <div className={styles.headerBlock}>
          <span>Quantity</span>
        </div>
        <div className={styles.headerBlock}>
          <span>Price</span>
        </div>
        <div className={styles.headerBlock}>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}

      <span className={styles.total}>Total: ${cartTotal}</span>
      <PaymentForm />
    </div>
  );
};

export default Checkout;
