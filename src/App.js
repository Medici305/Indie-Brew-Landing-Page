import React from "react";
import Home from "./Pages/home";
import Login from "./Pages/login";
import Pricing from "./Pages/pricing";
import { Routes, Route } from "react-router";
import Support from "./Pages/support";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-account" element={<Login />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </>
  );
};

export default App;
