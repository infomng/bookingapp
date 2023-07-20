import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";
import Login from "./pages/login/Login";
// import Login from "./pages/register/Register";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />                     {/* page principale*/ }
        <Route path="hotels" element={<List />} />                {/* afficher un ensemble d'hotel selon une localité donné  */}
        <Route path="hotels/:id" element={<Hotel />} />           {/* afficher un hotle en fonction de son id */}
        <Route path="/login" element={<Login />} />
        {/* <Route path="/register" element={<Register />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
