import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebaseConfig";

export const createNewUser = (
  fullName,
  email,
  password,
  setErrorMessage,

  dispatch
) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      updateProfile(user, {
        displayName: fullName,
      })
        .then(() => {
          console.log("Updated profile");
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    })
    .catch((error) => {
      setErrorMessage(error.message);
    });
};

export const signIn = (email, password, setErrorMessage) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorMessage);
    });
};
