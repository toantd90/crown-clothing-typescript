import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from 'contexts/users';
import { isObjectEmpty } from 'utils/object';
import { signOutAuthUser } from 'utils/firebase';
import { UserCredential } from 'firebase/auth';

import { ReactComponent as Logo } from 'assets/crown.svg';
import styles from './header.module.scss';

const Header = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const handleSignOut = async () => {
    await signOutAuthUser;
    setCurrentUser({} as UserCredential);
  };

  const HEADER_OPTIONS = [
    {
      text: 'SHOP',
      to: '/shop',
    },
    {
      text: 'CONTACT',
      to: '/contact',
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
      onClick: handleSignOut,
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
            (isObjectEmpty(currentUser) && !needSignIn) ||
            (!isObjectEmpty(currentUser) && needSignIn) ? (
              <Link className={styles.option} to={to || ''} onClick={onClick}>
                {text}
              </Link>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
