// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

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
