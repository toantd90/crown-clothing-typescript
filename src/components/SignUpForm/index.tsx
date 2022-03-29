import { ChangeEvent, FormEvent, useState } from 'react';
import { Button, FormInput } from 'components';

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from 'utils/firebase';

import styles from './signUpForm.module.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => setFormFields(defaultFormFields);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const userCredential = await createAuthUserWithEmailAndPassword(
        email,
        password,
      );

      if (userCredential) {
        createUserDocumentFromAuth(userCredential.user, { displayName });
      }

      resetFormFields();
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Email already in use');
      } else {
        console.log('user creation encountered an error: ', error);
      }
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  return (
    <div className={styles.signUpFormContainer}>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          name='displayName'
          type='text'
          value={displayName}
          onChange={handleChange}
          required={true}
        />

        <FormInput
          label='Email'
          name='email'
          type='email'
          value={email}
          onChange={handleChange}
          required={true}
        />

        <FormInput
          label='Password'
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          required
        />

        <FormInput
          label='Confirm Password'
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          required
        />

        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
