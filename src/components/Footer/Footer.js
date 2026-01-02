/** @format */

import React from "react";
import { FooterContainer } from "./Footer.element";

export default function Footer() {
  return (
    <FooterContainer>
      <div className="footer-content">
        <h3>TIGERMOVIE</h3>
        <p>Netflix-inspired movie discovery platform built with React.</p>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/search">Search</a>
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>

        <span>
          © {new Date().getFullYear()} TIGERMOVIE. All rights reserved.
        </span>
      </div>
    </FooterContainer>
  );
}
