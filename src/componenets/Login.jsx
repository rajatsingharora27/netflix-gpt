import React, { useRef, useState } from "react";
import Header from "./Header";
import { useFormik } from "formik";
import { signIn } from "../Schema/SignInSchema";

// const onSubmit = (values, actions) => {
//   // console.log(values, actions, "valuw");
//   console.log(values);
//   console.log(actions);
// };

// const validate = (values) => {
//   const errors = {};
//   if (!values.fullName) {
//     errors.fullName = "Required";
//   } else if (values.fullName.length < 10) {
//     errors.fullName = "Must be 10 characters or less";
//   }

//   if (!values.password) {
//     errors.password = "Required";
//   } else if (values.password.length < 5) {
//     errors.password = "Password must be of minimum length 5";
//   }

//   if (!values.email) {
//     errors.email = "Required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = "Invalid email address";
//   }

//   return errors;
// };

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  function validateFileds(filedsObj) {
    var err = {};
    if (!isSignInForm) {
      if (filedsObj?.fullName?.trim() === "") {
        // err["fullName"] = "Full Name is a Required Field";
        return "Full Name is a Required Field";
      }
    }
    if (filedsObj?.email?.trim() === "") {
      // err["emai"] = "Email is Required";
      return "Email is Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(filedsObj.email.trim())
    ) {
      // err.email = "Incorrect Email Id Format";
      return "Incorrect Email Id Format";
    }

    if (filedsObj?.password?.trim() === "") {
      // err.password = "Passord is Reuired";
      return "Passord is Required";
    }
    // return err;
  }

  const submitForm = () => {
    var value = {
      fullName: !isSignInForm ? fullName?.current?.value : "",
      email: email.current.value,
      password: password.current.value,
    };
    const err = validateFileds(value);

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
              // onChange={handleChange}
              // onBlur={handleBlur}
              // value={values.fullName}
            />
          )}
          <input
            type="email"
            id="email"
            placeholder="Email Address"
            className="w-full p-2 bg-gray-700"
            onChange={(e) => e.target.value}
            ref={email}
            // onChange={handleChange}
            // onBlur={handleBlur}
            // value={values.email}
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="w-full p-2 bg-gray-700"
            onChange={(e) => e.target.value}
            ref={password}
            // onChange={handleChange}
            // onBlur={handleBlur}
            // value={values.password}
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
