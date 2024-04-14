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
        <Navbar expand="lg">
          {/* <p>uhuihjjjjjjjjjjjjjj</p> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link
                  to="/"
                  style={{ textDecoration: "none", fontSize: "2rem" }}>
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link to="login">
                <Link
                  to="/search"
                  style={{
                    textDecoration: "none",
                    fontSize: "2rem",
                    marginLeft: "2rem",
                  }}>
                  Search
                </Link>
              </Nav.Link>
              <Nav.Link href="#action/3.2">
                <Link
                  to="/register"
                  style={{
                    textDecoration: "none",
                    fontSize: "2rem",
                    marginLeft: "2rem",
                  }}>
                  Register
                </Link>
              </Nav.Link>
              <Nav.Link href="#action/3.1">
                <Link
                  to="login"
                  style={{
                    textDecoration: "none",
                    fontSize: "2rem",
                    marginLeft: "2rem",
                  }}>
                  Login
                </Link>
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
