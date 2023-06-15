import { useState } from 'react';
import AuthContext from '../context/state';

function Application({ Component, pageProps }) {
  const [user, setUser] = useState<User | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}

export default Application;