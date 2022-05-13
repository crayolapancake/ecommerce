import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCHhSnupKuvbonKb05Tb7qOpusS7uGMzzU",
  authDomain: "ecommerce-3efc9.firebaseapp.com",
  projectId: "ecommerce-3efc9",
  storageBucket: "ecommerce-3efc9.appspot.com",
  messagingSenderId: "640180778909",
  appId: "1:640180778909:web:efc41e4bf9fc261cc86174"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

// export const createUserDocumentFromAuth = async (userAuth) => {
//   // db, collection name, identifier from user object
//   const userDocRef = doc(db, 'users', userAuth.uid);
//   console.log('userDocRef:', userDocRef);
// };