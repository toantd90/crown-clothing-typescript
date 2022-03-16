// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  UserCredential,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCnQpjZ4OqCCpWAgnzFX38gnFYvCceM39U',
  authDomain: 'crown-clothing-db-3daae.firebaseapp.com',
  projectId: 'crown-clothing-db-3daae',
  storageBucket: 'crown-clothing-db-3daae.appspot.com',
  messagingSenderId: '647577511730',
  appId: '1:647577511730:web:226a91cf7dc397361e992b',
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth: UserCredential) => {
  const { user } = userAuth;
  const userDocRef = doc(db, 'users', user.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = user;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log('Error creating the user', (error as Error).message);
    }
  }

  return userDocRef;
};
