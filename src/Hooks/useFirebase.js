import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  GithubAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";

initializeFirebase();
const useFirebase = () => {
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const auth = getAuth();

  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    signOut(auth)
      .then(() => setUser({}))
      .catch((err) => setError(err.message));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  const githubSignIn = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const facebookSignIn = () => {
   return  signInWithPopup(auth, facebookProvider)
      
  }


  return {
    googleSignIn,
    githubSignIn,
    facebookSignIn,
    logOut,
    setUser,
    setError,
    user,
    error,
  };
};

export default useFirebase;
