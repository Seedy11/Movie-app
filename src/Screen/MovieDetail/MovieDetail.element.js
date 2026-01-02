/** @format */

import styled from "styled-components";

/* Hero Background */
export const MovieHero = styled.div`
  min-height: 100vh;
  padding: 6rem 0;
  background: linear-gradient(
      to right,
      rgba(20, 20, 20, 0.95),
      rgba(20, 20, 20, 0.6)
    ),
    url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
  color: white;
`;

/* Poster */
export const Poster = styled.img`
  width: 100%;
  border-radius: 0.6rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.9);
`;

/* Content */
export const MovieContent = styled.div`
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
`;

/* Meta Info */
export const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: #bbb;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
`;

/* Overview */
export const Overview = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 700px;
  margin-bottom: 2rem;
`;

/* Info Grid */
export const InfoGrid = styled.div`
  display: flex;
  gap: 3rem;

  div strong {
    color: #e50914;
    font-size: 0.85rem;
  }

  div p {
    margin-top: 0.3rem;
    color: #ddd;
  }
`;

/* Loading */
export const LoadingState = styled.div`
  min-height: 100vh;
  background-color: #141414;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
