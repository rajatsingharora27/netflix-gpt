import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateFileds } from "../utils/validation";
import { createNewUser, signIn } from "../utils/firebaseUtils/createNewUser";
import { imageConstants } from "../utils/constants/imageConstant";
import { useDispatch } from "react-redux";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [loader, setLoader] = useState(false);
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const dispatch = useDispatch();

  const submitForm = () => {
    var value = {
      fullName: !isSignInForm ? fullName?.current?.value : "",
      email: email.current.value,
      password: password.current.value,
    };
    const err = validateFileds(value, isSignInForm);
    if (err) {
      setErrorMessage(err);
      return;
    }
    if (!isSignInForm) {
      console.log("loading....");
      createNewUser(
        value.fullName,
        value.email,
        value.password,
        setErrorMessage,
        dispatch
      );
    } else {
      //Sign In logic
      setLoader(!loader);
      signIn(value.email, value.password, setErrorMessage);
      setLoader(!loader);
    }
  };
  const toggle = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage("");
  };

  return (
    <div className="">
      <Header />
      <img
        src={imageConstants.backgroundImage}
        alt="Logo"
        className="absolute w-screen h-screen object-cover bg-image-gradient-315deg from-violet-500 to-fuchsia-500 "
      />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-full  md:w-1/2  mx-auto left-0 right-0 bg-black p-12 lg:w-3/12 my-32 text-white flex flex-col justify-start rounded-lg bg-opacity-80 "
      >
        <h1 className=" text-3xl font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <div className="flex flex-col gap-y-11 pt-6">
          {!isSignInForm && (
            <input
              type="text"
              id="fullName"
              placeholder="Full Name"
              className="w-full p-2 bg-gray-700"
              onChange={(e) => e.target.value}
              ref={fullName}
            />
          )}
          <input
            type="email"
            id="email"
            placeholder="Email Address"
            className="w-full p-2 bg-gray-700"
            onChange={(e) => e.target.value}
            ref={email}
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="w-full p-2 bg-gray-700"
            onChange={(e) => e.target.value}
            ref={password}
          />
          <button
            type="submit"
            className="text-white bg-red-500 p-4 font-bold rounded-lg flex justify-center"
            onClick={submitForm}
          >
            {loader && (
              <svg
                className="animate-spin h-5 w-5 mr-3 bg-black "
                viewBox="0 0 24 24"
              ></svg>
            )}
            <p>{isSignInForm ? "Sign In" : "Sign Up"}</p>
          </button>
          {errorMessage?.length > 0 && (
            <p className=" text-red-500 font-bold text-base">{errorMessage}</p>
          )}
          <p className="cursor-pointer" onClick={toggle}>
            {isSignInForm
              ? " New to Netflix? SignUp Now"
              : "Already a user? SignIn"}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
