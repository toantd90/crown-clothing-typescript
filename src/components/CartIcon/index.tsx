import { useContext } from 'react';

import { CartContext } from 'contexts/cart';
import { ReactComponent as ShoppingBagIcon } from 'assets/shopping-bag.svg';

import styles from './cartIcon.module.scss';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const handleOnCartIconClick = () => setIsCartOpen(!isCartOpen);

  return (
    <div className={styles.cartIconContainer} onClick={handleOnCartIconClick}>
      <ShoppingBagIcon className={styles.shoppingIcon} />
      <span className={styles.itemCount}>{cartCount}</span>
    </div>
  );
};

export default CartIcon;
