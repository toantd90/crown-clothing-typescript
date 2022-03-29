import { createContext, useState } from 'react';

import { UserCredential } from 'firebase/auth';

const useValue = () => {
  const [currentUser, setCurrentUser] = useState<UserCredential>(
    {} as UserCredential,
  );

  return {
    currentUser,
    setCurrentUser,
  };
};

export const UserContext = createContext({} as ReturnType<typeof useValue>);

export const UserProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const { currentUser, setCurrentUser } = useValue();

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};
