/** @format */

import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #141414;
  padding: 3rem 2rem;
  color: #b3b3b3;
  text-align: center;
  margin-top: 4rem;

  .footer-content {
    max-width: 1100px;
    margin: auto;
  }

  h3 {
    color: #e50914;
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
    letter-spacing: 1px;
  }

  p {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
    color: #999;
  }

  .footer-links {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
    margin-bottom: 1.5rem;
  }

  .footer-links a {
    color: #b3b3b3;
    text-decoration: none;
    font-size: 0.85rem;
    transition: color 0.2s ease;
  }

  .footer-links a:hover {
    color: #e50914;
  }

  span {
    font-size: 0.75rem;
    color: #666;
  }
`;
