import { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut, 
  signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config'

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  const createNewUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true)
    return signOut(auth);
  };

  const updateUserProfile = (updateData) =>{
    return updateProfile(auth.currentUser , updateData)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    createNewUser,
    loginUser,
    logOut,
    setUser,
    loading,
    updateUserProfile
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
