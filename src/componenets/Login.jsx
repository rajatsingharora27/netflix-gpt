import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div className="">
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="Logo"
        className="absolute w-[100vw] h-[100vh] bg-image-gradient-315deg from-violet-500 to-fuchsia-500 "
      />

      {/* <div className="absolute top-1/4 left-1/4 w-56 h-60 md:left-1/3 md:h-80 md:w-80 lg:left-[46rem] xl:left-[96rem]"> */}
      {/* <div className="absolute inset-0 m-auto  "> */}
      <form className="absolute mx-auto left-0 right-0 bg-black p-12 w-3/12 my-48 text-white flex flex-col justify-start rounded-lg bg-opacity-80 ">
        <h1 className=" text-3xl font-bold">Sign In</h1>
        <div className="flex flex-col gap-y-11 pt-6">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 bg-gray-700"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 bg-gray-700"
          />
          <button className="text-white bg-red-500 p-4 font-bold rounded-lg">
            Sign in
          </button>
          <p>New to Netflix? Sign up Now </p>
        </div>
      </form>
      {/* </div> */}
    </div>
  );
};

export default Login;
