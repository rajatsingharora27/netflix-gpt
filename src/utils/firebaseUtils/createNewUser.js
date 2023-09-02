import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebaseConfig";

export const createNewUser = (email, password, setErrorMessage, navigate) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      console.log(userCredential);
      console.log("user Signed Up Successually");
      navigate("/browse");
    })
    .catch((error) => {
      setErrorMessage(error.message);
    });
};

export const signIn = (email, password, setErrorMessage, navigate) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      navigate("/browse");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorMessage);
    });
};
