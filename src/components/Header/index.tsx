import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from 'assets/crown.svg';
import styles from './header.module.scss';

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
  },
];

const Header = () => {
  return (
    <div className={styles.header}>
      <Link className={styles.logoContainer} to='/'>
        <Logo className={styles.logo} />
      </Link>
      <div className={styles.options}>
        {HEADER_OPTIONS.map(({ text, to }) => (
          <Link className={styles.option} to={to}>
            {text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
