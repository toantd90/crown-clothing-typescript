import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from 'contexts/cart';

import { Button, CartItem } from 'components';

import { CartItem as CarItemType } from 'Product-Types';

import styles from './cartDropdown.module.scss';

const CartDropdown = () => {
  const { setIsCartOpen, cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const handleGoToCheckout = () => {
    navigate('/checkout');
    setIsCartOpen(false);
  };

  return (
    <div className={styles.cartDropdownContainer}>
      <div className={styles.cartItems}>
        {cartItems.map((cartItem: CarItemType) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <Button onClick={handleGoToCheckout}>Go to checkout</Button>
    </div>
  );
};

export default CartDropdown;
