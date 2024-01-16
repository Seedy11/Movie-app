/** @format */

import React from "react";
import Home from "./Screen/Home/Home";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Register from "./Screen/Register/Register";
import Search from "./Screen/Search/Search";
import { IoIosLogIn, IoMdHome } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import Login from "./Screen/Login/Login";
import { HeaderContainer } from "./components/Header/Header.element";

export default function App() {
  return (
    <BrowserRouter>
      <HeaderContainer>
        <Link
          to="/"
          style={{
            marginLeft: "2rem",
            textDecoration: "none",
            fontSize: "1.5rem",
          }}>
          <IoMdHome />
          Home
        </Link>
        <Link
          to="/search"
          style={{
            marginLeft: "2rem",
            textDecoration: "none",
            fontSize: "1.5rem",
          }}>
          <IoMdHome />
          Search
        </Link>
        <Link
          to="/register"
          style={{
            marginLeft: "2rem",
            textDecoration: "none",
            fontSize: "1.5rem",
          }}>
          <CgProfile />
          Register
        </Link>
        <Link
          to="/login"
          style={{
            marginLeft: "2rem",
            // paddingBottom: "2rem",
            textDecoration: "none",
            fontSize: "1.5rem",
          }}>
          <IoIosLogIn />
          Login
        </Link>
      </HeaderContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
