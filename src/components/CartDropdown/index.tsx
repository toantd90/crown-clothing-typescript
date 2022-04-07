import Button from 'components/Button';
import React from 'react';

import styles from './cartDropdown.module.scss';

const CartDropdown = () => {
  return (
    <div className={styles.cartDropdownContainer}>
      <div className={styles.cartItems} />
      <Button>Go to checkout</Button>
    </div>
  );
};

export default CartDropdown;
