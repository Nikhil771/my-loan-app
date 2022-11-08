import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/signUp";
import Login from "./pages/login";
import Header from "./components/sharedComponent/header";
import Footer from "./components/sharedComponent/footer";

const OpenRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
};

export default OpenRoutes;
