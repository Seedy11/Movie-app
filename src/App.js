/** @format */

import React from "react";
import Home from "./Screen/Home/Home";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Register from "./Screen/Register/Register";
import Search from "./Screen/Search/Search";
import "./App.css";
import Login from "./Screen/Login/Login";
import { HeaderContainer } from "./components/Header/Header.element";
import { Nav, Navbar } from "react-bootstrap";
import MovieDetail from "./Screen/MovieDetail/MovieDetail";

export default function App() {
  return (
    <BrowserRouter>
      <HeaderContainer>
        <Navbar expand="lg" className="navbar-dark">
          <Navbar.Brand as={Link} to="/" className="logo">
            TIGERMOVIE
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/search">
                Search
              </Nav.Link>
              <Nav.Link as={Link} to="/register">
                Register
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </HeaderContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/movieDetail/:id" element={<MovieDetail />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
