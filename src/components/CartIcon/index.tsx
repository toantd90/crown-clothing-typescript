import { useAppDispatch, useAppSelector } from 'store/hooks';
import {
  selectCartCount,
  selectIsCartOpen,
  setIsCartOpen,
} from 'store/cart/slice';

import { ReactComponent as ShoppingBagIcon } from 'assets/shopping-bag.svg';

import styles from './cartIcon.module.scss';

const CartIcon = () => {
  const dispatch = useAppDispatch();
  const isCartOpen = useAppSelector(selectIsCartOpen);
  const cartCount = useAppSelector(selectCartCount);

  const handleOnCartIconClick = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <div className={styles.cartIconContainer} onClick={handleOnCartIconClick}>
      <ShoppingBagIcon className={styles.shoppingIcon} />
      <span className={styles.itemCount}>{cartCount}</span>
    </div>
  );
};

export default CartIcon;
