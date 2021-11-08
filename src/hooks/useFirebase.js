import { useEffect, useState } from "react";
import initializeFirebase from "../pages/Login/Firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile
} from "firebase/auth";

// initialize Firebase user
initializeFirebase();

const useFirebase = () => {
  // state changed user
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('')
  // get auth firebase
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // registerUser
  const registerUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          setAuthError('');
          const newUser = {email, displayName: name };
          setUser(newUser)
          // send name to firebase after creation
          updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
            
          }).catch((error) => {
            
          });

          history.replace('/');
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  // loginUser
  const loginUser = (email, password, location,history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
         const destination = location?.state?.from || '/';
         history.replace(destination)
        setAuthError('');
      })
      .catch((error) => {
        setAuthError(error.message);
    })
    .finally(() => setIsLoading(false));
  };

  // google sign in
  const signInWithGoogle = (location,history) =>{
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
  .then((result) => {
    const user = result.user;
    const destination = location?.state?.from || '/';
    history.replace(destination)
    setAuthError('');
  }).catch((error) => {
    setAuthError(error.message);
  }).finally(() => setIsLoading(false));

  }
  // observer user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);

  // logout
  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };
  return {
    user,
    isLoading,
    authError,
    registerUser,
    logout,
    loginUser,
    signInWithGoogle
  };
};
export default useFirebase;
