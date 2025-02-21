import React from "react";
import Signup from "../Authentication/Signup";
import { Routes, Route } from "react-router-dom";
const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/sign-up" element={<Signup />} />
    </Routes>
  );
};

export default AuthRoutes;
