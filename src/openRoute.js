import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/signUp";
import Login from "./pages/login";

const OpenRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Login />} /> 
      </Routes>
    </>
  );
};

export default OpenRoutes;
