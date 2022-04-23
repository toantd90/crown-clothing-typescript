import { Link } from 'react-router-dom';
import { signOutAuthUser } from 'utils/firebase';

import { useAppSelector } from 'store/hooks';
import { selectIsUserSignedIn } from 'store/user/userSlice';
import { selectIsCartOpen } from 'store/cart/cartSlice';

import { CartIcon, CartDropdown } from 'components';

import { ReactComponent as Logo } from 'assets/crown.svg';
import styles from './header.module.scss';

const Header = () => {
  const isUserSignedIn = useAppSelector(selectIsUserSignedIn);
  const isCartOpen = useAppSelector(selectIsCartOpen);
  console.log('Header component isCartOpen: ', isCartOpen);

  return (
    <div className={styles.header}>
      <Link className={styles.logoContainer} to='/'>
        <Logo className={styles.logo} />
      </Link>
      <div className={styles.options}>
        <Link className={styles.option} to='/shop'>
          SHOP
        </Link>
        {!isUserSignedIn ? (
          <Link className={styles.option} to={'/auth'}>
            SIGN IN
          </Link>
        ) : (
          <div className={styles.option} onClick={signOutAuthUser}>
            SIGN OUT
          </div>
        )}
        <CartIcon />
      </div>
      {isCartOpen && <CartDropdown />}
    </div>
  );
};

export default Header;
