import { ChangeEvent, FormEvent, useState } from 'react';
import { Button, FormInput } from 'components';

import styles from './signInForm.module.scss';
import {
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from 'utils/firebase';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => setFormFields(defaultFormFields);

  const handleSignInWithGoogle = async () => {
    const user = await signInWithGooglePopup();

    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error: any) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log(error);
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
    <div className={styles.signUpContainer}>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
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
          name='password'
          type='password'
          value={password}
          onChange={handleChange}
          required={true}
        />

        <div className={styles.buttonContainer}>
          <Button type='submit'>Sign In</Button>
          <Button
            type='button'
            buttonType='google'
            onClick={handleSignInWithGoogle}
          >
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
