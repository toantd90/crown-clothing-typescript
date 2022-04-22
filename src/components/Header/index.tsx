import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { signOutAuthUser } from 'utils/firebase';

import { CartContext } from 'contexts/cart';

import { useAppSelector } from 'store/hooks';
import { selectIsUserSignedIn } from 'store/user/userSlice';

import { CartIcon, CartDropdown } from 'components';

import { ReactComponent as Logo } from 'assets/crown.svg';
import styles from './header.module.scss';

const Header = () => {
  const isUserSignedIn = useAppSelector(selectIsUserSignedIn);

  const { isCartOpen } = useContext(CartContext);

  const HEADER_OPTIONS = [
    {
      text: 'SHOP',
      to: '/shop',
    },
    {
      text: 'SIGN IN',
      to: '/auth',
      needSignIn: false,
    },
    {
      text: 'SIGN OUT',
      to: '/auth',
      needSignIn: true,
      onClick: signOutAuthUser,
    },
  ];

  return (
    <div className={styles.header}>
      <Link className={styles.logoContainer} to='/'>
        <Logo className={styles.logo} />
      </Link>
      <div className={styles.options}>
        {HEADER_OPTIONS.map(({ text, to, needSignIn, onClick }, index) => (
          <div key={index}>
            {needSignIn === undefined ||
            (isUserSignedIn && !needSignIn) ||
            (!isUserSignedIn && needSignIn) ? (
              <Link className={styles.option} to={to || ''} onClick={onClick}>
                {text}
              </Link>
            ) : null}
          </div>
        ))}
        <CartIcon />
      </div>
      {isCartOpen && <CartDropdown />}
    </div>
  );
};

export default Header;
