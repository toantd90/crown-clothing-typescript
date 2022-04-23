import { useNavigate } from 'react-router-dom';

import { Button, CartItem } from 'components';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import { selectCartItems, setIsCartOpen } from 'store/cart/cartSlice';

import { CartItem as CarItemType } from 'Cart-Types';

import styles from './cartDropdown.module.scss';

const CartDropdown = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const cartItems = useAppSelector(selectCartItems);

  const handleGoToCheckout = () => {
    navigate('/checkout');

    dispatch(setIsCartOpen(false));
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
