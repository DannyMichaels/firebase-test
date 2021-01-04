import React, {
  useContext,
  createContext,
  useState,
  useEffect,
  SetStateAction,
} from 'react';
import { auth } from '../firebase';
import firebase from 'firebase/app';

interface IAuthContext {
  currentUser: firebase.User | null;
  signup(email: string, password: string): Promise<void>;
  logout: () => Promise<void>;
  updateEmail(email: string): Promise<void>;
  updatePassword(password: string): Promise<void>;
  login(email: string, password: string): Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);
  const [loading, setLoading] = useState(true);
  // firebase way of handling auth.
  function signup(email: string, password: string) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email: string, password: string) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email: string) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email: string) {
    return currentUser?.updateEmail(email);
  }

  function updatePassword(password: string) {
    return currentUser?.updatePassword(password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user as React.SetStateAction<firebase.User | null>);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const value = {
    currentUser,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    login,
  };

  return (
    <AuthContext.Provider value={value as IAuthContext}>
      {/* if we're not loading, then we want to render the children */}
      {!loading && children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
