import { useContext } from 'react';

import { CartContext } from 'contexts/cart';

import { Button, CartItem } from 'components';

import { CartItem as CarItemType } from 'Product-Types';

import styles from './cartDropdown.module.scss';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className={styles.cartDropdownContainer}>
      <div className={styles.cartItems}>
        {cartItems.map((cartItem: CarItemType) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <Button>Go to checkout</Button>
    </div>
  );
};

export default CartDropdown;
