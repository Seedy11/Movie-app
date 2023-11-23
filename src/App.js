/** @format */

import React from "react";
import Home from "./Screen/Home/Home";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Register from "./Screen/Register/Register";
import { Headers } from "./components/Header/Headers";
import Login from "./Screen/Login/Login";
import Text from "./components/Text/Text";
import { HeaderContainer } from "./components/Header/Header.element";

export default function App() {
  return (
    <BrowserRouter>
      <HeaderContainer>
        <Link to="/" style={{ textDecoration: "none", fontSize: "2rem" }}>
          Home
        </Link>
        <Link
          to="/register"
          style={{ textDecoration: "none", fontSize: "2rem" }}>
          Register
        </Link>
      </HeaderContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
