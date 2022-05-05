import { Link } from 'react-router-dom';
import { signOutAuthUser } from 'utils/firebase';

import { useAppSelector } from 'store/hooks';
import { selectCurrentUser } from 'store/user/slice';
import { selectIsCartOpen } from 'store/cart/slice';

import { CartIcon, CartDropdown } from 'components';

import { ReactComponent as Logo } from 'assets/crown.svg';
import styles from './header.module.scss';

const Header = () => {
  const currentUser = useAppSelector(selectCurrentUser);
  const isCartOpen = useAppSelector(selectIsCartOpen);

  return (
    <div className={styles.header}>
      <Link className={styles.logoContainer} to='/'>
        <Logo className={styles.logo} />
      </Link>
      <div className={styles.options}>
        <Link className={styles.option} to='/shop'>
          SHOP
        </Link>
        {currentUser ? (
          <div className={styles.option} onClick={signOutAuthUser}>
            SIGN OUT
          </div>
        ) : (
          <Link className={styles.option} to={'/auth'}>
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {isCartOpen && <CartDropdown />}
    </div>
  );
};

export default Header;
