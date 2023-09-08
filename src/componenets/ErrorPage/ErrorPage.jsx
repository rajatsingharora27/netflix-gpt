import React from "react";
import Header from "../Header";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { removeErrorMessage } from "../../redux/slice/gptSerach";

const ErrorPage = () => {
  const message = useSelector((store) => store.gptSearch.errorMessage);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleReturnHome = () => {
    dispatch(removeErrorMessage());
    navigate("/");
  };

  return (
    <>
      {/* {user && ( */}

      <div className="bg-black w-[100%] h-[150vh]">
        <h1 className="text-white">{message}</h1>
        <Button onClick={handleReturnHome} className="bg-red p-12">
          Home Page
        </Button>
      </div>
      {/* )} */}
    </>
  );
};

export default ErrorPage;
