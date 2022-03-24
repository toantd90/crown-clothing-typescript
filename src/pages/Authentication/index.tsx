import { SignUpForm, SignInForm } from 'components';

import styles from './authentication.module.scss';

const Authentication = () => {
  return (
    <div className={styles.authenticationContainer}>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
