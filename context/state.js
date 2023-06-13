import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase/config';

const AppContext = createContext();

export function AppWrapper({ children }) {

    const [user, setUser] = useState(null)

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUser(user)
        })
    }, [])

  return (
    <AppContext.Provider value={user}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}