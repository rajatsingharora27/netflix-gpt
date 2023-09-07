import React, { useEffect, useState } from "react";
import { auth } from "../utils/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../redux/slice/userSlice";
import { imageConstants } from "../utils/constants/imageConstant";
import { toggleGptSearch } from "../redux/slice/gptSerach";
import { Button } from "@mui/material";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [isGptPage, setIsGptPage] = useState(false);

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

  return (
    //
    <div className=" absolute w-[100%] px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        src={imageConstants.netFlixLogo}
        alt="logo"
        className="cursor-pointer w-44"
        onClick={() => navigate("/")}
      />
      {user && (
        <div className="flex gap-x-2">
          <Button
            onClick={takeToGptPage}
            className="bg-purple-600 mx-2 my-2 px-8 rounded-md text-white font-bold text-xl hover:bg-purple-400 "
          >
            {!isGptPage ? "GPT SEARCH" : "Home"}
          </Button>
          <Button
            className="text-white font-bold text-xl "
            onClick={signOutButon}
          >
            (Sign Out)
          </Button>
        </div>
      )}
    </div>
  );
};

export default Header;
