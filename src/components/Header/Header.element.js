/** @format */

import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: #141414;
  padding: 0.5rem 2rem;

  .logo {
    color: #e50914 !important;
    font-size: 1.8rem;
    font-weight: bold;
    letter-spacing: 1px;
  }

  .nav-link {
    color: white !important;
    font-size: 1rem;
    margin-left: 1.5rem;
    transition: color 0.2s ease;
  }

  .nav-link:hover {
    color: #e50914 !important;
  }
`;
