import React, { useEffect, useState } from "react";
import { auth } from "../utils/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../redux/slice/userSlice";
import { imageConstants } from "../utils/constants/imageConstant";
import { toggleGptSearch } from "../redux/slice/gptSerach";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { SUPPORTED_LANGUAGES } from "../utils/constants/languageGpt";
import { changeLanguage } from "../redux/slice/languageConfigSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [isGptPage, setIsGptPage] = useState(false);

  // const handleHomePage = () => {
  //   navigate("/browse");
  // };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => {
      // when header unmounts we need to unsubscribe
      //because onAuthStateChanged is kind of an event listner
      unsubscribe();
    };
  }, []);

  const signOutButon = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const takeToGptPage = () => {
    dispatch(toggleGptSearch());
    setIsGptPage(!isGptPage);
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    //
    <div className=" absolute w-[100%] px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col items-center justify-center md:flex-row md:justify-between">
      <img
        src={imageConstants.netFlixLogo}
        alt="logo"
        className="cursor-pointer w-44"
        onClick={takeToGptPage}
      />
      {user && (
        <div className="flex gap-x-3  items-center justify-center  w-full md:w-[35%] md:justify-end">
          <Button
            onClick={takeToGptPage}
            className=" bg-red-500  rounded-md text-white font-bold text-xl hover:bg-red-400 "
          >
            {!isGptPage ? "GPT SEARCH" : "Home Page"}
          </Button>
          {isGptPage && (
            <select
              className="p-2 bg-gray-900 text-white m-2 rounded-md w-[25%] md:w-[35%]"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => {
                return (
                  <option
                    className="text-white bg-black "
                    key={lang.identifier}
                  >
                    {lang.language}
                  </option>
                );
              })}
            </select>
          )}
          <Button
            className="bg-red-500  rounded-md text-white font-bold text-xl hover:bg-red-400 shadow-2xl"
            onClick={signOutButon}
          >
            Sign Out
          </Button>
        </div>
      )}
    </div>
  );
};

export default Header;
