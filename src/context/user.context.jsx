import { createContext, useEffect, useState } from 'react';
import { createUserDocumentFromAuth, onAuthStateChangedListener } from '../utils/firebase/firebase.utils';

// actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null, // initialised as an emoty function
});

// provider is acual cmpnent
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    // unsubscribe listener on unmount - prevent memory leak

    const unsubscribe = onAuthStateChangedListener((user) => {
      console.log("user:", user);

      if(user){
        createUserDocumentFromAuth(user)
      }
      setCurrentUser(user);
    });
    
    return unsubscribe;
  }, []);

  // context wrapper allows all children (ie entire app) to access values of getting and setting the user
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};