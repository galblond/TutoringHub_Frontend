import React, { useEffect, useState } from "react";
import firebase from "./firebase";
type ContextProps = {
  user: firebase.User | null;
  authenticated: boolean;
  setUser: (user: firebase.User | null) => void;
  loadingAuthState: boolean;
};
export const AuthContext = React.createContext<ContextProps>({
  user: null,
  authenticated: false,
  setUser: (user: firebase.User | null) => {},
  loadingAuthState: true,
});
export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState(null as firebase.User | null);
  const [loadingAuthState, setLoadingAuthState] = useState(true);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user: any) => {
      setUser(user);
      setLoadingAuthState(false);
    });
  }, []);
  return (
    <AuthContext.Provider
      value={{
        user,
        authenticated: user !== null,
        setUser,
        loadingAuthState,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
