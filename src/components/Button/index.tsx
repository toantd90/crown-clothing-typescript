import { ReactNode } from 'react';
import styles from './button.module.scss';

type Props = {
  children?: ReactNode;
  buttonType?: 'google' | 'inverted';
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
};

const BUTTON_TYPE_CLASSES = {
  google: styles.googleSignIn,
  inverted: styles.inverted,
};

const Button = ({ children, buttonType, ...rest }: Props) => {
  return (
    <button
      className={`${styles.buttonContainer} ${
        buttonType ? BUTTON_TYPE_CLASSES[buttonType] : ''
      }`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
