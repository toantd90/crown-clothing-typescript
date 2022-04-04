import { createContext, useEffect, useState } from 'react';

import { User } from 'firebase/auth';

import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from 'utils/firebase';

const useValue = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  return {
    currentUser,
    setCurrentUser,
  };
};

export const UserContext = createContext({} as ReturnType<typeof useValue>);

export const UserProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const { currentUser, setCurrentUser } = useValue();

  useEffect(() => {
    const unsubcribe = onAuthStateChangedListener((user) => {
      if (user) createUserDocumentFromAuth(user);
      setCurrentUser(user);
    });

    return unsubcribe;
  }, []);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};
