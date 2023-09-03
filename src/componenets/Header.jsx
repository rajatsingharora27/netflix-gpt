import React, { useEffect } from "react";
import { auth } from "../utils/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../redux/slice/userSlice";
import { imageConstants } from "../utils/constants/imageConstant";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

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

  return (
    <div className=" absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        src={imageConstants.netFlixLogo}
        alt="logo"
        className="cursor-pointer w-44"
        onClick={() => navigate("/")}
      />
      {user && (
        <div className="flex">
          <button
            className="text-white font-bold text-xl "
            onClick={signOutButon}
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
