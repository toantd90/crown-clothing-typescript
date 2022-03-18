import { ChangeEvent } from 'react';

import styles from './formInput.module.scss';

type Props = {
  label: string;
  name: string;
  value: string;
  type: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
};

const FormInput = ({ label, ...rest }: Props) => {
  return (
    <div className={styles.formInputContainer}>
      <input className={styles.formInput} {...rest} />
      {label && (
        <label
          className={`${rest.value.length ? styles.shrink : ''} ${
            styles.formInputLabel
          }`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
