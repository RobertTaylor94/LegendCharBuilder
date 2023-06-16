import { createContext, useContext } from 'react';

type User = {
  email: string,
  password: string
}

type AuthContextType = {
  user: User | null
  setUser: (user: User | null) => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: (user: User | null) => {}
})

export const useAuth = () => useContext(AuthContext)

export default AuthContext