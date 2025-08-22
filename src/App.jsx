// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginFirst from "./Loginfirst";
import Login from "./Login";
import Sign from "./Sign";
import PHome from "./PHome";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginFirst />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign" element={<Sign />} />
      <Route path="/home" element={<PHome />} />
    </Routes>
  );
}

export default App;
