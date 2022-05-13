import React from 'react';
import { createUserDocumentFromAuth, signInWithGooglePopup } from '../../utils/firebase/firebase.utils';

// todo: response undefined
const SignIn = () => {
  const logGoogleUser = async () => {
    const { response } = await signInWithGooglePopup();
    // createUserDocumentFromAuth(response);
    console.log('response:', response);
  };


  return (
    <div>
      <button onClick={logGoogleUser}>
        Sign In With Google
      </button>
    </div>
  );
};

export default SignIn;