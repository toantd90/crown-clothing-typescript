import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from 'utils/firebase';

// import styles from './signIn.module.scss';

const SignIn = () => {
  const logGoogleUser = async () => {
    const user = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In with Google</button>
    </div>
  );
};

export default SignIn;
