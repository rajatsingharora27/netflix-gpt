import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateFileds } from "../utils/validation";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const submitForm = () => {
    var value = {
      fullName: !isSignInForm ? fullName?.current?.value : "",
      email: email.current.value,
      password: password.current.value,
    };
    const err = validateFileds(value, isSignInForm);

    setErrorMessage(err);
    // console.log(errorMessage);
    // console.log(err);
  };
  const toggle = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage("");
  };

  return (
    <div className="">
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="Logo"
        className="absolute w-[100vw] h-[100vh] bg-image-gradient-315deg from-violet-500 to-fuchsia-500 "
      />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute mx-auto left-0 right-0 bg-black p-12 w-3/12 my-32 text-white flex flex-col justify-start rounded-lg bg-opacity-80 "
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
            className="text-white bg-red-500 p-4 font-bold rounded-lg"
            onClick={submitForm}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
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
